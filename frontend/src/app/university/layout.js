// Layout component for university section with header and footer
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

// Wraps university pages with consistent layout structure
export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main navigation header */}
      <Header />
      {/* Main content container with max width */}
      <div className="flex-1 max-w-[1360px] mx-auto px-4 w-full">
        {children}
      </div>
      {/* Footer with navigation and links */}
      <Footer />
    </div>
  );
}
