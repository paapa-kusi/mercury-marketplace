"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UniversityCard from "@/components/UniversityCard";
import Link from "next/link";

// TODO: fix filtration
export default function StorePage() {
  const [universities, setUniversities] = useState([]);
  console.log("universities state:", universities);

  useEffect(() => {
    const getAllUniversities = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/university/get-all-universities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const universitiesRes = await res.json();
      setUniversities(universitiesRes);
    };

    getAllUniversities();
  }, []);

  return (
    <div>
      <div className="relative text-black py-16 w-full">
        <div className="px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">Connect to Your University</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Link your account to one of the universities below
          </p>

          <main className="grid grid-cols-3 gap-x-3 gap-y-4 w-full min-h-[400px] mb-16">
            {universities.length > 0 ? (
              universities.map((u) => (
                <UniversityCard key={u._id} university={u} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </main>
          <div></div>
          <span className="text-md opacity-90 max-w-2xl mx-auto mb-8">
            Don't see your university?{" "}
            <Link
              href="/university/add-university"
              className="text-blue-500 hover:opacity-75 transition-opacity"
            >
              Add it
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
