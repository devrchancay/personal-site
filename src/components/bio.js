/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div className="w-full bg-site-color p-4 flex justify-center flex-col content-center items-center">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="rounded-full my-2"
              imgStyle={{
                padding: 0,
              }}
            />
            <p className="font-sans my-2">
              Escrito por <strong>{author}</strong>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${social.twitter}`}
              >
                Me puedes seguir en twitter
              </a>
            </p>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
