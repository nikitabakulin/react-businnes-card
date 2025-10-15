import { useState } from 'react';
import { useTheme } from './use-theme';

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    if (isDarkTheme) {
      lightTheme();
    } else {
      darkTheme();
    }
    setDarkTheme(!isDarkTheme);
  };

  const lightTheme = () => {
    setTheme('light');
  };

  const darkTheme = () => {
    setTheme('dark');
  };

  return { theme, isDarkTheme, toggleTheme };
}