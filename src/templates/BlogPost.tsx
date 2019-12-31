/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout, Menu } from '../components';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Menu isHome={false} />
      <div css={tw`flex flex-col items-center w-full py-2`}>
        <div css={tw`w-full md:w-3/4`}>
          <Img
            loading="lazy"
            {...data.prismicBlogPost.data.cover.localFile.childImageSharp}
          />
        </div>
        <h1 css={tw`text-2xl md:text-4xl my-4`}>
          {data.prismicBlogPost.data.title.text}
        </h1>
        <div
          className="BlogPost"
          css={tw`w-full px-5 md:w-3/4`}
          dangerouslySetInnerHTML={{
            __html: data.prismicBlogPost.data.content.html
          }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($PostID: String!) {
    prismicBlogPost(id: { eq: $PostID }) {
      data {
        title {
          text
        }
        cover {
          localFile {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        content {
          html
        }
      }
    }
  }
`;

export default BlogPost;
