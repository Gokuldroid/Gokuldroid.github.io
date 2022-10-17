---
path: being-a-privileged-website
tags:
  - programming
  - software development
date: 2022-10-17T09:03:29.000Z
title: 
render_in_place: false
categories:
  - software development
---
We all know that not everyone in this world is having equal privileges. I have spent quite a lot of time fixing IE bugs in my early stage of my career. It is super frustrating to handle all edge cases for all supported versions of every famous browsers. But do you believe that even websites doesn't have equal privileges in the browsers that we use in our day to day life?. Yes, it is true. the same code and same business logic might not work in the exact same browser, if you deploy it in the different domain. read more to understand what I am talking about

you might know webkit already if you're frontend developer. incase if you don't know about it already.

> WebKit is a cross-platform web browser engine. On iOS and macOS, it powers Safari, Mail, iBooks, and many other applications. 

Recently, apple made [it](https://github.com/WebKit/WebKit) open source in github. by digging at it's [source](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/Quirks.cpp?s=08) we can find some interesting stuffs.


For example this one, on a hindsight it tries to suppress native auto correction in google docs. but why does even a browser engine developed by apple originally having some hacks to support a feature developed by google using some hacks. surprising isn't it?. 

```cpp
static bool shouldSuppressAutocorrectionAndAutocaptializationInHiddenEditableAreasForHost(StringView host)
{
#if PLATFORM(IOS_FAMILY)
    return equalLettersIgnoringASCIICase(host, "docs.google.com"_s);
#else
    UNUSED_PARAM(host);
    return false;
#endif
}
```

Need more?

here are some examples,

```cpp
// FIXME: Remove after the site is fixed, <rdar://problem/75792913>
bool Quirks::shouldHideSearchFieldResultsButton() const
{
#if ENABLE(IOS_FORM_CONTROL_REFRESH)
    if (!needsQuirks())
        return false;

    if (topPrivatelyControlledDomain(m_document->topDocument().url().host().toString()).startsWith("google."_s))
        return true;
#endif
    return false;
}
```

They even have special handling with CSS class name.

```cpp
bool Quirks::shouldMakeTouchEventNonCancelableForTarget(EventTarget* target) const
{
    if (!needsQuirks())
        return false;

    auto host = m_document->topDocument().url().host();

    if (equalLettersIgnoringASCIICase(host, "www.youtube.com"_s)) {
        if (is<Element>(target)) {
            unsigned depth = 3;
            for (auto* element = downcast<Element>(target); element && depth; element = element->parentElement(), --depth) {
                if (element->localName() == "paper-item"_s && element->classList().contains("yt-dropdown-menu"_s))
                    return true;
            }
        }
    }

    return false;
}
```

And this one,

```
static bool isKinjaLoginAvatarElement(const Element& element)
{
    // The click event handler has been found to trigger on a div or
    // span with these class names, or the svg, or the svg's path.
    if (element.hasClass()) {
        auto& classNames = element.classNames();
        if (classNames.contains("js_switch-to-burner-login"_s)
            || classNames.contains("js_header-userbutton"_s)
            || classNames.contains("sc-1il3uru-3"_s) || classNames.contains("cIhKfd"_s)
            || classNames.contains("iyvn34-0"_s) || classNames.contains("bYIjtl"_s))
            return true;
    }

    const Element* svgElement = nullptr;
    if (is<SVGSVGElement>(element))
        svgElement = &element;
    else if (is<SVGPathElement>(element) && is<SVGSVGElement>(element.parentElement()))
        svgElement = element.parentElement();

    if (svgElement && svgElement->hasAttributes()) {
        auto ariaLabelAttr = svgElement->attributes().getNamedItem("aria-label"_s);
        if (ariaLabelAttr && ariaLabelAttr->value() == "UserFilled icon"_s)
            return true;
    }

    return false;
}
```

Same PR description of one pity developer

```txt
 Regression(252759@main) Unable to log into pandora.com

https://bugs.webkit.org/show_bug.cgi?id=246430
rdar://100243111

Reviewed by Geoffrey Garen and Ryosuke Niwa.

We're unable to log into pandora.com since un-exposing window.showModalDialog()
in 252759@main. Pandora does not actually seem to call showModalDialog() but
they are calling its getter on the Window object. It is unclear why this is
causing log in to fail since there is no JS error (and other browsers don't
expose showModalDialog either).

To resolve the issue for now, I am adding a quirk to re-expose showModalDialog
on pandora.com. However, since they're not calling it, I am merely using
`undefined` as value for the property.
```

you can find full source code for these hacks [here](https://github.com/WebKit/WebKit/blob/main/Source/WebCore/page/Quirks.cpp?s=08). If you ever find a bug in your site that doesn't work for some reason, don't try fix it in your code. [fix](https://github.com/WebKit/WebKit/commit/93d276254db4805331fa1eb9465f70d6d1b43c33) it in the browser engine itself like a [pro frontend developer](https://github.com/WebKit/WebKit/commit/93d276254db4805331fa1eb9465f70d6d1b43c33) and have a life with your pet dog or GF. Happy monday frontend folks :).