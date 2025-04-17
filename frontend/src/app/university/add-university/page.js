"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/create-university`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to create university");
      router.push("/university");
    } catch (err) {
      console.error(err);
    }
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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mt-12 mx-auto p-6 space-y-4 bg-white shadow rounded"
    >
      <h2 className="text-xl font-semibold">Create University</h2>

      <input
        type="text"
        name="_name"
        placeholder="University Name"
        value={formData._name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
        rows={4}
      />

      <input
        type="file"
        multiple
        accept="image/*"
        name="logo"
        placeholder="Logo URL"
        onChange={(e) => handleImageUpload(e)}
        required
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
