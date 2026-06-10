import React from "react"
import Header from "@components/shared/header"
import Footer from "@components/shared/footer"
import About from "@components/module/about"
import SEO from "@components/shared/seo"

const AboutPage = () => (
  <>
    <SEO
      title="About"
      keywords={[`gokul prabhu`, `about`, `software developer`, `android`]}
    />
    <Header />
    <About />
    <Footer />
  </>
)

export default AboutPage
