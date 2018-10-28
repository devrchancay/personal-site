const path = require('path')
const helpers = require('./helpers')
const limit = 10

const query = `
        {
            latestsPosts: allPost(limit: ${limit}){
              edges{
                node{
                  id
                  slug
                  featuredImage{
                    handle
                    width
                    height
                  }
                  createdAt
                  title
                  body
                }
              }
            } 
          }
        `

const createBlogPostPage = ({ boundActionCreators, graphql }) =>
  new Promise((resolve, reject) => {
    graphql(query).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const postTemplate = path.resolve('src/templates/Post/index.js')
      const posts = result.data.latestsPosts.edges
      const pages = posts.map(({ node }) => {
        return {
          path: helpers.generateSlug(node),
          component: postTemplate,
          context: {
            node,
          },
        }
      })

      resolve(pages)
    })
  })

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators
  const pages = [createBlogPostPage({ boundActionCreators, graphql })]
  Promise.all(pages).then(allPages => {
    allPages.map(section => {
      section.forEach(page => {
        createPage(page)
      })
    })
  })
}
