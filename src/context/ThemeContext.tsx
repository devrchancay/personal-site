import React from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

type themeTypes = 'theme-light' | 'theme-dark';

const initialValue = { theme: 'theme-light', toggleTheme: () => {} };

export const ThemeContext = React.createContext<IThemeContext>(initialValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState<themeTypes>('theme-light');

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
