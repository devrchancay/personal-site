/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { FaTwitterSquare, FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import { RenderIf } from '../components';

type SocialProps = {
  size: number;
};

const Social = ({ size = 40 }: SocialProps) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              social {
                email
                twitter
                github
                linkedin
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <div css={tw`flex justify-center`}>
            <ul css={tw`list-none flex p-0`}>
              <RenderIf isTrue={!!data.site.siteMetadata.social.twitter}>
                <li css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.twitter}
                  >
                    <FaTwitterSquare color="#00acee" size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.github}>
                <li css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.github}
                  >
                    <FaGithub color="#000" size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.linkedin}>
                <li css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.linkedin}
                  >
                    <FaLinkedin color="#0e76a8" size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.email}>
                <li css={tw`w-12 px-2 flex justify-center`}>
                  <a href={data.site.siteMetadata.social.email}>
                    <FaAt color="#63b3ed" size={size} />
                  </a>
                </li>
              </RenderIf>
            </ul>
          </div>
        );
      }}
    />
  );
};

export default Social;
