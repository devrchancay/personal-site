/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CardPost = ({ title, category, cover }) => {
  return (
    <div
      css={tw`max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 pb-3 w-5/6 relative`}
    >
      <Link css={tw`no-underline text-black`} to={'/'}>
        {cover && <Img {...cover} />}

        <div css={tw`px-4 py-4`}>
          <h3 css={tw`font-sans font-bold text-xl mb-2`}>{title}</h3>
        </div>
        <div css={tw`px-6 py-4`}>
          <span
            css={tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
          >
            {category}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CardPost;
