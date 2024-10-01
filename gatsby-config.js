/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `zipteam`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contactFormName: "contact form"
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
        defaults: {
          quality: 90,
          formats: [`auto`, `webp`, `avif`],
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-addsocialshare-share`,
      options: {
        size: 30,
        //providers:{"facebook":"Facebook","linkedin":"Linkedin","pinterest":"Pinterest","twitter":"Twitter","cloudshare":"Cloud Share"},
        corners: "50%",
        bgcolor: "#426af0",
        interfacetype: "floating",
        topoffset: "70%",
        id: ".ass_interface",
        alignment_desktop: "bottom",
        alignment_mobile: "bottom",
      },
    },
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `https://729ccff036.nxcli.net/graphql`,
        baseUrl: "https://729ccff036.nxcli.net/graphql",
        concurrentRequests: 10,
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        options: {
          schema: {
            perPage: 100,
            requestConcurrency: 15,
            previewRequestConcurrency: 5,
          }
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "https://729ccff036.nxcli.net/graphql",
          replacementUrl: "",
        },
      },
    },
  ],
}