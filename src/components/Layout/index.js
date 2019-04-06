import React from 'react';
import { Link } from 'gatsby';
import Menu from '../Header/menu';

const BlogLayout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/blog/`;
  let header;

  return (
    <div>
      <header className="w-full">
        <Menu />
      </header>
      <main>{children}</main>
      <footer className="text-center p-6">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default BlogLayout;
