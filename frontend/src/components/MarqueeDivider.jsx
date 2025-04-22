// MarqueeDivider component displaying university logos in an infinite scroll
import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";
import { universities } from "@/utils/Universities";

// Split universities into two rows for alternating marquee directions
const firstRow = universities.slice(0, universities.length / 2);
const secondRow = universities.slice(universities.length / 2);

// Individual university card component with logo and name
const UniversityCard = ({ img, name }) => {
  //TODO: maybe make this smaller or responsive?
  return (
    <figure
      className={cn(
        "relative flex h-full w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] bg-white shadow-lg",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="128"
          height="128"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-3xl font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

// Main component with two marquee rows of university cards
export default function MarqueeDivider() {
  return (
    <div id="universities" className="relative flex w-full flex-col items-center justify-center overflow-hidden inset-shadow-lg inset-shadow-black">
      <h1 className="text-4xl my-10">Trusted by hundreds of universities</h1>
      {/* First marquee row moving left */}
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <UniversityCard key={index} {...review} />
        ))}
      </Marquee>
      {/* Second marquee row moving right */}
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <UniversityCard key={index} {...review} />
        ))}
      </Marquee>
      {/* Shadow overlays for fade effect */}
      <div className="pointer-events-none absolute inset-y-20 -right-85 w-1/4 shadow-2xl"></div>
      <div className="pointer-events-none absolute inset-y-20 -left-85 w-1/4 shadow-2xl"></div>
    </div>
  );
}
