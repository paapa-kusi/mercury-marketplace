// Home page component that displays the main landing page
import Header from "@/components/layouts/Header";
import MarqueeDivider from "../components/MarqueeDivider";
import Hero from "@/components/Hero";
import HomeInfo from "@/components/HomeInfo";
import Footer from "@/components/layouts/Footer";

// Main home page component with layout structure
export default function HomePage() {
  return (
    <>
      {/* Main navigation header */}
      <Header />
      {/* Main content container with minimum full viewport height */}
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          {/* Hero section with main call-to-action */}
          <Hero />
          {/* Content section with maximum width constraint */}
          <div className="max-w-[1360px] mx-auto px-4">
            {/* Animated divider between sections */}
            <MarqueeDivider />
            {/* Main information section */}
            <HomeInfo />
          </div>
          {/* Footer with navigation and additional links */}
          <Footer />
        </div>
      </div>
    </>
  );
}
