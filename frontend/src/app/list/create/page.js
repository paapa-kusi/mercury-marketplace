"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { useUser } from "@clerk/nextjs";

// TODO: redirect user to complete sign up if not done
export default function CreateListingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState("");
  const [formData, setFormData] = useState({
    clerkId: null,
    title: "",
    description: "",
    price: 0,
    category: "",
    universitySpecific: null,
    image: "",
    status: "Active",
    date: Date.now,
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (!isLoaded || !user) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/get-user?clerkId=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      setUserInfo(data);
      setFormData((prev) => ({
        ...prev,
        clerkId: user.id,
      }));
    };

    fetchUser();
  }, [isLoaded, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement listing creation

    console.log("Form submitted:", formData);
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/create-listing`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    router.push("/list/manage");
  };

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
      image: imageUrl,
    }));
  };

  const handleUniversitySpecific = () => {
    setFormData((prev) => ({
      ...prev,
      universitySpecific: userInfo.university,
    }));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />
      <div className="flex-1 w-screen xl:max-w-7xl px-18 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">
            Create a New Listing
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
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
                className="mt-1 block p-2 h-[100px] w-full rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter a price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              >
                <option value="">Select a category</option>
                <option value="Course Materials">Course Materials</option>
                <option value="Electronics">Electronics</option>
                <option value="Dorm Supplies">Dorm Supplies</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
            <div>
              <label
                for="file-upload"
                className="block text-sm font-medium text-gray-700"
              >
                Images
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  id="file-upload"
                  className="mt-1 mr-5 block w-contain p-2 hover:bg-gray-400 rounded-md transition ease-in duration-200 shadow-[0_0px_10px_rgba(0,0,0,0.14)]  focus:border-[#1B263B] focus:ring-[#1B263B]"
                  onChange={(e) => {
                    handleImageUpload(e);
                  }}
                />

                <input
                  id="university-specific"
                  type="checkbox"
                  onChange={handleUniversitySpecific}
                />
                <label
                  htmlFor="university-specific"
                  className="block text-sm font-medium text-gray-700 ml-2"
                >
                  University specific?
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#1B263B]/90 transition-colors cursor-pointer"
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
