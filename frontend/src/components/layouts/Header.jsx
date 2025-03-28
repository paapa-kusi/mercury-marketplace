import React from "react";
import { Navbar } from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Header = () => {
  return (
    <>
      {/* desktop navbar */}

      <div className="min-h-[96px] w-full flex justify-center text-black bg-[#1B263B]">
        <div className="LeftContainer w-[1360px] hidden lg:flex justify-between items-center px-5 text-[#e0e1dd]">
          <div className="flex gap-x-4">
            <Link className="text-3xl font-bold" href="/">
              Mercury
              <br />
              Marketplace
            </Link>
            <Navbar />
          </div>
          <div className="RightContainer hidden md:flex justify-center items-center gap-x-5 ">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="iconButton">
                  <span className="tooltip text-md hover:text-white transition-colors">Sign In</span>
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="iconButton">
                  <span className="tooltip text-md hover:text-white transition-colors">Sign Up</span>
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        <div className="flex min-h-[96px] max-w-[1200px] lg:hidden w-full justify-between items-center px-5 bg-[#1B263B]">
          <h1 className="text-3xl font-bold text-[#e0e1dd]">
            Mercury
            <br />
            Marketplace
          </h1>
          <MobileNavbar />
        </div>
      </div>
      {/* mobile navbar */}
    </>
  );
};

export default Header;
