"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { categories } from "@/utils/mockData";
import StoreCard from "@/components/StoreCard";
import CategoryCard from "@/components/CategoryCard";
import SelectFilters from "@/components/SelectFilters";

// Store page component for browsing and filtering marketplace listings
export default function StorePage() {
  // State management for filters and data
  const [universities, setUniversities] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch listings and universities data on component mount
  useEffect(() => {
    const getAllListings = async () => {
      const listings = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/get-all-listings`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const listingRes = await listings.json();

      const universitiesInfo = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/get-all-universities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const universitiesRes = await universitiesInfo.json();
      setUniversities(universitiesRes);
      setFeaturedItems(listingRes);
      setLoading(false);
    };

    getAllListings();
  }, [featuredItems, loading]);

  // Filter items based on selected criteria
  const filteredItems = featuredItems.filter((item) => {
    const matchesUniversity =
      !selectedUniversity || item.universitySpecific === selectedUniversity;
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUniversity && matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero section with search functionality */}
      <div className="relative bg-[#1B263B] text-white py-16 w-full">
        <div className="px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/assets/astronaut-hero.png"
                alt="Mercury Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold">Mercury Marketplace</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Find the supplies you need for your academic journey
          </p>

          {/* Search input field */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm border-2 border-white/20 focus:ring-2 focus:ring-white/50 focus:border-white/50 text-lg placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main content section with filters and listings */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          {/* Left section with filters and listings grid */}
          <div className="lg:flex-1 max-w-3xl">
            {/* Filter controls */}
            <SelectFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedUniversity={selectedUniversity}
              setSelectedUniversity={setSelectedUniversity}
              categories={categories}
              universities={universities}
            />

            {/* Listings grid */}
            <div className="space-y-6 md:grid grid-cols-2 gap-x-8 lg:block">
              {loading ? (
                <h1>Loading...</h1>
              ) : filteredItems.length === 0 ? (
                <h1 className="text-xl font-semibold">No items found.</h1>
              ) : (
                filteredItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white sm:h-[400px] lg:h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <StoreCard item={item} fromUniversity={false} />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right section with category navigation */}
          <div className="hidden w-[400px] lg:block ">
            <h2 className="text-2xl font-semibold mb-8 h-[41px]">
              Browse Categories
            </h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  category={category}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
