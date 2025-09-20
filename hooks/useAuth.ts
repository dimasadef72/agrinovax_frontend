"use client";

import { useState, useEffect } from "react";
import { apiService } from "@/lib/api";

interface User {
  userId: string;
  email: string;
  role: string;
  fullName: string;
  createdAt: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const logout = async () => {
    try {
      // Clear session cookie by calling logout endpoint
      await apiService.post("/auth/signout", {});
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear localStorage and redirect regardless of API call result
      localStorage.removeItem("user");
      setUser(null);
      window.location.href = "/";
    }
  };

  return {
    user,
    isLoggedIn: !!user,
    isLoading,
    logout,
  };
};
