import { featuredItems } from "../../../utils/mockData";
import Image from "next/image";
import { Listing404 } from "@/components/Listing404";

export default function ItemPage({ params }) {
  const { itemid } = params;
  const item = featuredItems.find((i) => i.id.toString() === itemid);

  //TODO: add a 404 page
  if (!item) {
    return <Listing404 />;
  }

  //TODO: make nicer
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <Image
        src={item.image}
        alt={item.title}
        width={300}
        height={300}
        className="rounded-md"
      />
      <p className="text-lg mt-2">${item.price}</p>
      <p className="text-gray-600">Sold by: {item.seller}</p>
      <p className="text-gray-500">Category: {item.category}</p>
      <p className="text-gray-500">University: {item.university}</p>
    </div>
  );
}

// Next.js App Router automatically handles dynamic routes
