'use client'
import { useTheme } from "../theme-context";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition duration-300 bg-gray-200 dark:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "light" ? 'Moon' : 'Sun' }
    </button>
  );
};

export default ThemeToggle;
