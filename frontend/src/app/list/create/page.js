"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { universities } from "@/utils/Universities";

export default function CreateListingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    university: "",
    images: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement listing creation
    console.log("Form submitted:", formData);
    router.push("/list/manage");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">Create a New Listing</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              >
                <option value="">Select a category</option>
                <option value="course-materials">Course Materials</option>
                <option value="electronics">Electronics</option>
                <option value="dorm-supplies">Dorm Supplies</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                University
              </label>
              <select
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              >
                <option value="">Select a university</option>
                {universities.map((university) => (
                  <option key={university.name} value={university.name}>
                    {university.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                className="mt-1 block w-full"
                onChange={(e) => {
                  // Implement image handling
                  console.log("Images selected:", e.target.files);
                }}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#1B263B]/90 transition-colors"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
} 