const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog.js`)

  const res = await graphql(`
    query {
      allContentfulBlogposts(sort: { fields: title, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogposts.edges.forEach(edge => {
    createPage({
      component: blogPostTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
