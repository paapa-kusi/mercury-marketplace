import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const StoreCard = ({ item }) => {
  return (
    <a
      className="flex flex-col lg:flex-row hover:cursor-pointer"
      href={`store/${item._id}`}
    >
      <div className="relative w-20 h-20 self-center">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1">
        <div className="text-base text-gray-500 mb-2">{item.category}</div>
        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
        <div className="text-gray-600 text-lg mb-2">{item.seller}</div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2 xl:col-span-1 inline-block text-center bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold">
            ${item.price}
          </div>
          <button className="col-span-3 xl:col-span-4 flex justify-center gap-3 bg-orange-400 text-black px-4 py-2 rounded-full shadow-md text-lg cursor-pointer font-semibold">
            <ShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </a>
  );
};

export default StoreCard;
