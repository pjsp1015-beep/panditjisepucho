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
e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

```
try {
  setLoading(true);

  const response = await fetch("/api/kundli", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await response.json();

  if (result.success) {
    router.push("/thank-you");
  } else {
    alert("Something went wrong. Please try again.");
  }
} catch (error) {
  console.error(error);
  alert("Unable to submit form.");
} finally {
  setLoading(false);
}
```

};

return ( <main className="min-h-screen bg-black text-white">

```
  <section className="max-w-6xl mx-auto px-6 py-16">

    <div className="text-center">

      <h1 className="text-5xl font-bold text-orange-500">
        Free Kundli Analysis
      </h1>

      <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
        Get personalized Vedic astrology insights based on your
        birth details. Our AI-assisted analysis helps identify
        opportunities, challenges and remedies.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10 mt-14">

      <div>

        <div className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-orange-400">
            What You Will Receive
          </h2>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li>✓ Basic Kundli Analysis</li>
            <li>✓ Career Guidance</li>
            <li>✓ Marriage Insights</li>
            <li>✓ Finance & Business Direction</li>
            <li>✓ Gemstone Suggestions</li>
            <li>✓ Personalized Remedies</li>
          </ul>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-orange-400">
            Why Choose Us
          </h2>

          <ul className="mt-4 space-y-3 text-gray-300">
            <li>✓ AI Assisted Astrology Analysis</li>
            <li>✓ Personalized Recommendations</li>
            <li>✓ Genuine Gemstone Guidance</li>
            <li>✓ Human Consultation Available</li>
            <li>✓ Dedicated WhatsApp Support</li>
          </ul>
        </div>

      </div>

      <div className="bg-white text-gray-800 rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Submit Your Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
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
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
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
            <option value="">Select Concern</option>
            <option>Career</option>
            <option>Marriage</option>
            <option>Business</option>
            <option>Health</option>
            <option>Education</option>
            <option>Finance</option>
            <option>Family</option>
            <option>Other</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold text-lg"
          >
            {loading
              ? "Submitting..."
              : "Get My Free Kundli"}
          </button>

        </form>

        <a
          href="https://wa.me/918595188575"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold"
        >
          Talk on WhatsApp
        </a>

      </div>

    </div>

  </section>

</main>

);
}
