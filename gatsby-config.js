/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `D.S. Portfolio`,
    description: `Welcome to the portfolio of Deniss Simonaits - Full Stack Web Developer & Designer`,
    author: `@dsimonaits`,
    siteUrl: `https://github.com/dsimonaits/myPortfolio`,
  },
  graphqlTypegen: true,
  pathPrefix: "/blog",
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`], // Include AVIF format for better compression
          placeholder: `dominantColor`,
          quality: 85, // Adjust image quality as needed
          breakpoints: [750, 1080, 1366, 1920], // Define your desired breakpoints
          backgroundColor: `transparent`,
          blurredOptions: {
            toFormat: "webp", // Use webp format for blurred images
            quality: 20, // Adjust quality for blurred images
          },
          jpgOptions: {
            quality: 85, // Adjust JPG quality as needed
          },
          pngOptions: {
            quality: 85, // Adjust PNG quality as needed
          },
          webpOptions: {
            quality: 85, // Adjust WebP quality as needed
          },
          avifOptions: {
            quality: 85, // Adjust AVIF quality as needed
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `D.S. Portfolio`,
        short_name: `D.S.`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.GATSBY_PREVIEW_STORYBLOK,
        version: "draft",
        localAssets: true,
      },
    },
  ],
}
