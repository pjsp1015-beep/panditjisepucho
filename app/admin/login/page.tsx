"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");

    if (auth === "true") {
      router.push("/admin/leads");
    }
  }, [router]);

  const handleLogin = () => {
    if (password === "PJSP@2026") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin/leads");
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white p-8 rounded-lg w-96 shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-black text-center">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Password"
          className="border w-full p-3 mb-4 text-black rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 w-full rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}