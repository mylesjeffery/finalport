---
slug: gatsby-portfolio
tags:
  - Development
title: Building this Website with GatsbyJS
date: 2021-04-05T15:48:33.498Z
description: "I needed a portfolio website and also wanted to learn the Gatsby
  framework. It turned out to be a perfect solution. It was my first exposure to
  GraphQL and working with a production quality CMS. "
feature: /img/1_g9avai3aezhlw_jsicfb1q.jpeg
---
As my past portfolios were made using Webflow, a visual html/css designer, I knew I needed to develop a new one with my new coding skills. I saw this as an opportunity to create a website that expressed my personality through typography, layout, and interaction. I also saw it as an opportunity to learn a framework that I had seen been used for many websites I loved: Gatsby. 

Gatsby is a static-site-generator, although their website doesn't describe it as that, it is commonly used to create super fast, lightweight sites built on React. It's also a really great developing experience. I used Netlify for deployment and I also used their CMS to manage my posts, as I had never worked with a CMS before. 

Check out the [Github Repo](https://github.com/mylesjeffery/portfolio) if you're interested!

## Gatsby

I wanted to start with a blank slate, so I ran the command `gatsby new portfolio https://github.com/gatsbyjs/gatsby-starter-hello-world` in my terminal. This loaded an instance of Gatsby with just the words "Hello World" in the viewport. 

Gatsby makes it easy to create new pages, just by adding components to the pages folder. I just wanted a home page, and pages for my posts, so I left it at index and 404. I created the necessary components for the website in the components folder, and styled them with styled-components.

## Netlify CMS

I then created my Github Repo and Netlify deployment, so every time I pushed a commit to Github it would trigger a deploy. I set up Netlify's CMS by installing a gatsby plugin, `gatsby-plugin-netlify-cms` and configured it in the gatsby-config.js file. By creating a file named config.yml in the admin folder in the static folder, I could configure what options I wanted Netlify's CMS to have. 

For each post, I wanted a custom slug, a title, tags, description, feature image, and the body of course. The CMS creates a markdown file with the first five options included in the frontmatter, with the body following. The frontmatter is a few lines at the beginning of a markdown file that GraphQL can query for. 

## Create Pages

Using Gatsby's createPages API, I queried the markdown files via gatsby-source-filesystem and gatsby-transformer-remark to create the pages for each post. Here's what that looks like:

```
const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')

  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: edge.node.frontmatter.slug,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}
```

This query requires a template to build each markdown file into - the `const postTemplate` in this case. This is a component I created to style the post page and include a header and footer. To write the GraphQL query, I used the GraphIQL interface that comes with Gatsby, visually laying out how to access the data you want. 

## Conclusion

I can see why Gatsby has become so popular. It makes the development process very easy, with live reloading on save, many features automatically built in, and super fast websites. I'm excited to explore it more!