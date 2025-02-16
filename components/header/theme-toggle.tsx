"use client";

import { useTheme } from "../theme-context";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition duration-300 
                 bg-primary-light text-white shadow-sm 
                 dark:bg-primary-dark dark:text-white 
                 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon size={20} className="text-white dark:text-yellow-300" />
      ) : (
        <FiSun size={20} className="text-yellow-400 dark:text-gray-100" />
      )}
    </button>
  );
};

export default ThemeToggle;
