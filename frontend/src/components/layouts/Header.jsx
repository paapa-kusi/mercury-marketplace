"use client";

import React from "react";
import { Navbar } from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

// Main header component with desktop and mobile navigation
const Header = () => {
  return (
    <>
      {/* Desktop navigation header */}
      <div className="min-h-[96px] w-full flex justify-center text-black bg-[#1B263B]">
        {/* Desktop navigation container */}
        <div className="LeftContainer w-[1360px] hidden lg:flex justify-between items-center px-5 text-[#e0e1dd]">
          {/* Brand and main navigation */}
          <div className="flex gap-x-4">
            <Link className="text-3xl font-bold" href="/">
              Mercury
              <br />
              Marketplace
            </Link>
            <Navbar />
          </div>
          {/* Authentication and user controls */}
          <div className="RightContainer hidden md:flex justify-center items-center gap-x-5 ">
            <SignedOut>
              <div className="flex gap-x-3">
                <Link href="/sign-in">
                  <button className="iconButton">
                    <span className="tooltip text-md hover:text-white transition-colors">
                      Sign In
                    </span>
                  </button>
                </Link>

                <Link href="/sign-up">
                  <button className="iconButton">
                    <span className="tooltip text-md hover:text-white transition-colors">
                      Sign Up
                    </span>
                  </button>
                </Link>
              </div>
            </SignedOut>

            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>
        </div>

        {/* Mobile navigation container */}
        <div className="flex min-h-[96px] max-w-[1200px] lg:hidden w-full justify-between items-center px-5 bg-[#1B263B]">
          <h1 className="text-3xl font-bold text-[#e0e1dd]">
            Mercury
            <br />
            Marketplace
          </h1>
          <MobileNavbar />
        </div>
      </div>
    </>
  );
};

export default Header;
