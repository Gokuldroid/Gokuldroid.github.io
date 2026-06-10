import React from "react"
import PropTypes from "prop-types"
import Header from "@components/shared/header"
import Footer from "@components/shared/footer"
import Bio from "@components/module/index/bio"

const Layout = props => (
  <>
    {props.children}
    <Header />
    <main className="pt-16">
      <Bio />
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
