"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function CompleteProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState({
    role: "",
    university: "",
  });
  const [universities, setUniversities] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUniversities = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/get-all-universities`
      );
      const data = await res.json();
      setUniversities(data);
    };
    fetchUniversities();
  }, []);

  useEffect(() => {
    const checkUserProfile = async () => {
      if (!isLoaded || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/get-profile?clerkId=${user.id}`
      );
      const data = await response.json();

      if (data.university) {
        router.push("/");
      }
    };
    checkUserProfile();
  }, [isLoaded, user, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/complete-profile`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user?.id,
          ...formData,
        }),
      }
    );

    if (response.ok) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />
      <div className="flex-1 w-screen xl:max-w-3xl px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Professor">Professor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="university"
                className="block text-sm font-medium text-gray-700"
              >
                University
              </label>
              <select
                id="university"
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-[0_0px_10px_rgba(0,0,0,0.14)] focus:border-[#1B263B] focus:ring-[#1B263B]"
                required
              >
                <option value="">Select your university</option>
                {universities.map((uni) => (
                  <option key={uni._id} value={uni._id}>
                    {uni._name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1B263B] text-white px-6 py-2 rounded-md hover:bg-[#1B263B]/90 transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>

            {success && (
              <p className="text-green-600 text-sm mt-2">
                ✅ Profile updated! Redirecting...
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
