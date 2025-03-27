import React from "react";
import Link from "next/link";

export const Listing404 = () => {
  return (
    <div className="w-full h-[70vh] flex flex-1 justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-5xl text-center">
          Whoops! We can't find that listing.
        </h1>
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
