require('dotenv').config();
const path = require('path');
const postPerPage = process.env.POST_PER_PAGE || 10;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'PrismicBlogPost') {
    createNodeField({
      node,
      name: 'slug',
      value: `/blog/${node.uid}`,
    });
  }

  if (node.internal.type === 'PrismicProjects') {
    createNodeField({
      node,
      name: 'slug',
      value: `/project/${node.uid}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const results = await graphql(`
    {
      allPrismicBlogPost(sort: { fields: [data___publish_date], order: DESC }) {
        totalCount
        edges {
          previous {
            data {
              title {
                text
              }
            }
            fields {
              slug
            }
          }
          node {
            id
            fields {
              slug
            }
          }
          next {
            data {
              title {
                text
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic(`Fatal Error`);
  }

  const numPages = Math.ceil(
    results.data.allPrismicBlogPost.totalCount / postPerPage
  );

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        BlogSkip: i * postPerPage,
        BlogLimit: parseInt(postPerPage, 10),
        BlogNumpages: parseInt(numPages, 10),
        BlogCurrentPage: i + 1,
        PreviousBlogPost: {
          title: 'yolo prev',
          slug: '/yolo',
        },
        NextBlogPost: {
          title: 'yolo next',
          slug: '/yolo',
        },
      },
    });
  });

  results.data.allPrismicBlogPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/BlogPost.tsx'),
      context: {
        PostID: node.id,
      },
    });
  });
};
