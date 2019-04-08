import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Posts from '../components/Posts';
import SEO from '../components/seo';

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
              excerpt(pruneLength: 85)
              frontmatter {
                title
                path
                date(formatString: "MMMM DD, YYYY")
                topic
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Ramón Chancay (@devrchancay) | Front-end Developer and Educator"
          keywords={[
            `freelance`,
            `gatsby`,
            `javascript`,
            `react`,
            `javascript courses`,
          ]}
        />
        <Header />
        <About />
        <Posts posts={data.allMarkdownRemark.edges} />
      </Layout>
    )}
  />
);

export default Index;
