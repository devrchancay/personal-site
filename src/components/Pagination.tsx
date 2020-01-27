/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

type PaginationProps = {
  previous: string;
  next: string;
  previousLabel?: string;
  nextLabel?: string;
};

const Pagination = ({
  previous,
  next,
  previousLabel = 'Older Posts',
  nextLabel = 'Next Posts'
}: PaginationProps) => {
  return (
    <div css={tw`w-full px-4`}>
      <ul
        css={tw`flex flex-col list-none md:justify-between py-2 m-0 md:flex-row`}
      >
        {!!previous && (
          <li css={tw`w-full md:w-1/5`}>
            <Link
              css={tw`my-2 bg-blue-200 p-4 rounded-lg flex justify-center content-center md:my-0 text-gray-800 font-bold`}
              to={previous}
            >
              {nextLabel}
            </Link>
          </li>
        )}
        {!!next && (
          <li css={tw`w-full md:w-1/5`}>
            <Link
              css={tw`my-2 bg-blue-200 p-4 rounded-lg flex justify-center content-center md:my-0 text-gray-800 font-bold`}
              to={next}
            >
              {previousLabel}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
