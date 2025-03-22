"use client";
import React from "react";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
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
            <h1 className="text-5xl font-bold">About Mercury Marketplace</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            The student marketplace for academic items
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Problem & Solution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B263B]">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Mercury Marketplace connects students to buy and sell academic items within their university. 
            We simplify the process of finding and selling textbooks, dorm supplies, and course materials.
          </p>
        </section>

        {/* Founders */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-[#1B263B]">Founders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#1B263B]">Mohamed Fahd</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#1B263B]">Rami Darwiche</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#1B263B]">Paapa Kusi</h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold text-[#1B263B]">Sarthak Jena</h3>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#1B263B]">Technical Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• University email authentication</li>
              <li>• Database with 100+ items</li>
              <li>• User profiles and messaging</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
} 