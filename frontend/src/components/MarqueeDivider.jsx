import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";
const universities = [
  {
    name: "University of Florida",
    img: "https://1000logos.net/wp-content/uploads/2017/02/florida-gators-logo-500x346.jpg",
  },
  {
    name: "Alabama State University",
    img: "https://1000logos.net/wp-content/uploads/2019/09/Alabama-State-Hornets-Logo-tumb.png",
  },
  {
    name: "Florida Atlantic University",
    img: "https://1000logos.net/wp-content/uploads/2022/02/Florida-Atlantic-Owls-logo-tumb.jpg",
  },
  {
    name: "Georgia State University",
    img: "https://1000logos.net/wp-content/uploads/2019/08/Georgia-State-Panthers.jpg",
  },
  {
    name: "University of Houston",
    img: "https://1000logos.net/wp-content/uploads/2022/02/Houston-Cougars-logo-tumb.jpg",
  },
  {
    name: "Louisiana State University",
    img: "https://1000logos.net/wp-content/uploads/2019/06/LSU-Logo.jpg",
  },
  {
    name: "University of Miami",
    img: "https://1000logos.net/wp-content/uploads/2018/01/Miami-Hurricanes-Logo-500x281.jpg",
  },
  {
    name: "Michigan State University",
    img: "https://1000logos.net/wp-content/uploads/2018/01/michigan-state-logo-500x400.jpg",
  },
  {
    name: "Ohio University",
    img: "https://1000logos.net/wp-content/uploads/2019/12/Ohio-Bobcats-Logo-tumb.png",
  },
  {
    name: "Oklahoma University",
    img: "https://1000logos.net/wp-content/uploads/2019/09/0026_Oklahoma-Sooners.jpg",
  },
  {
    name: "University of Kentucky",
    img: "https://1000logos.net/wp-content/uploads/2018/01/Kentucky-Logo-500x409.jpg",
  },
  {
    name: "University of South Florida",
    img: "https://1000logos.net/wp-content/uploads/2020/02/South-Florida-Bulls-Logo-tumb.png",
  },
  {
    name: "Stanford University",
    img: "https://1000logos.net/wp-content/uploads/2019/10/0002_Stanford-Cardinal.jpg",
  },
  {
    name: "Texas A&M University",
    img: "https://1000logos.net/wp-content/uploads/2022/02/Texas-AM-Aggies-logo-tumb.jpg",
  },
  {
    name: "Tulane University",
    img: "https://1000logos.net/wp-content/uploads/2021/07/Tulane-Green-Wave-logo-tumb.jpg",
  },
  {
    name: "University of Massachusetts",
    img: "https://1000logos.net/wp-content/uploads/2022/02/Massachusetts-Minutemen-logo-tumb.jpg",
  },
];

const firstRow = universities.slice(0, universities.length / 2);
const secondRow = universities.slice(universities.length / 2);

const ReviewCard = ({ img, name }) => {
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
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-20 -right-85 w-1/4 shadow-2xl"></div>
      <div className="pointer-events-none absolute inset-y-20 -left-85 w-1/4 shadow-2xl"></div>
    </div>
  );
}
