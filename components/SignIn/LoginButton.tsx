'use client'

import Link from 'next/link';

const LoginButton = () => (
  <Link
    href="/"
    className="w-full rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white text-center hover:bg-[#394c44]"
  >
    Login
  </Link>
);

export default LoginButton;
