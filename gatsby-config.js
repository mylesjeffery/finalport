require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Myles Jeffery',
    author: 'Myles Jeffery',
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: 'images',
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/admin`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
}
