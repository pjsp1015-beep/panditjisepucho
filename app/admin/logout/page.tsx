"use client";

import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    localStorage.removeItem("admin-auth");
    window.location.href = "/admin/login";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      Logging out...
    </div>
  );
}