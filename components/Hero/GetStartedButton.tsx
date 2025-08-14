'use client'

import Link from 'next/link';

const GetStartedButton = () => (
  <Link
    href="/maps"
    className="rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white hover:bg-[#394c44]"
  >
    Get Started
  </Link>
);

export default GetStartedButton;
