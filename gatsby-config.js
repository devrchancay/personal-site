let descriptionId = 1;

module.exports = {
  siteMetadata: {
    title: `Ramón Chancay Ortega`,
    author: `Ramón Chancay`,
    description: `Frontend Engineer and Educator, I write about Javascript and I help other developers to improve their developer skills.`,
    siteUrl: `https://ramonchancay.me`,
    social: {
      twitter: `devrchancay`,
    },
    experience: [
      {
        id: '129087ty18920io1',
        title: 'Frontend Engineer',
        company: 'Everymundo',
        location: 'Miami, FL (remote)',
        description: [
          {
            id: descriptionId++,
            text: '- Develop new user-facing features using React.js.',
          },
          { id: descriptionId++, text: '- Build reusable components.' },
          {
            id: descriptionId++,
            text: '- Translate designs and wireframes into high quality code.',
          },
          {
            id: descriptionId++,
            text:
              '- Optimize components for maximum performance across a vast array of web-capable devices and browsers.',
          },
          {
            id: descriptionId++,
            text: '- Create unit testing for each delivered module.',
          },
          {
            id: descriptionId++,
            text: '- Maintain and improve the existing code base',
          },
        ],
        startDate: 'Sep 2018',
        endDate: 'Present',
        time: '11 mos',
      },
      {
        id: '12ie90u8j1oiek201',
        title: 'Full Stack Engineer',
        company: 'Diario El Universo',
        location: 'Guayaquil, Ecuador',
        description: [
          {
            id: descriptionId++,
            text: '- Design and maintain new features of the website.',
          },
          {
            id: descriptionId++,
            text: '- Make architecture decisions for new developments.',
          },
          {
            id: descriptionId++,
            text: '- Document and implement new technologies.',
          },
          {
            id: descriptionId++,
            text: '- Improve the performance of the website.',
          },
          {
            id: descriptionId++,
            text:
              '- Maintenance of internal subscription systems to the printed newspaper using Nodejs.',
          },
        ],
        startDate: 'Jan 2015',
        endDate: 'Nov 2018',
        time: '3 yrs 11 mos',
      },
      {
        id: '12iu8h1joi29i-1jo',
        title: 'Programmer Analyst',
        company: 'Hispana de Seguros',
        location: 'Guayaquil, Ecuador',
        description: [
          {
            id: descriptionId++,
            text: '- Development of high performance websites.',
          },
          {
            id: descriptionId++,
            text: '- User experience and compatibility with older browsers.',
          },
          {
            id: descriptionId++,
            text:
              '- Development of back-end for mobile applications (Django REST Framework)',
          },
          {
            id: descriptionId++,
            text: '- Training for designers on css3 and HTML5',
          },
        ],
        startDate: 'May 2014',
        endDate: 'Dec 2014',
        time: '8 mos',
      },
      {
        id: '1p20i9uh1joiw9u128',
        title: 'Senior Web Application Developer',
        company: 'iT/Corp',
        location: 'Guayaquil, Ecuador',
        description: [
          {
            id: descriptionId++,
            text:
              '- Maintaining ticket system for help desk, for internal use.',
          },
          {
            id: descriptionId++,
            text: '- Front-end and back-end training for the development team.',
          },
          {
            id: descriptionId++,
            text: '- Development of websites for company customers.',
          },
          {
            id: descriptionId++,
            text: '- Database consulting for the development of an ERP.',
          },
        ],

        startDate: 'Oct 2013',
        endDate: 'May 2014',
        time: '8 mos',
      },
      {
        id: '0-129iu8hijo1920',
        title: 'Front-end Architect',
        company: 'Centraltrust S.A',
        location: 'Guayaquil, Ecuador',
        description: [
          {
            id: descriptionId++,
            text: '- Development of high performance websites.',
          },
          {
            id: descriptionId++,
            text: '- User experience and compatibility with older browsers.',
          },
          {
            id: descriptionId++,
            text:
              '- Development of back-end for mobile applications (Django REST Framework)',
          },
          {
            id: descriptionId++,
            text: '- Training for designers on css3 and HTML5',
          },
        ],
        startDate: 'May 2013',
        endDate: 'Oct 2013',
        time: '6 mos',
      },
      {
        id: '2089u1ygu812uhy',
        title: 'Junior Web Developer',
        company: 'TECNOGRAP S.A',
        location: 'Guayaquil, Ecuador',
        description: [
          { id: descriptionId++, text: '- Maintaining ERP modules' },
          {
            id: descriptionId++,
            text: '- Migration of modules developed in Vbasic 0.6 to Web.',
          },
          { id: descriptionId++, text: '- Development of customized systems.' },
          {
            id: descriptionId++,
            text: '- Implementation of new technologies of the time.',
          },
        ],
        startDate: 'Sep 2012',
        endDate: 'May 2013',
        time: '9 mos',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-119581279-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ramon Chancay | Blog`,
        short_name: `Blog`,
        start_url: `/blog`,
        background_color: `#ffffff`,
        theme_color: `#6c63ff`,
        display: `fullscreen`,
        icon: `content/assets/profile.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ['/category/*'],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        queries: [
          `{
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
          }`,
        ],
      },
    },
  ],
};
