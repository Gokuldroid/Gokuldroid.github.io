import React from "react"
import "../styles/app.scss"

import SEO from "@components/seo"
import Contact from "@components/module/contact"

const ContactPage = () => (
  <>
    <SEO title="Apps" keywords={[`android`, `gokul prabhu`, `VLC remote`]} />
    <Contact />
  </>
)

export default ContactPage
