import React from 'react';
import { Title, Meta } from 'react-head';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({ title, metatags = [] }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={data => {
        return (
          <React.Fragment>
            <Title>
              {title} | {data.site.siteMetadata.title}
            </Title>
            {metatags.map(meta => (
              <Meta content={meta.content} name={meta.name} />
            ))}
          </React.Fragment>
        );
      }}
    />
  );
};

export default Seo;
