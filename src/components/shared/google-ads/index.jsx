import Helmet from "react-helmet"
import React, { Component } from "react"

class GoogleAds extends Component {

  componentDidMount() {
    window.adsbygoogle = window.adsbygoogle || []
    if(window.adsbygoogle.length !== 0) {
      window.adsbygoogle.push({ google_ad_client: "ca-pub-8661695674070138", enable_page_level_ads: true });
    }
  }

  render() {
    return (
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
    )
  }
}

export default GoogleAds