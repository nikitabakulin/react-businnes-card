import { useState } from 'react';
import Theme from '../Theme';

export const useThemeToggle = () => {
  const { theme, setTheme } = Theme();
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