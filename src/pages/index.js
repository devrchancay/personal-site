import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Posts from '../components/Posts';

const Index = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 4
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                image {
                  id
                  childImageSharp {
                    sizes(maxWidth: 400) {
                      ...GatsbyImageSharpSizes_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Header />
        <About />
        <Posts posts={data.allMarkdownRemark.edges} />
      </Layout>
    )}
  />
);

export default Index;
