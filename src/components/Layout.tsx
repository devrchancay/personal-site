/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import { blogPostStyles, globalStyles } from '../styles';

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          ${globalStyles} ${blogPostStyles}
        `}
      />
      {children}
    </div>
  );
};

export default Layout;
