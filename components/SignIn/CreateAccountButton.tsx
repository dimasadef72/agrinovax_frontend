'use client'

import Link from 'next/link';

const CreateAccountButton = () => (
  <Link
    href="/auth/signup"
    className="w-full rounded-[12px] border border-[#567666] px-[20px] py-2.5 text-[18px] font-medium text-[#567666] text-center hover:bg-[#dfe8e2]"
  >
    Create an Account!
  </Link>
);

export default CreateAccountButton;
