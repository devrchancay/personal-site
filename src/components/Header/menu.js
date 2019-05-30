import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <ul className="pt-6 list-none p-0 w-full flex justify-center">
      <li className="px-2">
        <Link
          activeClassName="text-blue-primary"
          className=" text-gray-primary hover:text-blue-primary underline"
          to={'/'}
        >
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link
          activeClassName="text-blue-primary"
          className="text-gray-primary hover:text-blue-primary underline"
          to={`/blog`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
