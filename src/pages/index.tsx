/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import {
  Layout,
  Hero,
  Seo,
  BlogPost,
  AboutInfo,
  Menu,
  Social,
  Footer,
  RenderIf,
  Projects
} from '../components';

const Home = ({ data }) => {
  return (
    <Layout>
      <Seo title="Front-end Developer and Educator" />
      <Menu isHome />
      <main>
        <Hero
          name={data.prismicBio.data.short_name}
          position={data.prismicBio.data.position}
        />
        <Social size={40} />
        <AboutInfo
          name={data.prismicBio.data.name}
          description={data.prismicBio.data.description_bio.html}
          avatar={
            data.prismicBio.data.profile_picture.localFile.childImageSharp.fluid
          }
        />
        <BlogPost posts={data.allPrismicBlogPost.edges} />
        <RenderIf isTrue={data.site.siteMetadata.githubProjects}>
          <Projects projects={data.allGithubPinneditems.edges} />
        </RenderIf>
        <Footer />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    prismicBio {
      data {
        name
        short_name
        position
        description_bio {
          html
        }
        profile_picture {
          localFile {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allPrismicBlogPost(
      sort: { fields: [data___publish_date], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          data {
            title {
              text
            }
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 150) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
          forkCount
          stargazers {
            totalCount
          }
          name
          descriptionHTML
          url
        }
      }
    }
    site {
      siteMetadata {
        githubProjects
      }
    }
  }
`;

export default Home;
