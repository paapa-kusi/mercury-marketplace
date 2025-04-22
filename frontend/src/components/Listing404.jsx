// 404 error page component for when a listing is not found
import React from "react";
import Link from "next/link";

// Displays a friendly error message with a link to return home
export const Listing404 = () => {
  return (
    // Full-height container with centered content
    <div className="w-full h-[70vh] flex flex-1 justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        {/* Error message heading */}
        <h1 className="text-5xl text-center">
          Whoops! We can't find that listing.
        </h1>
        {/* Home navigation link */}
        <Link
          className="text-2xl text-blue-500 hover:opacity-75 transition-opacity"
          href="/"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};
