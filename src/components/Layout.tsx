/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core';
import { blogPostStyles } from '../styles';

const Layout = ({ children }) => {
  return (
    <div>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
            line-height: 1.25;
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }
          a {
            text-decoration: none;
            color: #63b3ed;
            font-weight: 700;
          }

          ${blogPostStyles}
        `}
      />
      {children}
    </div>
  );
};

export default Layout;
