/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Layout, Menu, Footer, Seo, Pagination } from '../components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';

const Blog = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo title={`Blog`} />
      <Menu isHome={false} />
      <div css={tw`bg-background-muted py-4 lg:mt-6`}>
        <h1 css={tw`text-center text-primary text-3xl mt-4 mb-0`}>
          {data.site.siteMetadata.title}
        </h1>
        <h2 css={tw`text-center text-xl mt-2 text-secondary`}>Blog</h2>
      </div>
      <div css={tw`flex flex-col justify-center py-4`}>
        <div css={tw`flex flex-col justify-center items-center content-center`}>
          {data.allPrismicBlogPost.edges.map(({ node }) => {
            return (
              <Link
                key={node.id}
                css={tw`w-11/12 px-4 pt-2 lg:w-2/3`}
                to={node.fields.slug}
              >
                <article css={tw`my-2 lg:flex bg-background-muted`}>
                  <div css={tw`lg:w-1/3`}>
                    <Image
                      fluid={node.data.cover.localFile.childImageSharp.fluid}
                    />
                  </div>
                  <div
                    css={tw`lg:flex lg:flex-col lg:h-full lg:pl-8 lg:w-2/3 lg:py-2`}
                  >
                    <h3
                      css={tw`mt-2 mb-0 text-base text-secondary lg:text-3xl`}
                    >
                      {node.data.title.text}
                    </h3>
                    <p
                      css={tw`text-secondary m-0 text-xs lg:w-11/12 lg:text-base lg:my-3 font-light`}
                    >
                      {node.data.excerpt.text}
                    </p>
                    <span
                      css={tw`m-0 text-xs text-gray-600 font-light lg:mb-2`}
                    >
                      {node.data.publish_date}
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

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
            excerpt {
              text
            }
            publish_date(formatString: "DD MMM, YYYY")
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 450) {
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
