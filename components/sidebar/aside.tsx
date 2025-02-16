"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import WebsiteSelect from "./website-select";
import AsideLinks from "./aside-links";

interface Website {
  id: string;
  name: string;
  userEmail: string | null;
}

interface AsideProps {
  website: Website | null;
  userWebsites: Website[];
}

const Aside: React.FC<AsideProps> = ({ website, userWebsites }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-full bg-text-light/5 dark:bg-text-light/30 overflow-hidden relative flex flex-col z-[1000] shadow-md transition-all duration-300 ${
        isOpen ? "w-60" : "w-14"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition-all duration-300 flex justify-end text-white p-1 mt-4"
      >
        {isOpen ? (
          <FiChevronLeft className="bg-primary-light text-white dark:bg-primary-dark rounded-full p-2" size={36} />
        ) : (
          <FiChevronRight className="bg-primary-light text-white dark:bg-primary-dark rounded-full p-2" size={36} />
        )}
      </button>

      {/* Sidebar Content */}
      <div className="p-4 flex border-t dark:border-t-background-dark/90 flex-col mt-1 gap-4">
        {/* Pass isOpen and websites */}
        <WebsiteSelect selectedWebsite={website} websites={userWebsites} isOpen={isOpen} />

        {/* Pass isOpen & userEmail to AsideLinks */}
        <AsideLinks isOpen={isOpen} userEmail={website?.userEmail ?? ""} />
      </div>
    </aside>
  );
};

export default Aside;
