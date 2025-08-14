'use client'

import Link from 'next/link';

const RegisterButton = () => (
  <Link
    href="/auth/signin"
    className="w-full rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white text-center hover:bg-[#394c44]"
  >
    Register
  </Link>
);

export default RegisterButton;
