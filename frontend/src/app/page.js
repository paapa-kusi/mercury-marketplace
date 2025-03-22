import Header from "@/components/layouts/Header";
import MarqueeDivider from "../components/MarqueeDivider";
import Hero from "@/components/Hero";
import HomeInfo from "@/components/HomeInfo";
import Footer from "@/components/layouts/Footer";

export default function HomePage() { 
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Hero />
          <div className="max-w-[1360px] mx-auto px-4">
            <MarqueeDivider />
            <HomeInfo />
            

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
