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
  ],
}
