import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-1 w-screen h-screen justify-center">
      <div className="w-full lg:min-h-screen max-w-[1200px] flex flex-col px-5">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
