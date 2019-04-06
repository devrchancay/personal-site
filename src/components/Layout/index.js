import React from 'react';
import Menu from '../Header/menu';
import Footer from '../Footer';

import './tailwind.css';

const BlogLayout = ({ children }) => {
  return (
    <div>
      <header className="w-full">
        <Menu />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
