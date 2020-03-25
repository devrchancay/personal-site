/** @jsx jsx */
import { jsx } from '@emotion/core';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

type MenuProps = {
  isHome?: boolean;
};

const Menu = ({ isHome }: MenuProps) => (
  <ul css={tw`bg-background p-0 list-none py-2 m-0 w-full flex justify-center`}>
    {!isHome && (
      <li css={tw`px-2 m-0`}>
        <Link
          activeStyle={tw`text-primary p-0`}
          css={tw`font-normal text-secondary hover:text-primary underline`}
          to={'/'}
        >
          Home
        </Link>
      </li>
    )}
    <li css={tw`px-2 m-0`}>
      <Link
        activeStyle={tw`text-primary p-0`}
        css={tw`font-normal text-secondary hover:text-primary underline`}
        to={'/about'}
      >
        About me
      </Link>
    </li>
    <li css={tw`px-2 m-0`}>
      <Link
        activeStyle={tw`text-primary p-0`}
        css={tw`font-normal text-secondary hover:text-primary underline`}
        to={'/blog'}
      >
        Blog
      </Link>
    </li>
  </ul>
);

export default Menu;
