import React from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

type themeTypes = 'theme-light' | 'theme-dark';

const initialValue = { theme: 'theme-light', toggleTheme: () => {} };

export const ThemeContext = React.createContext<IThemeContext>(initialValue);

const isServer = typeof window === 'undefined';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState<themeTypes>('theme-light');

  React.useEffect(() => {
    if (!isServer) {
      const darkModeMediaQuery = window.matchMedia(
        '(prefers-color-scheme: dark)'
      );
      darkModeMediaQuery.addListener(e => {
        const darkModeOn = e.matches;
        setTheme(darkModeOn ? 'theme-dark' : 'theme-light');
      });

      const userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (userPrefersDark) {
        setTheme('theme-dark');
      } else {
        setTheme('theme-light');
      }

      return () => {
        darkModeMediaQuery.removeEventListener('change', () => {});
      };
    }
  }, []);

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
