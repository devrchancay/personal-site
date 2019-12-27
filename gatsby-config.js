require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-head`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
};
