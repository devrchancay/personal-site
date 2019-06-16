import React from 'react';
import CardBlogPost from './CardBlogPost';

const Posts = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
      <div className="container">
        <h2 className="text-2xl font-sans font-bold text-center md:text-left text-gray-800 mx-2 font-bold">
          Latest articles of the blog
        </h2>
      </div>
      <div className="container flex flex-col sm:justify-center md:flex-row items-center">
        {posts.map(({ node }) => (
          <CardBlogPost node={node} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
