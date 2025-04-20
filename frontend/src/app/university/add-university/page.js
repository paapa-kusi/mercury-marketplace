"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function UniversityForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    _name: "",
    location: "",
    description: "",
    logo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const image = new FormData();
    image.append("file", file);
    image.append("upload_preset", "ml_default");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daaerku33/image/upload",
      {
        method: "POST",
        body: image,
      }
    );

    const data = await res.json();
    const imageUrl = data.secure_url;
    setFormData((prev) => ({
      ...prev,
      logo: imageUrl,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/create-university`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to create university");

      router.push("/university");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex-1 w-screen xl:max-w-4xl px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">
            Create a New University
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="_name"
                className="block text-sm font-medium text-gray-700"
              >
                University Name
              </label>
              <input
                type="text"
                id="_name"
                name="_name"
                value={formData._name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full p-2 h-[100px] rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700"
              >
                University Logo
              </label>
              <input
                type="file"
                accept="image/*"
                id="file-upload"
                name="logo"
                onChange={handleImageUpload}
                className="mt-1 block w-full p-2 rounded-md hover:bg-gray-400 transition ease-in duration-200 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#1B263B]/90 transition-colors cursor-pointer"
              >
                Create University
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
