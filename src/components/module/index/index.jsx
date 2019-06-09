import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "@components/shared/header"
import Bio from "@components/bio"
import JBootstrap from "@components/shared/jbootstrap"
import "./styles.scss"

const Layout =  (props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {props.children}
        <Header siteTitle={data.site.siteMetadata.title} />
          <JBootstrap/>
        <Bio/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
