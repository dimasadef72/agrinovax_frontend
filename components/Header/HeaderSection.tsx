"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import NavigationMenu from "./NavigationMenu";
import SignInButton from "../ui/SignInButton";
import SignUpButton from "../ui/SignUpButton";
import UserProfile from "../ui/UserProfile";
import HamburgerButton from "./HamburgerButton";
import MobileDropdownMenu from "@/components/Header/MobileDropdownMenu";
import { useAuth } from "@/hooks/useAuth";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user, isLoggedIn, logout } = useAuth();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isAuthPage = pathname === "/auth/signup" || pathname === "/auth/signin";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle click outside mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={mobileMenuRef}>
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation (Desktop) */}
          <NavigationMenu />

          {/* Auth Buttons / User Profile (Desktop) */}
          <div className="hidden md:flex items-center gap-4 z-10">
            {!isAuthPage && (
              <>
                {isLoggedIn && user ? (
                  <UserProfile fullName={user.fullName} onLogout={logout} />
                ) : (
                  <>
                    <SignUpButton />
                    <SignInButton />
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile User Icon & Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            {isLoggedIn && user && !isAuthPage && (
              <div className="md:hidden">
                <UserProfile
                  fullName={user.fullName}
                  onLogout={logout}
                />
              </div>
            )}
            <HamburgerButton onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileDropdownMenu isLoggedIn={isLoggedIn} onMenuClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
