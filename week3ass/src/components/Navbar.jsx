import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply the theme to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <nav className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        PLP Task Manager
      </h1>

      <div className="flex gap-2">
        <button
          onClick={() => setTheme('light')}
          className={`px-4 py-2 rounded text-sm transition 
            ${theme === 'light' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 dark:bg-gray-400 text-gray-100 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-100'
            }`}
        >
          Light Mode
        </button>

        <button
          onClick={() => setTheme('dark')}
          className={`px-4 py-2 rounded text-sm transition 
            ${theme === 'dark' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
           Dark Mode
        </button>
      </div>
    </nav>
  );
}
