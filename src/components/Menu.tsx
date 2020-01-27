/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

type MenuProps = {
  isHome?: boolean;
};

const Menu = ({ isHome }: MenuProps) => (
  <ul css={tw`p-0 list-none py-2 m-0 w-full flex justify-center`}>
    {!isHome && (
      <li css={tw`px-2 m-0`}>
        <Link
          activeStyle={tw`text-blue-400 p-0`}
          css={tw`font-normal text-gray-800 hover:text-blue-400 underline`}
          to={'/'}
        >
          Home
        </Link>
      </li>
    )}
    <li css={tw`px-2 m-0`}>
      <Link
        activeStyle={tw`text-blue-400 p-0`}
        css={tw`font-normal text-gray-800 hover:text-blue-400 underline`}
        to={'/blog'}
      >
        Blog
      </Link>
    </li>
  </ul>
);

export default Menu;
