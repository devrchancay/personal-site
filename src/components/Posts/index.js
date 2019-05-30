import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
      <div className="container">
        <h2 className="text-2xl font-sans font-bold text-center md:text-left text-gray-primary mx-2 font-bold">
          Last posts (in Spanish)
        </h2>
      </div>
      <div className="container flex flex-col sm:justify-center md:flex-row items-center">
        {posts.map(({ node }) => (
          <div
            key={node.id}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 pb-3 w-5/6 md:w-1/3 relative"
          >
            <Link
              className="no-underline text-black"
              to={node.frontmatter.path}
            >
              <Image sizes={node.frontmatter.image.childImageSharp.sizes} />

              <div className="px-4 py-4">
                <h3 class="font-sans font-bold text-xl mb-2">
                  {node.frontmatter.title}
                </h3>
                <p class="font-sans text-gray-700 text-base">
                  {node.frontmatter.description || node.excerpt}
                </p>
              </div>
              <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {node.frontmatter.topics}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
