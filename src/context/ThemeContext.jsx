import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

const systemTheme = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const storedTheme = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#121110' : '#ffffff');
};

export const ThemeProvider = ({ children }) => {
  // The initial value is already set on <html> by the inline script in index.html
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || storedTheme() || systemTheme()
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow the system while the user has not picked a theme manually
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!storedTheme()) setTheme(systemTheme());
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable: choice lasts for this session only */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
