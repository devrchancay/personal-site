import React from 'react';
import { Link } from 'gatsby';

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
            className="border flex pl-1 flex-col mx-2 my-4 pb-3 w-5/6 md:w-1/3 relative post-box"
          >
            <Link
              className="no-underline text-black"
              to={node.frontmatter.path}
            >
              <div className="w-full px-2 py-3">
                <span className="bg-site-color px-2 rounded font-sans text-xs font-bold text-blue-primary">
                  {node.frontmatter.topic}
                </span>
              </div>
              <div className="w-full px-2 py-3">
                <h3 className="font-bold leading-tight text-2xl font-sans w-5/6 font-bold font-sans pb-1">
                  {node.frontmatter.title}
                </h3>
                <p className="font-serif pt-3 pr-4 text-sm text-gray-primary leading-tight">
                  {node.frontmatter.description || node.excerpt}
                </p>
                <div className="pt-4">
                  <small>
                    <span role="img" aria-labelledby="date">
                      📅
                    </span>{' '}
                    {node.frontmatter.date}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
