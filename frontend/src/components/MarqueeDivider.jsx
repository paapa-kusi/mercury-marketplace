import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";
import { universities } from "@/utils/Universities";

const firstRow = universities.slice(0, universities.length / 2);
const secondRow = universities.slice(universities.length / 2);

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

export default function MarqueeDivider() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden inset-shadow-lg inset-shadow-black">
      <h1 className="text-4xl my-10">Trusted by hundreds of universities</h1>
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <UniversityCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <UniversityCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-20 -right-85 w-1/4 shadow-2xl"></div>
      <div className="pointer-events-none absolute inset-y-20 -left-85 w-1/4 shadow-2xl"></div>
    </div>
  );
}
