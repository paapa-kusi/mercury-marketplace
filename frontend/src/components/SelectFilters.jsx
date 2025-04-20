import React from "react";

const SelectFilters = ({
  selectedUniversity,
  setSelectedUniversity,
  universities,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <>
      <select
        value={selectedUniversity}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedUniversity(e.target.value);
        }}
        className="w-full md:w-72 md:mr-3 px-4 py-2 mb-4 md:mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#778DA9]"
      >
        <option value="">All Universities</option>
        {universities.map((university) => (
          <option
            className="text-wrap"
            key={university.name}
            value={university._id}
          >
            {university._name}
          </option>
        ))}
      </select>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-full md:w-48 lg:hidden px-4 py-2 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#778DA9]"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectFilters;
