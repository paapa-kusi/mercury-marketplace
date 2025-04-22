"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { Listing404 } from "@/components/Listing404";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

function ItemPage({ params }) {
  const [item, setItem] = useState([]);
  const [seller, setSeller] = useState("");
  const [university, setUniversity] = useState("");
  const router = useRouter();
  const { itemid } = use(params);

  useEffect(() => {
    const getListings = async () => {
      const listings = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/get-all-listings`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await listings.json();
      const foundItem = res.find((i) => i._id.toString() === itemid);
      setItem(foundItem);
      return foundItem;
    };

    const getUser = async () => {
      const currItem = await getListings();
      if (!currItem) return;

      const userRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/get-user?clerkId=${currItem.clerkId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const user = await userRes.json();
      setSeller(user);
      return user;
    };

    const getItemAndUser = async () => {
      const user = await getUser();
      console.log(user.university);

      const universityRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/get-university?universityId=${user.university}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!universityRes.ok) {
        const errText = await universityRes.text();
        console.error(
          "University fetch failed:",
          universityRes.status,
          errText
        );
        return;
      }
      const university = await universityRes.json();
      setUniversity(university);
    };

    getItemAndUser();
  }, [params]);

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
              Sold by: {seller.username}
              {university ? `, ${university._name}` : "No university specified"}
            </p>
            <h3 className="text-gray-500">
              {new Date(Date.parse(item.date)).toDateString()}
            </h3>
          </div>
          <div>
            <p className="text-lg">{item.description}</p>
            <div className="flex flex-col md:grid md:grid-cols-8 gap-4 mt-8">
              <div className="w-full col-span-3 lg:col-span-2 inline-block text-center bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold">
                ${item.price}
              </div>
              <button className="w-full col-span-5 lg:col-span-6 flex justify-center gap-3 bg-orange-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold cursor-pointer">
                <ShoppingCart />
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
