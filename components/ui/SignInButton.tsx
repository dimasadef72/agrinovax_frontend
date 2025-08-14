'use client'

import Link from 'next/link';

const SignInButton = () => (
  <Link
    href="/auth/signin"
    className="rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white hover:bg-[#394c44]"
  >
    Sign In
  </Link>
);

export default SignInButton;
