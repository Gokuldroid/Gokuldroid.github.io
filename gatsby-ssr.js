/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

// Runs before paint so the correct theme is applied with no flash of the
// wrong colors. Reads a saved preference, falling back to the OS setting.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export const onRenderBody = ({ setPreBodyComponents, setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
  setPreBodyComponents([
    <script
      key="theme-no-flash"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />,
  ])
}
