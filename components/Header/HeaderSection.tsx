'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // ✅ Tambahkan ini
import Logo from '../ui/Logo'
import NavigationMenu from './NavigationMenu'
import SignInButton from '../ui/SignInButton'
import SignUpButton from '../ui/SignUpButton'
import HamburgerButton from './HamburgerButton'
import MobileDropdownMenu from '@/components/Header/MobileDropdownMenu'

const Header: React.FC = () => {
  const pathname = usePathname() // ✅ Ambil path sekarang
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const isAuthPage = pathname === '/auth/signup' || pathname === '/auth/signin'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation (Desktop) */}
          <NavigationMenu />

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4 z-10">
            {!isAuthPage && (
              <>
                <SignUpButton />
                <SignInButton />
              </>
            )}
          </div>

          {/* Hamburger Button (Mobile) */}
          <HamburgerButton onClick={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileDropdownMenu isLoggedIn={false} onLogout={() => {}} />
        )}
      </div>
    </header>
  )
}

export default Header
