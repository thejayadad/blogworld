"use client";

import React from "react";
import { FiMessageCircle, FiMessageSquare, FiSettings } from "react-icons/fi"; // Example icon
import AsideLinkItem from "./aside-link-item";

interface AsideLinksProps {
  isOpen: boolean;
  userEmail: string | null;
}

const AsideLinks: React.FC<AsideLinksProps> = ({ isOpen, userEmail }) => {
  const routes = [
    {
      label: "Settings",
      href: `/dashboard/${userEmail}/settings`,
      icon: <FiSettings  size={22} />,
    },
    {
      label: "Posts",
      href: `/dashboard/${userEmail}/posts`,
      icon: <FiMessageSquare  size={22} />,
    },
  ];

  return (
    <div className="transition-opacity duration-300 flex flex-col gap-2">
      <div className="dark:text-white mt-4 mb-4 ">New Website</div>
      {routes.map((route) => (
        <AsideLinkItem key={route.href} route={route} isOpen={isOpen} />
      ))}
    </div>
  );
};

export default AsideLinks;
