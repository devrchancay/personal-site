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
  Footer
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
        <Social items={data.prismicBio.data.body[0].items} />
        <AboutInfo
          name={data.prismicBio.data.name}
          description={data.prismicBio.data.description_bio.html}
          avatar={
            data.prismicBio.data.profile_picture.localFile.childImageSharp.fluid
          }
        />
        <BlogPost posts={data.allPrismicBlogPost.edges} />

        <Footer items={data.prismicBio.data.body[0].items} />
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
        body {
          items {
            title
            icon_name
            link {
              url
              target
            }
          }
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
    allPrismicBlogPost(sort: { fields: [data___publish_date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          data {
            category {
              uid
            }
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
  }
`;

export default Home;
