import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import BlogLayout from '../components/Layout';
import SEO from '../components/seo';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="Todos los post"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        <div className="py-8">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title;
            return (
              <Link className="no-underline" to={node.frontmatter.path}>
                <div
                  className="w-full md:w-2/3 md:px-0 md:mx-auto p-4 blogList"
                  key={node.frontmatter.path}
                >
                  <h3 className="font-sans my-1">
                    <Link to={node.frontmatter.path}>{title}</Link>
                  </h3>
                  <p
                    className="py-2 text-gray-primary"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />

                  <span className="text-gray-primary">
                    <small>Publicado en</small>{' '}
                    <small>{node.frontmatter.date}</small>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </BlogLayout>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`;
