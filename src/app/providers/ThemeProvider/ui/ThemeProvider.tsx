import { ReactNode, useMemo, useState } from 'react';
import { THEME_LOCALSTORAGE } from 'shared/const/localstorage';
import { Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const defaultTheme =
  (localStorage.getItem(THEME_LOCALSTORAGE) as Theme) || Theme.LIGHT;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  document.body.className = theme;

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
