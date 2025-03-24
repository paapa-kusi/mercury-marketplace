"use client";

import React, { useState } from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { Trash2, Edit2, Plus } from "lucide-react";

// Mock data for demonstration
const mockListings = [
  {
    id: 1,
    title: "Calculus Textbook",
    description: "Used for MAC2311, in good condition",
    price: 45.00,
    category: "course-materials",
    status: "active",
    createdAt: "2024-03-24",
  },
];

export default function ManageListingsPage() {
  const [listings, setListings] = useState(mockListings);

  const handleDelete = (id) => {
    // Implement delete functionality
    setListings(listings.filter(listing => listing.id !== id));
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    console.log("Edit listing:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#1B263B]">Your Listings</h1>
              <p className="text-gray-600 mt-2">Manage and track your marketplace items</p>
            </div>
            <button
              onClick={() => window.location.href = "/list/create"}
              className="flex items-center gap-2 bg-[#1B263B] text-white px-6 py-2.5 rounded-lg hover:bg-[#1B263B]/90 transition-colors"
            >
              <Plus size={20} />
              New Listing
            </button>
          </div>

          {listings.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Plus size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg mb-4">You haven't created any listings yet</p>
              <button
                onClick={() => window.location.href = "/list/create"}
                className="text-[#1B263B] hover:text-[#1B263B]/80 font-medium"
              >
                Create your first listing
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold text-[#1B263B]">{listing.title}</h3>
                      <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {listing.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{listing.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-lg font-medium text-[#1B263B]">${listing.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500">
                        Listed on {new Date(listing.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 ml-6">
                    <button
                      onClick={() => handleEdit(listing.id)}
                      className="p-2 text-gray-600 hover:text-[#1B263B] hover:bg-white rounded-lg transition-colors"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-white rounded-lg transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
} 