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
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = res.data.allMarkdownRemark.nodes

  posts.forEach((post, index) => {
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
    createPage({
      component: postTemplate,
      path: post.frontmatter.slug,
      context: {
        slug: post.frontmatter.slug,
        id: post.id,
        nextPostId,
      },
    })
  })
}
