// Category card component for displaying and selecting product categories
import React from "react";

// Card component for displaying category with icon and selectable state
const CategoryCard = ({ selectedCategory, setSelectedCategory, category }) => {
  return (
    <div
      key={category.name}
      onClick={() =>
        setSelectedCategory(
          selectedCategory === category.name ? "" : category.name
        )
      }
      className={`${
        category.color
      } p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
        selectedCategory === category.name ? "ring-2 ring-[#778DA9]" : ""
      }`}
    >
      {/* Category content with icon and name */}
      <div className="flex flex-col items-center text-center">
        <div className="text-gray-700 text-4xl mb-3">{category.icon}</div>
        <span className="font-medium text-xl">{category.name}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
