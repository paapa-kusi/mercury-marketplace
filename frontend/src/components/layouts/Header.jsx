import React from "react";
import { Navbar } from "./Navbar";
import MobileNavbar from "./MobileNavbar";
const Header = () => {
  return (
    <>
      {/* desktop navbar */}

      <div className="min-h-[96px] w-full flex justify-center text-black border-b-1 bg-[#1B263B]">
        <div className="LeftContainer w-[1360px] hidden lg:flex justify-between items-center px-5 text-[#e0e1dd]">
          <div className="flex gap-x-4">
            <h1 className="text-3xl font-bold">
              Mercury
              <br />
              Marketplace
            </h1>
            <Navbar />
          </div>
          <div className="RightContainer hidden md:flex justify-center items-center gap-x-5">
            <button className="iconButton">
              <span className="tooltip text-md">Sign In</span>
            </button>
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
