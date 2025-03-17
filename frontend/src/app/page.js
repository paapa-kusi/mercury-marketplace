import Header from "@/components/layouts/Header";
import MarqueeDivider from "../components/MarqueeDivider";
import Hero from "@/components/Hero";
import Footer from "@/components/layouts/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <Hero />
          <div className="max-w-[1360px] mx-auto">
            <MarqueeDivider />

            <section id="about1" className="h-[60vh]">
              <h1>About section 1</h1>
            </section>
            <section className="h-[60vh]">
              <h1>About section 2</h1>
            </section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
