"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/universities`
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

      if (data.role && data.university) {
        router.push("/");
      }
    };
    checkUserProfile();
  }, [isLoaded, user, router]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/complete-profile`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clerkId: user?.id,
          ...formData,
        }),
      }
    );
    if (response.ok) {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Complete Your Profile</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Role:
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Student">Student</option>
            <option value="Professor">Professor</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          University:
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          >
            <option value="">Select your university</option>
            {universities.map((uni) => (
              <option key={uni._id} value={uni._id}>
                {uni._name}
              </option>
            ))}
          </select>
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {success && <p>✅ Profile updated! Redirecting...</p>}
    </div>
  );
}
