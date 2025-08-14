'use client'

import React, { useState } from 'react'
import LoginButton from './LoginButton'
import CreateAccountButton from './CreateAccountButton'
import LogoCard from '../ui/LogoCard'

const SignIn: React.FC = () => {
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
              Login
            </h1>

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
                className="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-sm"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>


            {/* Checkbox */}
            <fieldset className="mb-15">
            <div className="flex items-center justify-between">
              {/* Remember Me */}
              <label htmlFor="Option1" className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="size-5 rounded border-gray-300 shadow-sm"
                  id="Option1"
                />
                <span className="text-sm text-gray-500">Remember Me</span>
              </label>

              {/* Forgot Password */}
              <a href="/auth/signup" className="text-[#6b8a7a] text-sm font-semibold hover:underline">
                Forgot password?
              </a>
            </div>
          </fieldset>


            {/* Button */}
            <div className="w-full flex justify-center items-center mb-4">
              <LoginButton/>
            </div>

            {/* Button */}
            <div className="w-full flex justify-center items-center">
              <CreateAccountButton/>
            </div>

            <p className="text-sm text-gray-600 text-center mb-4 mt-4">
              Don't have an account?{' '}
              <a href="/auth/signup" className="text-[#6b8a7a] font-semibold hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SignIn