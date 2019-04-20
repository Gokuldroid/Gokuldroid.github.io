import React from "react"
import "../styles/app.scss"

import Index from "@components/module/index"
import SEO from "@components/seo"

const IndexPage = () => (
  <Index>
    <SEO title="Home" keywords={[`android`, `gokul prabhu`, `VLC remote`]} />
  </Index>
)

export default IndexPage
