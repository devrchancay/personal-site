import React from 'react';
import Menu from '../Header/menu';
import './tailwind.css';

const BlogLayout = ({ children }) => {
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
