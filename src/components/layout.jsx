/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/index"
import IntegrationsSection from "./integrations/index"
import WorkspaceFor from "./workspacefor/index"
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
          whoisonewforHeader
        }
      }
    }
  `)

  return (
    <div className="layout w-full bg-white">
      {children}
      <div className="w-11/12 mx-auto">
        <Header
          siteTitle={data.site.siteMetadata?.title || `OneWorkspace`}
          headerDescription={data.site.siteMetadata?.headerDescription}
          owLogoUrl={data.site.siteMetadata?.owLogoUrl}
        />
      </div>
      <IntegrationsSection
        assetUrl={data.site.siteMetadata?.integrationSectionImageUrl}
      />
      <WorkspaceFor sectionTitle={data.site.siteMetadata?.whoisonewforHeader} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
