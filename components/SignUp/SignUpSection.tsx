"use client";

import React, { useState } from "react";
import LogoCard from "../ui/LogoCard";
import Toast from "../ui/Toast";
import { apiService } from "@/lib/api";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({ isVisible: false, message: "", type: "info" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Please accept our Terms and Conditions to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({ isVisible: true, message, type });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await apiService.post("/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      showToast(
        "Account created successfully! Redirecting to sign in...",
        "success"
      );
      setTimeout(() => {
        window.location.href = "/auth/signin";
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("Email already exists")) {
          setErrors({ email: "This email is already registered" });
        } else {
          setErrors({ general: error.message });
          showToast(error.message, "error");
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      <section className="flex items-center justify-center py-8 md:py-16 px-4 md:px-8 lg:px-16">
        <article className="w-full md:w-[1000px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row p-4 sm:p-6 gap-6 items-center md:items-start"
          >
            {/* Kiri: Gambar */}
            <LogoCard />

            {/* Kanan: Form */}
            <div className="w-full md:w-1/2">
              <h1 className="text-[35px] text-center font-extrabold text-gray-900 mb-2">
                Create Account
              </h1>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                  {errors.general}
                </div>
              )}

              {/* Username */}
              <label htmlFor="fullName" className="block">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Full Name"
                  className={`w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm ${
                    errors.fullName ? "border-red-400 mb-1" : "border-gray-300 mb-5"
                  }`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm mb-4 block">
                    {errors.fullName}
                  </span>
                )}
              </label>

              {/* Email */}
              <label htmlFor="email" className="block">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  className={`w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm ${
                    errors.email ? "border-red-400 mb-1" : "border-gray-300 mb-5"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mb-4 block">
                    {errors.email}
                  </span>
                )}
              </label>

              {/* Password */}
              <div className={`relative ${errors.password ? "mb-1" : "mb-5"}`}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  className={`w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm ${
                    errors.password ? "border-red-400" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm mb-4 block">
                  {errors.password}
                </span>
              )}

              {/* Confirm Password */}
              <div className={`relative ${errors.confirmPassword ? "mb-1" : "mb-5"}`}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className={`w-full rounded-xl border px-3 py-2 pr-10 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm ${
                    errors.confirmPassword
                      ? "border-red-400"
                      : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm mb-4 block">
                  {errors.confirmPassword}
                </span>
              )}

              {/* Terms */}
              <fieldset className="mb-15">
                <div className="flex items-start gap-3 mb-1">
                  <label
                    htmlFor="agreeToTerms"
                    className="inline-flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className={`size-5 rounded border shadow-sm ${errors.agreeToTerms ? 'border-red-400' : 'border-gray-300'}`}
                      id="agreeToTerms"
                    />
                    <span className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="text-[#6b8a7a] font-semibold hover:underline"
                      >
                        Terms and Conditions
                      </a>
                    </span>
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <span className="text-red-500 text-sm block mt-2">
                    {errors.agreeToTerms}
                  </span>
                )}
              </fieldset>

              {/* Button */}
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white text-center hover:bg-[#394c44] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Creating Account..." : "Register"}
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center mb-4 mt-4 ">
                Already have an account?{" "}
                <a
                  href="/auth/signin"
                  className="text-[#6b8a7a] font-semibold hover:underline"
                >
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default SignUp;
