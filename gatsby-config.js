const postsQuery = `
{
  posts {
    createdAt
    updatedAt
    status
    id
    slug
    featuredImage {
      createdAt
      updatedAt
      width
      status
      handle
      fileName
      height
      mimeType
      size
      id
    }
    title
    body
    publishedAt
    meta
    topics {
      createdAt
      updatedAt
      status
      id
      description
    }
  }
}
`

module.exports = {
  siteMetadata: {
    title: 'Ramón Chancay Ortega (devrchancay) | Full Stack Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@devrchancay`,
      },
    },
    `gatsby-plugin-react-next`,
    {
    resolve: `gatsby-source-graphcms`,
    options: {
      endpoint: ``,
      token: ``,
      query: `
        ${postsQuery}
      `,
    },
  }
  ],
}
