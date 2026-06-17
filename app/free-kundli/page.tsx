"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FreeKundliPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    birthTime: "",
    birthPlace: "",
    mobile: "",
    email: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "/api/kundli",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        router.push("/thank-you");
      } else {
        alert(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to submit form."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-16 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500">
          Free Kundli
        </h1>

        <p className="text-center text-gray-300 mt-4">
          Fill in your details to receive your personalized Kundli.
        </p>

        <div className="bg-white text-gray-800 rounded-2xl p-8 mt-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">
                Select Gender
              </option>
              <option>
                Male
              </option>
              <option>
                Female
              </option>
              <option>
                Other
              </option>
            </select>

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="birthPlace"
              placeholder="Birth Place"
              value={formData.birthPlace}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />

            <select
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">
                Select Concern
              </option>

              <option>
                Career
              </option>

              <option>
                Marriage
              </option>

              <option>
                Business
              </option>

              <option>
                Health
              </option>

              <option>
                Education
              </option>

              <option>
                Finance
              </option>

              <option>
                Family
              </option>

              <option>
                Other
              </option>

            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
            >
              {loading
                ? "Submitting..."
                : "Get My Free Kundli"}
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}