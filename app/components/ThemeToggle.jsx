"use client";

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

// Simplified functional component
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply theme class to the document
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                text-gray-800 dark:text-gray-100 transition-colors duration-200"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
} 