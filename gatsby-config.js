module.exports = {
  siteMetadata: {
    title: `OneWorkspace`,
    owLogoUrl: `https://stage-admin-oneworkspace.netlify.app/oneworkspace.png`,
    headerDescription: `Call it an end-to-end management utility, or a tailored CRM, OW makes your life easier in everyway possible`,
    primaryCTAText: `SIGNUP FOR ALPHA`,
    alphaUserOffer: `and get OneWorkspace free, for 3 yrs`,

    integrationSectionImageUrl: `https://stage-admin-oneworkspace.netlify.app/oneworkspace.png`,

    whoisonewforHeader: `WHO IS OneWorkspace for?`,
    engineerCaricature: `http://`,
    designerCaricature: `http://`,

    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@oneworkspace`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
