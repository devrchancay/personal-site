/** @jsx jsx */
import React from 'react';
import { Global, jsx, css } from '@emotion/core';
import { blogPostStyles, globalStyles } from '../styles';
import { ThemeContext } from '../context/ThemeContext';
import ColorModeToggle from './ColorModeToggle';

const Layout = ({ children }) => {
  const context = React.useContext(ThemeContext);

  return (
    <div className={`${context.theme}`}>
      <div className="layout">
        <ColorModeToggle
          isDark={context.theme === 'theme-dark'}
          toggle={context.toggleTheme}
        />
        <Global
          styles={css`
            ${globalStyles} ${blogPostStyles}
          `}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
