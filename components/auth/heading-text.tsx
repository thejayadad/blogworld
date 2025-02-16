import React from "react";

interface HeadingTextProps {
  title: string;
  description?: string;
  center?: boolean; // Optional prop to center align text
}

const HeadingText: React.FC<HeadingTextProps> = ({ title, description, center }) => {
  return (
    <div className={`w-full ${center ? "text-center" : "text-left"}`}>
      {/* Title */}
      <h2 className="text-3xl font-semibold text-gray-800">
        {title}
      </h2>

      {/* Description (if provided) */}
      {description && (
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeadingText;
