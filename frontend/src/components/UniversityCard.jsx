// University card component displaying university information and logo
import React from "react";
import Image from "next/image";

// Card component for displaying university details with selectable state
const UniversityCard = ({ university, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-x-4 w-full rounded-lg bg-white p-3 h-[150px] sm:min-h-[165px] md:h-[150px] shadow-lg border ${
        selected ? "border-[#1B263B] border-[2px]" : "border-none"
      }`}
    >
      {/* University logo container */}
      <div className="w-[40%]">
        <div className="relative h-full w-full max-w-xs">
          <Image
            src={university.logo}
            alt={university._name}
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* University information section */}
      <div className="w-[60%] flex flex-col justify-center items-start">
        <h1 className="text-2xl sm:text-xl md:text-2xl text-start">
          {university._name}
        </h1>
        <h4>{university.location}</h4>
        <p className="text-sm text-gray-700 text-start">
          {university.description}
        </p>
      </div>
    </div>
  );
};

export default UniversityCard;
