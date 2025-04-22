"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UniversityCard from "@/components/UniversityCard";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

// University connection page for users to select or change their university
export default function StorePage() {
  // Get current user from Clerk authentication
  const { user } = useUser();

  // State management for universities and user data
  const [universities, setUniversities] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [currentUniversity, setCurrentUniversity] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch universities and user data on component mount
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
      return universitiesRes;
    };

    const getUniversityData = async () => {
      if (!user) return;
      const fetchedUniversities = await getAllUniversities();
      console.log(user.id);

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
      for (const university of fetchedUniversities) {
        if (university._id === data.university) {
          setCurrentUniversity(university);
        }
      }
      setLoading(false);
    };

    getUniversityData();
  }, [user]);

  // Update user's university in the database
  const updateUniversity = async (universityId) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/update-university`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: userInfo.clerkId,
          university: universityId,
        }),
      }
    );
  };

  // Handle university change with loading state
  const changeUniversity = async (u) => {
    setLoading(true);
    setCurrentUniversity(u);
    await updateUniversity(u._id);
    setLoading(false);
  };

  return (
    <div>
      <div className="relative text-black py-12 w-full">
        <div className="px-4 text-center">
          {/* Current university display section */}
          <div className="w-full h-[200px] mb-12 flex flex-col items-start">
            {currentUniversity ? (
              <div>
                <h2 className="text-start my-2 text-lg">
                  Your current selected university is:
                </h2>
                {loading ? (
                  <p className="text-4xl">Loading...</p>
                ) : (
                  <div className="w-[500px]">
                    <UniversityCard university={currentUniversity} />
                  </div>
                )}
              </div>
            ) : (
              <p>
                You don't have a university selected! Choose your school from
                the options below.
              </p>
            )}
          </div>

          {/* Page header section */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">Connect to Your University</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Link your account to one of the universities below
          </p>

          {/* University selection grid */}
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 w-full min-h-[400px] mb-16">
            {universities.length > 0 ? (
              universities.map((u) => (
                <UniversityCard
                  key={u._id}
                  university={u}
                  selected={u === currentUniversity}
                  onClick={() => changeUniversity(u)}
                />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </main>

          {/* Add university link */}
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
