const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'PrismicBlogPost') {
    createNodeField({
      node,
      name: 'slug',
      value: `/blog/${node.uid}`
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const results = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            id
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

  results.data.allPrismicBlogPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/BlogPost.tsx'),
      context: {
        PostID: node.id
      }
    });
  });
};
