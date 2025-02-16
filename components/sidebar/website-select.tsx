"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

interface Website {
  id: string;
  name: string;
  userEmail: string | null; // ✅ Include userEmail for routing
}

interface WebsiteSelectProps {
  selectedWebsite: Website | null;
  websites: Website[];
  isOpen: boolean;
}

const WebsiteSelect: React.FC<WebsiteSelectProps> = ({ selectedWebsite, websites, isOpen }) => {
  const [selected, setSelected] = useState<Website | null>(selectedWebsite);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter(); // ✅ Next.js router for navigation

  // Hide dropdown if the sidebar is collapsed
  if (!isOpen) return null;

  const handleSelect = (site: Website) => {
    if (site.userEmail) {
      setSelected(site);
      setIsDropdownOpen(false);
      router.push(`/${site.userEmail}/${site.id}`); // ✅ Redirect user
    }
  };

  return (
    <div className="relative w-full">
      {/* Selected Website Display */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-sm flex justify-between items-center"
      >
        {selected ? selected.name : "No Website"}
        {websites.length > 1 && <FiChevronDown />}
      </button>

      {/* Dropdown List (Only if User Has Multiple Websites) */}
      {isDropdownOpen && websites.length > 1 && (
        <div className="absolute mt-2 w-full bg-white dark:bg-gray-900 shadow-sm rounded-md z-50">
          {websites.map((site) => (
            <button
              key={site.id}
              onClick={() => handleSelect(site)}
              className="w-full text-left px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {site.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WebsiteSelect;
