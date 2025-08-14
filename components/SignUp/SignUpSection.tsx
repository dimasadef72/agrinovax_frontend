'use client'

import React, { useState } from 'react'
import RegisterButton from './RegisterButton'
import LogoCard from '../ui/LogoCard'


const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <section className="flex items-center justify-center py-8 md:py-16 px-4 md:px-8 lg:px-16">
      <article className="w-full md:w-[1000px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
        <div className="flex flex-col md:flex-row p-4 sm:p-6 gap-6 items-center md:items-start">
          {/* Kiri: Gambar */}
          <LogoCard/>

          {/* Kanan: Form */}
          <div className="w-full md:w-1/2">
            <h1 className="text-[35px] text-center font-extrabold text-gray-900 mb-2">
              Create Account
            </h1>


            {/* Username */}
            <label htmlFor="Username" className="block">
              <input
                type="text"
                id="Username"
                placeholder="Enter Full Name"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm mb-5"
              />
            </label>

            {/* Email */}
            <label htmlFor="Email" className="block">
              <input
                type="email"
                id="Email"
                placeholder="Enter Email Address"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm mb-5"
              />
            </label>

            {/* Password */}
            <div className="relative mb-5">
              <input
                type={showPassword ? 'text' : 'password'}
                id="Password"
                placeholder="Enter Password"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative mb-5">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="ConfirmPassword"
                placeholder="Confirm Password"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>


            {/* Terms */}
            <fieldset className="mb-15">
              <div className="flex items-start gap-3 mb-4">
                <label htmlFor="Terms" className="inline-flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="size-5 rounded border-gray-300 shadow-sm"
                    id="Terms"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a
                      href="/terms"
                      className="text-[#6b8a7a] font-semibold hover:underline"
                    >
                      Terms and Conditions
                    </a>
                  </span>
                </label>
              </div>
            </fieldset>

            {/* Button */}
            <div className="w-full flex justify-center items-center">
              <RegisterButton />
            </div>

            <p className="text-sm text-gray-600 text-center mb-4 mt-4 ">
              Already have an account?{' '}
              <a href="/auth/signin" className="text-[#6b8a7a] font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SignUp
