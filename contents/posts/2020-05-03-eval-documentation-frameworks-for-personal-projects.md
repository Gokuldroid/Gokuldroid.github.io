---
path: eval-documentation-frameworks-for-personal-projects
tags:
  - Documentation
  - GitBook
  - MkDocs
  - Docsify
  - Gitdocs
  - Daux
  - Docusaurus
date: 2020-05-03T06:10:35.547Z
title: Evaluating documentation frameworks for personal projects.
---

I've been trying to write a [documentation](https://codefromdude.com/vlc-docs/) page for my [project](https://play.google.com/store/apps/details?id=tuple.me.vlcremote) (An android app to control your VLC media player) for a very long time. I decided to use some static site builders to get it done quickly. 

I am already using [gatsby](https://www.gatsbyjs.org/) for my [blog](http://codefromdude.com/). I thought of building my gatsby theme as I am pretty much satisfied by Gatsby. but it takes lots of time. 

In this post, I will share my opinions on documentation tools that I have considered for my project. 

*My requirements are:*
1. Appearance should align with my product theme.
2. It should be user friendly as I am going to use it for one of my android apps (not just for developers).
3. It should be SEO friendly.
4. Now I don't have any complex requirements. but it should be extendable in the future.
5. It should be hostable in GitHub pages using a new repo other than my personal page repo. I didn't want to pollute my blog with docs logic as I might add few more docs for some other projects.
6. It shouldn't require much configuration/learning for up and running. 
7. It should be simple.

**[Gatsby-docs-kit](https://brainhubeu.github.io/gatsby-docs-kit/):**

**Pros:** 
 - Based on gatsby.   
 - Easily customizable.   
 - We can host it on GitHub.

**Cons:** 
  - Too much to do for documentation.
  - Not SEO friendly. but we can configure using plugins available for gatsby. (I didn't want to do that again for docs).

**[Docsify](https://docsify.js.org/#/?id=docsify):**

**Pros:**
  - Easy to set up.
  - Comes with four predefined themes. we can easily create our own themes using this [tool](https://jhildenbiddle.github.io/docsify-themeable/#/quick-start?id=hosting).
  - Configurable using plugins. we can write our plugins too.
  - We can build it and host it GitHub.

**Cons:**
  - Not SEO friendly.
  
**[GitBook](https://www.gitbook.com/)** : (*I want to try this in future*):
Some sample sites using Gitbook [Timber](https://docs.timber.io/).
**Pros:**
  - SEO friendly.
  - No need to set up in our local machine. It is free for personal use.
  - It comes with powerful analytics.
  - Drag and drop UI. 
  - It requires less programming knowledge.

**Cons:**
  - Vendor lockdown.
   - We're limited by the customization they provide.
   - We can't host it on our own.

**[Gitdocs](https://github.com/timberio/gitdocs):**
I stumbled up this framework after seeing dev.to's [documentation](https://docs.dev.to/technical-overview/stack/). It is very easy to configure. I felt some limitations from the beginning itself.

**Pros:**
 - SEO friendly.
 - We can build it and host it GitHub.

**Cons:**
  - No theming support as of now.
  - Not maintained very actively (The last commit was made 2 years back). I feel the development has been stopped.
  - My primary GitHub page is https://gokuldroid.github.io. If I have another project  the public URL will look like this https://gokuldroid.github.io/{project_name}. This setup is not easy with Gitdocs. There are open issues and [PR](https://github.com/timberio/gitdocs/pull/172) related to this.
  - Not customizable.

**[Daux.io](https://daux.io/)**
Some sample sites using this framework [pixolution](https://docs.pixolution.org/#/) , [soisy](https://doc.soisy.it/en/Introduction.html).

**Props:**
  - It has multilingual support.
  - We can build it and host it GitHub.
**Cons:**
  - The default theme is not user friendly.
  - There is no much documentation for customization. but some sites using this framework has a really good look and feel.
  - Only the homepage and documentation page is available. we can't add custom pages.
  - Not extendable. 
 
**[MkDocs](https://www.mkdocs.org/):**

**Pros:**
  - Very popular and actively maintained (10K stars in GitHub)
  - Lots of [predefined themes](https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes) available.
  - We can build it and host it GitHub.

**Cons:**
  - Based on python might not work very well with other frontend tools.

**[Docusaurus](https://v2.docusaurus.io/):**
There are two major versions of docusaurus. versions two is still in beta and it doesn't have some of the features of version one. but the road map of docusaurus 2 seemed interesting to me. So I wanted to give it a try for my blog.

**Pros:**
  - It is maintained by Facebook.
  - Easily themeable. It uses [infima](https://facebookincubator.github.io/infima) under the hood (this also still in beta).
  - It comes with a lot of predefined configurations.
  - Lots of facebook's open-source projects use this for documentation.
  - It has lots of flexibility.
  - We can build it and host it GitHub.

**Cons:**
  - Version 2 still in beta (but it is pretty much stable).

Based on the observations, I've decided to use docusaurus beta for my app's documentation. You can take a look at the final site [here](https://codefromdude.com/vlc-docs/) and source code [here](https://github.com/Gokuldroid/vlc-docs). Let me know, what is your personal choice in documentation tools and why.
