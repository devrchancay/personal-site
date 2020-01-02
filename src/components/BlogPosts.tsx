/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import CardPost from './CardPost';

const BlogPost = ({ posts = [] }) => {
  return (
    <div
      css={tw`flex flex-col justify-center items-center content-center py-8 md:w-full md:px-6`}
    >
      <div css={tw`flex`}>
        <h2
          css={tw`text-2xl font-sans font-bold md:text-left text-gray-800 mx-2 font-bold`}
        >
          Latest articles of the blog
        </h2>
      </div>
      <div css={tw`flex flex-col sm:justify-center md:flex-row items-center`}>
        {posts.map(({ node }) => {
          return (
            <CardPost
              cover={node.data.cover.localFile.childImageSharp}
              category={node.data.category.uid}
              key={node.id}
              title={node.data.title.text}
              slug={node.fields.slug}
            />
          );
        })}
      </div>
      <div
        css={tw`flex flex-col sm:justify-center md:flex-row items-center p-4 pb-0`}
      >
        <Link
          to="/blog"
          css={tw`bg-gray-300 hover:fill-white hover:bg-blue-500 hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
        >
          <span css={tw`font-sans`}>Go to blog</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
