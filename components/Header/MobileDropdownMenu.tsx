'use client'

import Link from 'next/link'
import SignInButton from '../ui/SignInButton'
import SignUpButton from '../ui/SignUpButton'

type Props = {
  isLoggedIn: boolean
  onMenuClick: () => void
}

const MobileDropdownMenu = ({ isLoggedIn, onMenuClick }: Props) => (
  <div className="md:hidden mt-4 mb-4 flex flex-col items-center gap-4 text-[18px] text-[#2B3631] font-sans animate-slide-down">
    <Link href="/" className="hover:text-gray-500/75" onClick={onMenuClick}>Home</Link>
    <Link href="/maps" className="hover:text-gray-500/75" onClick={onMenuClick}>Maps</Link>
    <Link href="/contact" className="hover:text-gray-500/75" onClick={onMenuClick}>Contact</Link>
    <Link href="/about" className="hover:text-gray-500/75" onClick={onMenuClick}>About</Link>

    {!isLoggedIn && (
      <>
        <SignUpButton />
        <SignInButton />
      </>
    )}
  </div>
)

export default MobileDropdownMenu
