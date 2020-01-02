/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

type CardPostProps = {
  title: string;
  cover: object;
  slug: string;
};

const CardPost = ({ title, cover, slug }: CardPostProps) => {
  return (
    <div
      css={tw`max-w-sm rounded overflow-hidden shadow-lg mx-2 my-4 pb-3 w-5/6 relative`}
    >
      <Link css={tw`no-underline text-black`} to={slug}>
        {cover && <Img loading="lazy" {...cover} />}

        <div css={tw`px-4 py-4`}>
          <h3 css={tw`font-sans font-bold text-xl mb-2`}>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CardPost;
