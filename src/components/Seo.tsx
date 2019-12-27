import React from 'react';
import { Title, Meta } from 'react-head';

const Seo = ({ title, metatags = [] }) => {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      {metatags.map(meta => (
        <Meta content={meta.content} name={meta.name} />
      ))}
    </React.Fragment>
  );
};

export default Seo;
