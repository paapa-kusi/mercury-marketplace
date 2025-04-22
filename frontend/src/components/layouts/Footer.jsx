// Footer component with navigation links and branding
import React from "react";
import Link from "next/link";

// Main footer component with navigation and help links
const Footer = () => {
  return (
    <footer className="w-full bg-[#1B263B] text-[#e0e1dd] py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer content container with navigation and links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand and main navigation links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold hover:text-white transition-colors">
              Mercury Marketplace
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/store" className="text-[#e0e1dd] hover:text-white transition-colors">
                Shop
              </Link>
              <Link href="/university" className="text-[#e0e1dd] hover:text-white transition-colors">
                University
              </Link>
              <Link href="/list" className="text-[#e0e1dd] hover:text-white transition-colors">
                List
              </Link>
              <Link href="/about" className="text-[#e0e1dd] hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
          {/* Help and authentication links */}
          <div className="flex items-center gap-6">
            {/*<Link href="/signin" className="text-[#e0e1dd] hover:text-white transition-colors">*/}
            {/*  Sign In*/}
            {/*</Link>*/}
            <Link href="/help" className="text-[#e0e1dd] hover:text-white transition-colors">
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
