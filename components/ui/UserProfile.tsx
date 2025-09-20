"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

interface UserProfileProps {
  fullName: string;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ fullName, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleAccountClick = () => {
    setIsDropdownOpen(false);
    router.push('/account');
  };

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close dropdown when pathname changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span className="text-sm text-gray-700 hidden md:block">Halo, {fullName}</span>
        {/* User Icon */}
        <div className="w-8 h-8 bg-[#567666] rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
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
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            <button
              onClick={handleAccountClick}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Account
            </button>
            <button
              onClick={() => {
                onLogout();
                setIsDropdownOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
