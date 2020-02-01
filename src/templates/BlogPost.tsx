/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout, Menu, Seo, Footer } from '../components';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Menu isHome={false} />
      <Seo title={data.prismicBlogPost.data.title.text} />
      <div css={tw`flex flex-col items-center w-full py-2`}>
        <div css={tw`w-full md:w-3/4`}>
          <Img
            alt={data.prismicBlogPost.data.cover.alt}
            loading="lazy"
            {...data.prismicBlogPost.data.cover.localFile.childImageSharp}
          />
        </div>
        <div css={tw`px-4`}>
          <h1 css={tw`text-center text-2xl md:text-4xl my-4`}>
            {data.prismicBlogPost.data.title.text}
          </h1>
        </div>
        <p className="date">{data.prismicBlogPost.data.publish_date}</p>
        <div
          className="BlogPost"
          css={tw`w-full px-5 md:w-3/4`}
          dangerouslySetInnerHTML={{
            __html: data.prismicBlogPost.data.content.html
          }}
        />
      </div>
      <Footer />
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
        publish_date(formatString: "DD MMMM YYYY", locale: "es")
        cover {
          alt
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
