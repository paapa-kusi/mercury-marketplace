import MarqueeDivider from "../components/MarqueeDivider";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <MarqueeDivider />
      <section id="about1" className="h-[60vh]">
        <h1>About section 1</h1>
      </section>
      <section className="h-[60vh]">
        <h1>About section 2</h1>
      </section>
    </div>
  );
}
