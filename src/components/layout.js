/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import IntegrationsSection from "./integrations"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          headerDescription
          owLogoUrl
          integrationSectionImageUrl
        }
      }
    }
  `)

  return (
    <div className="w-11/12 mx-auto bg-white">
      {children}
      <Header
        siteTitle={data.site.siteMetadata?.title || `OneWorkspace`}
        headerDescription={data.site.siteMetadata?.headerDescription}
        owLogoUrl={data.site.siteMetadata?.owLogoUrl}
      />
      <IntegrationsSection
        assetUrl={data.site.siteMetadata?.integrationSectionImageUrl}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
