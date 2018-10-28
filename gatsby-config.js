module.exports = {
  siteMetadata: {
    title: 'Ramón Chancay Ortega (@devrchancay) | Front-end engineer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@devrchancay`,
      },
    },
  ],
}
