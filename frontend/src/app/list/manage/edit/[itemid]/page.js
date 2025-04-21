"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import { Listing404 } from "@/components/Listing404";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { useRouter } from "next/navigation";

function ItemPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(null);
  const [seller, setSeller] = useState("");
  const [university, setUniversity] = useState("");
  const [formData, setFormData] = useState({
    clerkId: null,
    title: "",
    description: "",
    price: 0,
    category: "",
    universitySpecific: null,
    image: "",
    status: "Active",
    date: Date.now(),
  });
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
      setCurrentItem(foundItem);
      setFormData({
        clerkId: foundItem.clerkId,
        title: foundItem.title,
        description: foundItem.description,
        price: foundItem.price,
        category: foundItem.category,
        universitySpecific: foundItem.universitySpecific,
        image: foundItem.image,
        status: foundItem.status || "Active",
        date: foundItem.date || Date.now(),
      });
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
      if (currItem.clerkId != user.clerkId) router.push("/"); //TODO: verify functionality, redirect user if not the item owner

      setSeller(user);
      return user;
    };

    const getItemAndUser = async () => {
      const user = await getUser();

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
    setLoading(false);
  }, [params]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      universitySpecific: !universitySpecific,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/edit-listing?itemId=${currentItem._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    router.push("/list/manage");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />

      <div className="flex-1 w-screen xl:max-w-7xl px-18 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">
            Edit Your Listing
          </h1>
          {loading ? (
            <h2 className="text-4xl">Loading...</h2>
          ) : (
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
                  required
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow focus:border-[#1B263B] focus:ring-[#1B263B]"
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
                  required
                  className="mt-1 block p-2 w-full rounded-md border-gray-300 shadow focus:border-[#1B263B] focus:ring-[#1B263B]"
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
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow focus:border-[#1B263B] focus:ring-[#1B263B]"
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
                  required
                  className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow focus:border-[#1B263B] focus:ring-[#1B263B]"
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
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-700"
                >
                  Images
                </label>
                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    id="file-upload"
                    className="mt-1 mr-5 block p-2 rounded-md border shadow focus:border-[#1B263B] focus:ring-[#1B263B]"
                    onChange={handleImageUpload}
                  />
                  <input
                    id="university-specific"
                    type="checkbox"
                    checked={formData.universitySpecific != null}
                    onChange={handleUniversitySpecific}
                  />
                  <label
                    htmlFor="university-specific"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    University specific?
                  </label>
                </div>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="mt-4 max-h-48 rounded-md"
                  />
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#1B263B]/90 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ItemPage;
