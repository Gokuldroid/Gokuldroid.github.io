import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "@components/shared/header"
import Bio from "@components/module/index/bio"
import GoogleAds from '@components/shared/google-ads'
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
        <Bio/>
        <GoogleAds/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
