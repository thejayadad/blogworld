"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`h-full bg-text-light/5 dark:bg-text-light/30 overflow-hidden relative flex flex-col z-[1000] shadow-md transition-all duration-300 ${
        isOpen ? "w-60" : "w-14"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-all duration-300 flex justify-end  text-white p-1 mt-4
          ${isOpen ? "mr-2" : "mr-2 rotate-360"}`}
      >
        {isOpen ? <FiChevronLeft className="bg-primary-light text-white dark:bg-primary-dark rounded-full p-2" size={36} /> : <FiChevronRight className="bg-primary-light text-white dark:bg-primary-dark rounded-full p-2" size={36} />}
      </button>

      {/* Sidebar Content */}
      <div className="p-4 flex flex-col gap-4">
        <p className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
          Website
        </p>

        <p className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
          Links
        </p>
      </div>
    </aside>
  );
};

export default Aside;
