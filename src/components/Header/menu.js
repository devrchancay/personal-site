import React from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <ul className="pt-6 list-none p-0 w-full flex justify-center">
      <li className="px-2">
        <Link
          activeClassName="text-blue-400"
          className="text-gray-800 hover:text-blue-400 underline"
          to={'/'}
        >
          Home
        </Link>
      </li>
      <li className="px-2">
        <Link
          activeClassName="text-blue-400"
          to={'/about'}
          className="text-gray-800 hover:text-blue-400 underline"
        >
          About me
        </Link>
      </li>
      <li className="px-2">
        <Link
          activeClassName="text-blue-400"
          className="text-gray-800 hover:text-blue-400 underline"
          to={`/blog`}
        >
          Blog
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
