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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `http://tcw.karmadhi.com/graphql`,
        baseUrl: "http://tcw.karmadhi.com/graphql",
        concurrentRequests: 10,
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        options: {
          schema: {
            perPage: 10,
            requestConcurrency: 5,
            previewRequestConcurrency: 2,
          }
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "http://tcw.karmadhi.com/graphql",
          replacementUrl: "",
        },
      },
    },
  ],
}
