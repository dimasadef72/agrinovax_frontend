"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const AccountSection: React.FC = () => {
  const { user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isLoggedIn || !user) {
    router.push("/auth/signin");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-gray-600">Redirecting to login...</div>
      </div>
    );
  }

  const formatDate = (dateString: string | undefined) => {
    console.log("formatDate input:", dateString);
    console.log("user object:", user);

    if (!dateString) {
      console.log("No dateString provided");
      return "Not available";
    }

    try {
      // Handle both formats: "2025-09-02 21:05:31.343" and "2025-09-02T21:41:40.640Z"
      let dateOnly;
      if (dateString.includes("T")) {
        // ISO format: 2025-09-02T21:41:40.640Z
        dateOnly = dateString.split("T")[0]; // "2025-09-02"
      } else {
        // SQL format: 2025-09-02 21:05:31.343
        dateOnly = dateString.split(" ")[0]; // "2025-09-02"
      }
      console.log("dateOnly:", dateOnly);

      const dateParts = dateOnly.split("-");
      console.log("dateParts:", dateParts);

      if (dateParts.length !== 3) {
        console.error("Invalid date format:", dateString);
        return "Invalid date format";
      }

      const [year, month, day] = dateParts.map(Number);
      console.log("parsed numbers:", { year, month, day });

      // Validasi angka
      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        console.error("Invalid date numbers:", { year, month, day });
        return "Invalid date";
      }

      // Buat date object untuk tanggal database (tanpa timezone conversion)
      const dbDate = new Date(year, month - 1, day); // month-1 karena JS 0-indexed
      console.log("dbDate:", dbDate);

      // Format tanggal sesuai database
      const formattedDate = dbDate.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      console.log("formattedDate:", formattedDate);

      // Hitung selisih dengan hari ini
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const diffTime = today.getTime() - dbDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      console.log("diffDays:", diffDays);

      // Return formatted string
      if (diffDays === 0) {
        return `${formattedDate} (hari ini)`;
      } else if (diffDays === 1) {
        return `${formattedDate} (1 hari yang lalu)`;
      } else if (diffDays > 1) {
        return `${formattedDate} (${diffDays} hari yang lalu)`;
      } else {
        return `${formattedDate} (hari ini)`;
      }
    } catch (error) {
      console.error("Date parsing error:", error);
      return "Invalid date";
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Account Information
          </h1>
          <p className="text-gray-600">
            Manage your account details and preferences
          </p>
        </div>

        {/* Account Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header with user icon */}
          <div className="bg-[#567666] text-white p-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{user.fullName}</h2>
                <p className="text-white/80 capitalize">{user.role}</p>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-900">{user.fullName}</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-900">{user.email}</p>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#567666]/10 text-[#567666] capitalize">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* Created At */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Member Since
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-gray-900">{formatDate(user.createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/")}
                  className="px-6 py-2 bg-[#567666] text-white rounded-lg hover:bg-[#394c44] transition-colors"
                >
                  Back to Home
                </button>
                <button
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  disabled
                >
                  Edit Profile (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSection;
