'use client'

import Link from 'next/link'
import SignInButton from '../ui/SignInButton'
import SignUpButton from '../ui/SignUpButton'

type Props = {
  isLoggedIn: boolean
  onLogout: () => void
}

const MobileDropdownMenu = ({ isLoggedIn, onLogout }: Props) => (
  <div className="md:hidden mt-4 mb-4 flex flex-col items-center gap-4 text-[18px] text-[#2B3631] font-sans animate-slide-down">
    <Link href="/" className="hover:text-gray-500/75">Home</Link>
    <Link href="/maps" className="hover:text-gray-500/75">Maps</Link>
    <Link href="/contact" className="hover:text-gray-500/75">Contact</Link>
    <Link href="/about" className="hover:text-gray-500/75">About</Link>

    {!isLoggedIn ? (
      <>
        <SignUpButton />
        <SignInButton />
      </>
    ) : (
      <>
        <Link href="/profile">Profile</Link>
        <button
          onClick={onLogout}
          className="w-full max-w-[200px] rounded-[12px] bg-[#567666] px-4 py-2 text-white font-medium hover:bg-[#394c44]"
        >
          Logout
        </button>
      </>
    )}
  </div>
)

export default MobileDropdownMenu
