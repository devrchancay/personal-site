/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Layout, Menu, Footer } from '../components';
import { graphql } from 'gatsby';
import CardPost from '../components/CardPost';

const Blog = ({ data }) => {
  return (
    <Layout>
      <Menu isHome={false} />
      <h1 css={tw`text-center text-3xl mt-4 mb-0`}>
        {data.site.siteMetadata.title}
      </h1>
      <h2 css={tw`text-center text-xl mt-2`}>Blog</h2>
      <div css={tw`flex`}>
        <ul css={tw`list-none flex flex-col flex-wrap md:flex-row`}>
          {data.allPrismicBlogPost.edges.map(({ node }) => {
            return (
              <li css={tw`w-full md:w-1/3 flex justify-center`}>
                <CardPost
                  slug={node.fields.slug}
                  title={node.data.title.text}
                  cover={node.data.cover.localFile.childImageSharp}
                />
              </li>
            );
          })}
        </ul>
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
    allPrismicBlogPost {
      edges {
        node {
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
  }
`;

export default Blog;
