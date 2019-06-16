import React from 'react';

import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Posts from '../components/Posts';
import SEO from '../components/seo';
import Projects from '../components/Projects';

const Index = () => (
  <StaticQuery
    query={graphql`
      query {
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
                description
                date(formatString: "MMMM DD, YYYY")
                topics
                image {
                  id
                  childImageSharp {
                    sizes(maxWidth: 1024) {
                      ...GatsbyImageSharpSizes_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        allGithubPinneditems {
          edges {
            node {
              id
              name
              url
              descriptionHTML
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO
          title="Front-end Developer and Educator"
          keywords={[
            `freelance`,
            `gatsby`,
            `javascript`,
            `react`,
            `javascript courses`,
            `it consulting`,
          ]}
        />
        <Header />
        <About />
        <Posts posts={data.allMarkdownRemark.edges} />
        <Projects projects={data.allGithubPinneditems.edges} />
      </Layout>
    )}
  />
);

export default Index;
