"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Main information section component with conditional sign-up button
export default function HomeInfo() {
  const { user } = useUser();
  const router = useRouter();

  return (
    <div>
      {/* Problem statement section */}
      <section id="about1" className="py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Core Problem</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Many college students require expensive and niche school supplies
            for their various classes. These items are often cost-prohibitive,
            underutilized, and lack a dedicated marketplace.
          </p>
          {/* Key problem points */}
          <ul className="list-none text-lg text-gray-600 dark:text-gray-300 space-y-2">
            <li>
              Cost Prohibitive: Retail prices are often too high for students on
              a budget
            </li>
            <li>
              Underutilized: Supplies are used only a few times and gather dust
            </li>
            <li>
              Lack a Dedicated Marketplace: Existing platforms don't target
              unique university needs
            </li>
          </ul>
        </div>
      </section>

      {/* User stories section with student and professor examples */}
      <section className="py-20 dark:bg-gray-900 rounded-2xl">
        <h2 className="text-4xl font-bold text-center mb-12">User Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student story card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Student's Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Meet Alex, a student looking for affordable school supplies.
              Mercury Marketplace helps him find used items at fair prices,
              making course materials more accessible while saving money.
            </p>
          </div>
          {/* Professor story card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Professor's Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professor Taylor teaches engineering and wants to make course
              materials more affordable. Our platform allows him to sell
              course-specific materials at discounted prices to help students
              succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Solution features section with key benefits */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature cards */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">University-Centric</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Integration with university systems for course-specific listings
              and enrollment verification.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Safe & Trustworthy</h3>
            <p className="text-gray-600 dark:text-gray-300">
              .edu email verification, reviews, ratings, and secure payment
              processing.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cost Efficient</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Reuse supplies, reduce waste, and save money through
              student-to-student transactions.
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Easy Access</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Local pickup options and streamlined shipping for convenient
              exchanges.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action section with sign-up button */}
      <section className="py-20 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join us at Mercury Marketplace
          </p>
          {/* Conditional sign-up button based on user state */}
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => {
              if (user) {
                alert("User already signed up!");
              } else {
                router.push("/sign-up");
              }
            }}
          >
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}
