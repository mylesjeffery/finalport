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
