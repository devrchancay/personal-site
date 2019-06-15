import React from 'react';

import { Link } from 'gatsby';
import Image from 'gatsby-image';

const CardBlogPost = props => {
  const { node, widthDesktop = 'md:w-1/3' } = props;
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 pb-3 w-5/6 ${widthDesktop} relative`}
    >
      <Link className="no-underline text-black" to={node.frontmatter.path}>
        <Image sizes={node.frontmatter.image.childImageSharp.sizes} />

        <div className="px-4 py-4">
          <h3 className="font-sans font-bold text-xl mb-2">
            {node.frontmatter.title}
          </h3>
          <p className="font-sans text-gray-700 text-base">
            {node.frontmatter.description || node.excerpt}
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {node.frontmatter.topics}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CardBlogPost;
