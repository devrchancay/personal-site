import React from 'react';
import ThemeProvider from './src/context/ThemeContext';

export default function RootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>;
}
