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
