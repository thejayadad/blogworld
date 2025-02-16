"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Route {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface AsideLinkItemProps {
  route: Route;
  isOpen: boolean;
}

const AsideLinkItem: React.FC<AsideLinkItemProps> = ({ route, isOpen }) => {
  const pathname = usePathname();
  const isActive = pathname === route.href;

  return (
    <Link href={route.href} className="w-full">
      <div
        className={`flex items-center dark:text-white rounded-full transition-all duration-200 cursor-pointer
          ${
            isActive
              ? " text-primary-dark dark:text-primary-light"
              : "hover:bg-gray-200 dark:hover:bg-gray-800"
          }
          ${isOpen ? "gap-1" : "justify-center"}`} // ✅ Center icon when collapsed
      >
        {/* Icon */}
        <div className="text-lg flex items-center justify-center w-10 h-10">
          {route.icon}
        </div>

        {/* Label (Hidden when collapsed) */}
        {isOpen && <span className="text-sm font-medium">{route.label}</span>}
      </div>
    </Link>
  );
};

export default AsideLinkItem;
