'use client'

import Link from 'next/link';

const SignUpButton = () => (
  <Link
    href="/auth/signup"
    className="rounded-[12px] border border-[#567666] px-[25px] py-2.5 text-[18px] font-medium text-[#567666] hover:bg-[#dfe8e2]"
  >
    Sign Up
  </Link>
);

export default SignUpButton;
