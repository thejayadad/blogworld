import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* Logo Shape */}
      <div className="relative w-6 h-6 cursor-pointer bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-lg cursor-pointer select-none">IP</span>
      </div>

      {/* Blog Name */}
      <span className="text-2xl font-semibold cursor-pointer text-gray-800 tracking-wide">
        Insight<span className="text-purple-500">Press</span>
      </span>
    </div>
  );
};

export default Logo;
