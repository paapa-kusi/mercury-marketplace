"use client";

import React from "react";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

// Array of frequently asked questions and their answers
const faqs = [
  {
    question: "How do I create a listing?",
    answer: "Click 'Create a Listing' in the navigation menu. Fill in the title, description, price, and category. Add images if needed."
  },
  {
    question: "What information should I include?",
    answer: "Include a clear title, brief description, accurate price, and select the most relevant category."
  },
  {
    question: "How do I edit my listing?",
    answer: "Go to 'Manage Your Listings', find your listing, and click 'Edit'. Update any details and save changes."
  },
  {
    question: "How do I delete my listing?",
    answer: "Go to 'Manage Your Listings', find your listing, and click 'Delete'. Confirm the deletion."
  },
  {
    question: "What categories are available?",
    answer: "Textbooks, Course Materials, Electronics, Dorm Supplies, and Miscellaneous."
  },
  {
    question: "How do I handle buyer messages?",
    answer: "Respond to messages through the platform. Be prompt and professional in your communication."
  },
  {
    question: "What happens after I sell an item?",
    answer: "Mark the listing as sold in 'Manage Your Listings' to remove it from the marketplace."
  }
];

// Main FAQs page component with question and answer display
export default function ListingFAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main content container */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#1B263B] mb-8">Listing FAQs</h1>
          
          {/* FAQ items container */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <h2 className="text-lg font-medium text-[#1B263B] mb-2">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}