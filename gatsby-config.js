require('dotenv').config();

const prismicHtmlSerializer = require('./src/utils/htmlSerializer');

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    siteUrl: process.env.SITE_URL,
    description: process.env.SITE_DESCRIPTION,
    social: {
      twitter: process.env.TWITTER,
      linkedin: process.env.LINKEDIN,
      github: process.env.GITHUB,
      email: process.env.EMAIL
    },
    githubProjects: process.env.SHOW_GITHUB_PROJECTS === 'true'
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        htmlSerializer: () => prismicHtmlSerializer
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        queries: [
          `{
            ##here your username
            user(login:"devrchancay") {
              pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      descriptionHTML
                      url
                      stargazers{
                        totalCount
                      }
                      forkCount
                    }
                  }
                }
              }
            }
          }`
        ]
      }
    }
  ]
};
