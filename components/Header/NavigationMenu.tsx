'use client'

import Link from 'next/link'

const NavigationMenu = () => (
  <nav aria-label="Global">
    <ul className="hidden md:flex items-center gap-[50px] text-[18px] font-sans">
      <li><Link className="text-[#2B3631] transition hover:text-gray-500/75" href="/">Home</Link></li>
      <li><Link className="text-[#2B3631] transition hover:text-gray-500/75" href="/maps">Maps</Link></li>
      <li><Link className="text-[#2B3631] transition hover:text-gray-500/75" href="/contact">Contact</Link></li>
      <li><Link className="text-[#2B3631] transition hover:text-gray-500/75" href="/about">About</Link></li>
    </ul>
  </nav>
)

export default NavigationMenu
