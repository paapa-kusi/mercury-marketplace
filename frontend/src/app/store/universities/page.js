"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import StoreCard from "@/components/StoreCard";

export default function StorePage() {
  const [currentUniversity, setCurrentUniversity] = useState();
  const [listedUniversities, setListedUniversities] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllListings = async () => {
      const listingsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/get-all-listings`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const listings = await listingsRes.json();

      const uniRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/get-all-universities`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const universities = await uniRes.json();

      setFeaturedItems(listings);
      setUniversities(universities);
      setLoading(false);
    };

    getAllListings();
  }, []);

  const updateCurrentUniversity = (u) => {
    if (listedUniversities.find((l) => u._id === l._id)) {
      if (currentUniversity == u) {
        setCurrentUniversity("");
      } else {
        setCurrentUniversity(u);
      }
    }
  };

  const filteredItems = currentUniversity
    ? featuredItems.filter(
        (item) => item.universitySpecific === currentUniversity._id
      )
    : featuredItems;

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12 justify-start">
          <div className="lg:flex-1 max-w-3xl">
            <div className="space-y-6 md:grid grid-cols-2 gap-x-8 lg:block">
              {loading ? (
                <h1>Loading...</h1>
              ) : filteredItems.length === 0 ? (
                <h1 className="text-xl font-semibold">No items found.</h1>
              ) : (
                Object.entries(
                  filteredItems.reduce((acc, item) => {
                    const uniId = item.universitySpecific;
                    if (!acc[uniId]) acc[uniId] = [];
                    acc[uniId].push(item);
                    return acc;
                  }, {})
                ).map(([uniId, items]) => {
                  const university = universities.find((u) => u._id === uniId);
                  if (
                    university &&
                    !listedUniversities.some((u) => u._id === university._id)
                  ) {
                    setListedUniversities((prevItems) => [
                      ...prevItems,
                      university,
                    ]);
                  }
                  return (
                    <div key={uniId} className="mb-10">
                      <h2 className="text-2xl font-bold mb-4">
                        {university?._name || "Not specified"}
                      </h2>
                      <div className="space-y-6 md:grid grid-cols-2 gap-x-8 lg:block">
                        {items.map((item) => (
                          <div
                            key={item._id}
                            className="bg-white sm:h-[400px] lg:h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                          >
                            <StoreCard item={item} fromUniversity />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl mb-2 font-semibold">Sort by university:</h3>
            {universities.map((u) => (
              <p
                key={u._id}
                onClick={() => updateCurrentUniversity(u)}
                className={`${
                  listedUniversities.find((l) => u._id === l._id)
                    ? currentUniversity === u
                      ? "cursor-pointer text-orange-400 select-none"
                      : "cursor-pointer select-none"
                    : "text-gray-400 cursor-default select-none"
                }`}
              >
                {u._name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
