import React from "react";

const Footer = () => {
  return (
    <div className="text-xl min-h-[96px] flex justify-between">
      <div className="LeftContainer flex justify-center items-center gap-x-5">
        <h1>Mercury Marketplace</h1>
        <h3>Shop</h3>
        <h3>University</h3>
        <h3>List</h3>
        <h3>About</h3>
      </div>
      <div className="RightContainer flex justify-center items-center gap-x-5">
        <h3>Sign In</h3>
        <h3>Help</h3>
      </div>
    </div>
  );
};

export default Footer;
