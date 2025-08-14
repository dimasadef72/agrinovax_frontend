'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LogoCard: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
      <Link href="/" className="block text-teal-600">
        <span className="sr-only">Home</span>
        <Image
          src="/agrinova.png"
          alt="Logo"
          width={200}
          height={0}
          className="h-40 md:h-64 w-auto object-contain"
        />
      </Link>
    </div>
  )
}

export default LogoCard
