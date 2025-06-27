import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Button from './button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
}
