import Helmet from "react-helmet"
import React from "react"

const GoogleAds = () => (
  <Helmet>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script src="/assets/ads.js"></script>
  </Helmet>
)

export default GoogleAds