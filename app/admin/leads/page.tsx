"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadsPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");

    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Checking Login...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-orange-500">
        Protected Leads Page
      </h1>

      <p className="mt-4">
        If you can see this page, you are logged in.
      </p>
    </div>
  );
}