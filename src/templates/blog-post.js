import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Bio from '../components/bio';
import BlogLayout from '../components/Layout';
import SEO from '../components/seo';
import './blog.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Image sizes={post.frontmatter.image.childImageSharp.sizes} />
        <div className="px-6 md:w-2/3 md:px-0 my-0 mx-auto py-8 BlogPost">
          <h1 className="postTitle">{post.frontmatter.title}</h1>
          <p className="date">{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <Bio />
        </div>

        <ul className="w-full p-4 list-none p-0 flex flex-col items-center md:flex-row md:justify-between md:w-2/3 md:px-0 my-0 mx-auto">
          <li className="py-2 text-xl">
            {previous && (
              <Link
                className="text-gray-800 hover:text-blue-400"
                to={previous.frontmatter.path}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="py-2 text-xl">
            {next && (
              <Link
                className="text-gray-800 hover:text-blue-400"
                to={next.frontmatter.path}
                rel="next"
              >
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </BlogLayout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html

      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`;
