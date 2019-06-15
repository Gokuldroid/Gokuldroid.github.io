import React from "react"
import "../styles/app.scss"

import  Apps from "@components/module/apps"

import SEO from "@components/seo"

const AppsPage = () => (
  <>
    <SEO title="Apps" keywords={[`android`, `gokul prabhu`, `VLC remote`]} />
    <Apps/>
  </>
)

export default AppsPage
