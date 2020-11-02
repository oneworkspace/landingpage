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
import GetStarted from "./getstarted/index"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          headerDescription
          whoisonewforHeader

          integrationsTitle
          integrationsDescription_p1
          integrationsDescription_p2
          integrationsDescription_p3
          integrationsDescription_p4

          getstartedTitle
          getstartedDescription_p1
          getstartedDescription_p2
          getstartedDescription_p3
          getstartedCTAText
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
        />
      </div>
      <IntegrationsSection
        sectionTitle={data.site.siteMetadata?.integrationsTitle}
        description_p1={data.site.siteMetadata?.integrationsDescription_p1}
        description_p2={data.site.siteMetadata?.integrationsDescription_p2}
        description_p3={data.site.siteMetadata?.integrationsDescription_p3}
        description_p4={data.site.siteMetadata?.integrationsDescription_p4}
      />
      <WorkspaceFor sectionTitle={data.site.siteMetadata?.whoisonewforHeader} />
      <GetStarted
        sectionTitle={data.site.siteMetadata?.getstartedTitle}
        description_p1={data.site.siteMetadata?.getstartedDescription_p1}
        description_p2={data.site.siteMetadata?.getstartedDescription_p2}
        description_p3={data.site.siteMetadata?.getstartedDescription_p3}
        ctaText={data.site.siteMetadata?.getstartedCTAText}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
