import React from "react";

const Header = () => {
  return (
    <div className="min-h-[96px] flex justify-between text-[#F0EBD8]">
      <div className="LeftContainer flex justify-center items-center gap-x-5">
        <h1 className="text-3xl font-bold">
          <span className="text-[#1D2D44]">Mercury</span> Marketplace
        </h1>
        <nav className="flex gap-x-5">
          <button className="iconButton">
            <i className="fa-solid fa-store"></i>
            <span className="tooltip">Shop</span>
          </button>
          <button className="iconButton">
            <i className="fa-solid fa-school"></i>
            <span className="tooltip">University</span>
          </button>
          <button className="iconButton">
            <i className="fa-solid fa-list"></i>
            <span className="tooltip">List</span>
          </button>
          <button className="iconButton">
            <i className="fa-solid fa-circle-info"></i>
            <span className="tooltip">About</span>
          </button>
        </nav>
      </div>
      <div className="RightContainer flex justify-center items-center gap-x-5">
        <button className="iconButton">
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
          <span className="tooltip">Sign In</span>
        </button>
        <button className="iconButton">
          <i className="fa-solid fa-question"></i>
          <span className="tooltip">Help</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
