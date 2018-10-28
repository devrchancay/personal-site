module.exports = {
  siteMetadata: {
    title: 'Ramón Chancay Ortega (@devrchancay) | Front-end engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-graphcms',
      options:{
        endpoint: process.env.GRAPHQL_ENDPOINT,
        token: process.env.GRAPHQL_TOKEN,
        query: `
        {
          posts {
            id
            slug
            title
            featuredImage {
              handle
              width
              height
            }
            body
            createdAt
          }
        }
        `
      }
    }
  ],
}
