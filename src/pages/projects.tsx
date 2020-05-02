/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';

import { Layout, Seo, Menu, Footer } from '../components';
import ProjectItem from '../components/ProjectItem';

const Projects = ({ data }) => {
  return (
    <Layout>
      <Seo title={`Projects`} />
      <div css={tw`pt-4`}>
        <Menu isHome={false} />
        <div css={tw`bg-background-muted py-4 lg:mt-6`}>
          <h1 css={tw`text-center text-primary text-3xl mt-4 mb-0`}>
            {data.site.siteMetadata.title}
          </h1>
          <h2 css={tw`text-center text-xl mt-2 text-secondary`}>
            My Projects and contributions
          </h2>
        </div>
        <div css={tw`pt-2`}>
          <div css={tw`flex flex-col px-2 lg:flex-row lg:flex-wrap`}>
            {data.allPrismicProjects.edges.map(({ node }) => {
              return (
                <div css={tw`w-full mb-2 p-4 lg:w-1/2 lg:hover:shadow-2xl`}>
                  <ProjectItem
                    name={node.data.name.text}
                    slug={node.fields.slug}
                    excerpt={node.data.excerpt.text}
                    image={node.data.image.localFile.childImageSharp.fluid}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allPrismicProjects {
      edges {
        node {
          uid
          data {
            name {
              text
            }
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            excerpt {
              text
            }
            client {
              name
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Projects;
