import { featuredItems } from "../../utils/mockData"; // Adjust the path based on your structure
import { useRouter } from "next/router";
import Image from "next/image";

export default function ItemPage({ item }) {
  const router = useRouter();

  // Show a loading state for fallback pages
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

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

// Generates static pages for each item at build time
export async function getStaticPaths() {
  const paths = featuredItems.map((item) => ({
    params: { itemid: item.id.toString() }, // Convert ID to string for Next.js
  }));

  return { paths, fallback: false }; // fallback false ensures only valid paths exist
}

// Fetches the item data based on the ID
export async function getStaticProps({ params }) {
  const item = featuredItems.find((i) => i.id.toString() === params.itemid);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: { item },
  };
}
