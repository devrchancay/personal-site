require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
      }
    }
  ]
};
