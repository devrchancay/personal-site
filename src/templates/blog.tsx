/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Layout, Menu, Footer, Seo, Pagination } from '../components';
import { graphql } from 'gatsby';
import CardPost from '../components/CardPost';

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title={`Blog`} />
      <Menu isHome={false} />
      <div css={tw`bg-gray-200 py-4`}>
        <h1 css={tw`text-center text-gray-800 text-3xl mt-4 mb-0`}>
          {data.site.siteMetadata.title}
        </h1>
        <h2 css={tw`text-center text-xl mt-2 text-gray-700`}>Blog</h2>
      </div>
      <div css={tw`flex flex-col justify-center py-4`}>
        <ul
          css={tw`list-none flex flex-col justify-center items-center flex-wrap md:flex-row`}
        >
          {data.allPrismicBlogPost.edges.map(({ node }) => {
            return (
              <li css={tw`w-full md:w-1/3 flex flex-wrap justify-center`}>
                <CardPost
                  slug={node.fields.slug}
                  title={node.data.title.text}
                  cover={node.data.cover.localFile.childImageSharp}
                />
              </li>
            );
          })}
        </ul>
        <Pagination
          previous={
            pageContext.BlogCurrentPage > 1
              ? pageContext.BlogCurrentPage === 2
                ? '/blog'
                : `/blog/page/${pageContext.BlogCurrentPage - 1}`
              : null
          }
          next={
            pageContext.BlogNumpages < pageContext.BlogCurrentPage &&
            `/blog/page/${pageContext.BlogCurrentPage + 1}`
          }
        />
      </div>
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query($BlogSkip: Int!, $BlogLimit: Int!) {
    site {
      siteMetadata {
        title
      }
    }

    allPrismicBlogPost(
      sort: { fields: [data___publish_date], order: DESC }
      limit: $BlogLimit
      skip: $BlogSkip
    ) {
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
