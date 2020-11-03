module.exports = {
  siteMetadata: {
    title: `OneWorkspace`,
    headerSecond: `OW is built for Freelancers and Teams!`,
    headerDescription: `Manage customers, projects and information with powerful and easy to use CRM, project management tool and docs. Collaboration with your teams is as easy as starting a workspace.`,
    primaryCTA: `Signup for Alpha`,
    currentOffer: `and get OneWorkspace free tire for a year.`,

    integrationsTitle: `Use all your favourite apps on the same platform!`,
    integrationsDescription_p1: `We have build integrations with all your fav apps.`,
    integrationsDescription_p2: `Our focus is to make life as simple as possible for developers and designers. All your request tools are connected with your workspace and project by free.`,
    integrationsDescription_p3: `All this is shared in a workspace as long as you plan to collaborate with others. After you close a workspace you can choose to move all the data back to your personal workspace.`,

    whoisonewforHeader: `WHO IS OneWorkspace for?`,
    engineerCaricature: `http://`,
    designerCaricature: `http://`,

    getstartedTitle: `LET’S GET STARTED!`,
    getstartedDescription_p1: `We let you test our complete suite of features for free! Refer others to increase the duration of your free trial :)`,
    getstartedDescription_p2: `All data/documents are stored using bank-like security measures and are completely safe. We do not gather any unnecessary information from users.`,
    getstartedDescription_p3: `If you have any queries/suggestions, you can always send us an email at support@oneworkspace.app`,
    getstartedCTAText: `SIGNUP FOR ALPHA`,

    socialLinks: {
      facebook: "https://www.facebook.com/oneworkspace",
      twitter: "https://twitter.com/oneworkspace",
      instagram: "https://instagram.com/oneworkspace",
      linkedin: "https://www.linkedin.com/oneworkspace",
    },

    recentBlog: [
      {
        title: "UX Design",
        link: "#",
        description:
          "Lorem ipsum is simply dumy texts is widely used in the design.",
      },
      {
        title: "UX Design",
        link: "#",
        description:
          "Lorem ipsum is simply dumy texts is widely used in the design.",
      },
    ],

    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@oneworkspace`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-KLCVJPFXN4`,
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
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
