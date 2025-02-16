"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  href: string;
  label: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label }) => {
  const pathname = usePathname(); // Get the current route
  const isActive = pathname === href; // Check if it's active

  return (
    <Link
      href={href}
      className={`text-lg flex items-center p-1 w-full justify-center transition-all ${
        isActive
          ? "text-white bg-gray-500 p-1 rounded-md" // Active state styling
          : "text-gray-800 hover:text-purple-500 hover:bg-purple-100" // Default styling
      }`}
    >
      {label}
    </Link>
  );
};

export default LinkItem;
