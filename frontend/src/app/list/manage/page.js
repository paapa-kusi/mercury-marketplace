"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Trash2, Edit2, Plus } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Mock data for demonstration purposes
const mockListings = [
  {
    id: 1,
    title: "Calculus Textbook",
    description: "Used for MAC2311, in good condition",
    price: 45.0,
    category: "course-materials",
    status: "active",
    createdAt: "2024-03-24",
  },
];

// Main listing management component with CRUD operations
export default function ManageListingsPage() {
  // State management for listings and loading state
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // Fetch user's listings on component mount
  useEffect(() => {
    const fetchUser = async () => {
      if (!isLoaded || !user) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/get-listings?clerkId=${user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      setListings(data);
      setLoading(false);
    };

    fetchUser();
  }, [isLoaded, user, listings]);

  // Handle listing deletion
  const handleDelete = async (id) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/listing/delete-listing?itemId=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <Header />
      {/* Main content container */}
      <main className="w-screen xl:max-w-7xl px-18 py-12">
        <div className="bg-white flex-1 rounded-xl shadow-sm p-8">
          {/* Page header with title and new listing button */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-[#1B263B]">
                Your Listings
              </h1>
              <p className="pr-3 sm:pr-2 text-gray-600 mt-2">
                Manage and track your marketplace items
              </p>
            </div>
            <button
              onClick={() => (window.location.href = "/list/create")}
              className="flex items-center gap-2 bg-[#1B263B] text-white px-6 py-2.5 rounded-lg hover:bg-[#1B263B]/90 transition-colors cursor-pointer"
            >
              <Plus size={20} />
              New Listing
            </button>
          </div>

          {/* Conditional rendering based on loading and listings state */}
          {loading ? (
            <h1>Loading your listings</h1>
          ) : listings.length === 0 ? (
            // Empty state with create listing prompt
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 hover:bg-[#1B263B]/20 transition ease-in duration-200 flex cursor-pointer items-center justify-center"
                onClick={() => (window.location.href = "/list/create")}
              >
                <Plus size={32} className="text-[#1B263B] " />
              </div>
              <p className="text-gray-500 text-lg mb-4">
                You haven't created any listings yet
              </p>
              <button
                onClick={() => (window.location.href = "/list/create")}
                className="text-[#1B263B] hover:text-[#1B263B]/80 font-medium"
              >
                Create your first listing
              </button>
            </div>
          ) : (
            // Listings grid with edit and delete actions
            <div className="grid gap-4">
              {listings.map((listing) => (
                <div
                  key={listing._id}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {/* Listing details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-[#1B263B]">
                        {listing.title}
                      </h3>
                      <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {listing.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{listing.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-lg font-medium text-[#1B263B]">
                        ${listing.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500">
                        Listed on
                        {` ${new Date(
                          Date.parse(listing.date)
                        ).toDateString()}`}
                      </span>
                    </div>
                  </div>
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 ml-6">
                    <button
                      className="p-2 text-gray-600 hover:text-[#1B263B] hover:bg-white rounded-lg transition-colors cursor-pointer"
                      onClick={() =>
                        router.push(`/list/manage/edit/${listing._id}`)
                      }
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                      onClick={() => handleDelete(listing._id)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
