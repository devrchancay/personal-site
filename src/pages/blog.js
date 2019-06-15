import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Image from 'gatsby-image';
import CardBlogPost from '../components/Posts/CardBlogPost';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const [featuredPost] = data.latestsPost.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Javascript blog and other technologies"
          description="I write about javascript and other technologies related to web development."
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `tailwindcss`,
            `sass`,
            `Frontend`,
          ]}
        />
        <div className="bg-gray-200 p-4 md:p-8">
          <h1 className="text-xl md:text-4xl text-center font-sans mt-8 mb-3 font-bold text-gray-800">
            Ramón Chancay Ortega
          </h1>
          <h2 className="text-lg md:text-2xl text-center mb-8">
            I write about Javascript
          </h2>
        </div>

        <div className="container px-4 md:px-0 max-w-6xl mx-auto flex justify-center md:-mt-16">
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 mt-8 leading-normal rounded-t md:w-2/4">
            <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
              <Link
                to={featuredPost.node.frontmatter.path}
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full md:w-2/3 rounded-t">
                  <Image
                    sizes={
                      featuredPost.node.frontmatter.image.childImageSharp.sizes
                    }
                  />
                </div>

                <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden">
                    <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                      Último post
                    </p>
                    <h1 className="w-full font-bold text-2xl text-gray-900 px-6 py-6">
                      {featuredPost.node.frontmatter.title}
                    </h1>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      {featuredPost.node.excerpt}
                    </p>
                  </div>

                  <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden p-6">
                    <div className="flex items-center justify-between">
                      <p className="tinline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {featuredPost.node.frontmatter.topics}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-8 mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center items-start">
            {posts.map(({ node }) => {
              return (
                <CardBlogPost
                  key={node.id}
                  widthDesktop={'md:w-1/4'}
                  node={node}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    latestsPost: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            description
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: 1
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 85)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            description
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
  }
`;
