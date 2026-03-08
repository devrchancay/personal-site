/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { FaTwitterSquare, FaGithub, FaLinkedin, FaAt } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import { RenderIf } from '../components';
import { ThemeContext } from '../context/ThemeContext';

type SocialProps = {
  size: number;
};

const Social = ({ size = 40 }: SocialProps) => {
  const context = React.useContext(ThemeContext);

  const githubColor = context.theme === 'theme-light' ? '#000' : '#cbd5e0';
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
                <li className="animate-fade-in stagger-1" css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    className="social-icon-hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.twitter}
                  >
                    <FaTwitterSquare color="#00acee" size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.github}>
                <li className="animate-fade-in stagger-2" css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    className="social-icon-hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.github}
                  >
                    <FaGithub color={githubColor} size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.linkedin}>
                <li className="animate-fade-in stagger-3" css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    className="social-icon-hover"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={data.site.siteMetadata.social.linkedin}
                  >
                    <FaLinkedin color="#0e76a8" size={size} />
                  </a>
                </li>
              </RenderIf>
              <RenderIf isTrue={!!data.site.siteMetadata.social.email}>
                <li className="animate-fade-in stagger-4" css={tw`w-12 px-2 flex justify-center`}>
                  <a
                    className="social-icon-hover"
                    href={data.site.siteMetadata.social.email}
                  >
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
