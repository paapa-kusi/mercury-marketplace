"use client";
import Footer from "@/components/layouts/Footer";
import React, { useState } from 'react';
import Image from 'next/image';
import { featuredItems, categories, universities } from '@/utils/mockData';

export default function StorePage() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = featuredItems.filter(item => {
    const matchesUniversity = !selectedUniversity || item.university.toLowerCase() === selectedUniversity.toLowerCase();
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUniversity && matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="relative bg-[#1B263B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-12">

          <div className="flex-1 max-w-3xl">
            <select
              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              className="w-full md:w-auto px-4 py-2 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#778DA9]"
            >
              <option value="">All Universities</option>
              {universities.map((university) => (
                <option key={university} value={university}>{university}</option>
              ))}
            </select>

            <div className="space-y-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex">
                    <div className="relative w-48 h-48">
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
                      <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md text-lg font-semibold">
                        ${item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[400px]">
            <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(selectedCategory === category.name ? "" : category.name)}
                  className={`${category.color} p-6 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedCategory === category.name ? "ring-2 ring-[#778DA9]" : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-gray-700 text-4xl mb-3">{category.icon}</div>
                    <span className="font-medium text-xl">{category.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
