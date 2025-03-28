import { featuredItems } from "../../../utils/mockData";
import Image from "next/image";
import { Listing404 } from "@/components/Listing404";

async function ItemPage({ params }) {
  const { itemid } = await params;
  const item = featuredItems.find((i) => i.id.toString() === itemid);

  if (!item) {
    return <Listing404 />;
  }

  //TODO: make nicer
  return (
    <div className="pb-24 md:pb-0 container mx-auto p-4 flex justify-center">
      <div className="flex flex-col md:flex-row justify-center md:gap-24">
        <div>
          <p className="text-gray-500 pb-2">{item.category}</p>
          <Image
            src={item.image}
            alt={item.title}
            width={10000}
            height={10000}
            className="rounded-md w-[500px] h-[600px] object-cover"
          />
        </div>

        <div className="min-h-[350px] md:max-w-[325px] lg:min-w-[400px] max-w-[500px] lg:max-w-[500px] md:h-[350px] flex flex-col justify-between">
          <div className="mb-8">
            <h1 className="text-4xl font-medium pt-5 pb-1">{item.title}</h1>
            <p className="text-gray-600">
              Sold by: {item.seller}, {item.university}
            </p>
            <h3 className="text-gray-500">{item.date}</h3>
          </div>
          <div>
            <p className="text-lg">{item.description}</p>
            <div className="flex flex-col md:grid md:grid-cols-8 gap-4 mt-8">
              <div className="w-full col-span-3 lg:col-span-2 inline-block text-center bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold">
                ${item.price}
              </div>
              <button className="w-full col-span-5 lg:col-span-6 flex justify-center gap-3 bg-orange-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold">
                {/* <ShoppingCart /> */}
                Add to cart
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
