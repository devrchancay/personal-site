/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Companies = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          clients: allPrismicClients {
            edges {
              node {
                id
                data {
                  name {
                    text
                  }
                  logo {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 500) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div css={tw`bg-background-muted p-4 md:p-8`}>
            <div css={tw`md:px-8 md:justify-center md:flex`}>
              <div css={tw`md:w-11/12`}>
                <h2
                  css={tw`text-secondary my-2 text-center text-2xl md:text-4xl`}
                >
                  Companies that trust my work.
                </h2>
                <h3 css={tw`text-center text-base md:text-xl text-secondary`}>
                  Developing customized solutions.
                </h3>
                <div
                  css={tw`w-full flex flex-col py-4 md:py-8 mt-4 md:mt-8 md:justify-center flex-wrap md:flex-row md:justify-center md:content-center md:items-center`}
                >
                  {data.clients.edges.map(({ node }) => (
                    <div
                      key={node.id}
                      css={tw`w-full px-4 md:w-1/5 my-4 md:my-1`}
                    >
                      <Image
                        fluid={node.data.logo.localFile.childImageSharp.fluid}
                        alt={node.data.name.text}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Companies;
