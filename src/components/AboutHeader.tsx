/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import Image from 'gatsby-image';

import { Menu, RenderIf } from '.';
import { StaticQuery, graphql, Link } from 'gatsby';

const List = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  li {
    color: var(--color-secondary);
    margin: 0;
    margin-bottom: 0.3rem;
    &:before {
      content: '✦';
      margin-right: 0.3rem;
    }
  }
`;

const AboutHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              social {
                email
              }
            }
          }
          bio: prismicBio {
            data {
              description_bio {
                text
              }
              name
              position
              about_resume {
                html
              }
              hero_portfolio {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, grayscale: true) {
                      ...GatsbyImageSharpFluid
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
          <div css={tw`bg-background p-4 md:p-8`}>
            <Menu />
            <div css={tw`md:px-8 md:justify-center md:flex`}>
              <div
                css={tw`flex flex-col-reverse py-4 px-2 md:w-11/12 md:flex-row-reverse`}
              >
                <div
                  css={tw`w-full md:mx-8 md:flex md:flex-col md:justify-end`}
                >
                  <h1 css={tw`text-2xl mt-3 md:text-4xl text-primary mb-2`}>
                    {data.bio.data.name}
                  </h1>
                  <h2 css={tw`text-secondary text-xl md:text-3xl`}>
                    {data.bio.data.position}
                  </h2>

                  <List
                    color={'red'}
                    dangerouslySetInnerHTML={{
                      __html: data.bio.data.about_resume.html
                    }}
                  />
                  <div
                    css={tw`flex flex-col md:flex-row md:justify-between md:items-center md:content-center`}
                  >
                    <RenderIf isTrue={!!data.site.siteMetadata.social.email}>
                      <a
                        href={data.site.siteMetadata.social.email}
                        css={tw`my-2 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10 md:mx-2 md:w-1/2`}
                      >
                        Contact me
                      </a>
                    </RenderIf>
                    <RenderIf isTrue={false}>
                      <Link
                        to="/porfolio"
                        css={tw`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-200 focus:outline-none focus:shadow-outline focus:border-indigo-300 md:py-4 md:text-lg md:px-10 md:mx-2`}
                      >
                        Portfolio
                      </Link>
                    </RenderIf>
                  </div>
                </div>
                <div css={tw`w-full`}>
                  <Image
                    fluid={
                      data.bio.data.hero_portfolio.localFile.childImageSharp
                        .fluid
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default AboutHeader;
