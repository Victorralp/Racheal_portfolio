// src/hooks/use-theme.ts
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check system preference on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for system theme changes
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Also check for manual theme toggle via class
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, [document.documentElement.classList.contains('dark')]);

  return theme;
};