import MarqueeDivider from "../components/MarqueeDivider";

export default function HomePage() {
  return (
    <div>
      <section className="h-[60vh]">
        <h1>Hero</h1>
      </section>
      <MarqueeDivider />
      <section className="h-[60vh]">
        <h1>Featured</h1>
      </section>
      <section className="h-[60vh]">
        <h1>About</h1>
      </section>
    </div>
  );
}
