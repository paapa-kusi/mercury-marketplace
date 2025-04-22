// Main layout component wrapping the application with header and footer
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// Root layout component providing consistent page structure
const Layout = ({ children, props }) => {
  return (
    // Full-height layout container with flex column
    <div className="min-h-screen flex flex-col">
      {/* Header navigation */}
      <Header />

      {/* Main content area with flexible height */}
      <main className="flex-1">
        <div className={props}>{children}</div>
      </main>

      {/* Footer with navigation and links */}
      <Footer />
    </div>
  );
};

export default Layout;
