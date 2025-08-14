'use client'

import Link from 'next/link'
import Image from 'next/image'

const Logo = () => (
  <Link href="/" className="block text-teal-600">
    <span className="sr-only">Home</span>
    <Image
      src="/agrinova.png"
      alt="Logo"
      width={200}
      height={0}
    />
  </Link>
)

export default Logo
