import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-[1360px] mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
