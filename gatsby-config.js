module.exports = {
  siteMetadata: {
    title: `OneWorkspace`,
    owLogoUrl: `https://stage-admin-oneworkspace.netlify.app/oneworkspace.png`,
    headerDescription: `Call it an end-to-end management utility, or a tailored CRM, OW makes your life easier in everyway possible!`,
    primaryCTAText: `SIGNUP FOR ALPHA`,
    alphaUserOffer: `and get OneWorkspace free, for 3 yrs`,

    integrationsTitle: `Use all your favourite apps on the same platform!`,
    integrationsDescription_p1: `Porta etiam dolor sit amet, consectetur adipiscing elit.`,
    integrationsDescription_p2: `Consequat eu congue morbi sem augue amet. Id imperdiet diam quis tempor rhoncus, ipsum placerat aliquam massa. Luctus porttitor massa amet nunc, sollicitudin. Erat amet faucibus adipiscing ut sed massa convallis vitae.`,
    integrationsDescription_p3: `Eu sit placerat nunc adipiscing. Laoreet amet commodo nunc, morbi urna ornare. Leo laoreet dignissim massa elementum nullam sem pellentesque feugiat in. Lectus dolor pharetra tortor viverra netus eget mi in in.`,
    integrationsDescription_p4: `Quis consequat velit a vestibulum. Porta etiam odio sit at. At adipiscing posuere rhoncus non vivamus lobortis sed.`,

    whoisonewforHeader: `WHO IS OneWorkspace for?`,
    engineerCaricature: `http://`,
    designerCaricature: `http://`,

    getstartedTitle: `LET’S GET STARTED!`,
    getstartedDescription_p1: `We let you test our complete suite of features for free! Refer others to increase the duration of your free trial :)`,
    getstartedDescription_p2: `All data/documents are stored using bank-like security measures and are completely safe. We do not gather any unnecessary information from users.`,
    getstartedDescription_p3: `If you have any queries/suggestions, you can always send us an email at support@oneworkspace.app`,
    getstartedCTAText: `Take me to OneWorkspace`,

    socialLinks: {
      facebook: "http://www.facebook.com",
      twitter: "https://twitter.com/oneworkspace",
      instagram: "https://instagram.com/oneworkspace",
      linkedin: "http://www.linkedin.com",
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
