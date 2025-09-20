'use client'

import React, { useState } from 'react'
import CreateAccountButton from './CreateAccountButton'
import LogoCard from '../ui/LogoCard'
import Toast from '../ui/Toast'
import { apiService } from '@/lib/api'

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    isVisible: boolean
    message: string
    type: 'success' | 'error' | 'info'
  }>({ isVisible: false, message: '', type: 'info' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (error) setError('')
  }

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ isVisible: true, message, type })
  }

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }
    
    setIsSubmitting(true)
    try {
      const result = await apiService.post('/auth/signin', formData)
      
      if (result.user) {
        // Store user data and redirect
        localStorage.setItem('user', JSON.stringify(result.user))
        showToast('Login successful! Redirecting...', 'success')
        setTimeout(() => {
          window.location.href = '/'
        }, 1500)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        showToast(error.message, 'error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
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

            <form onSubmit={handleSubmit}>
              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl text-sm">
                  {error}
                </div>
              )}

              {/* Email */}
              <label htmlFor="email" className="block">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email Address"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm mb-5"
                  required
                />
              </label>

              {/* Password */}
              <div className="relative mb-5">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter Password"
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
                  required
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-[12px] bg-[#567666] px-[30px] py-2.5 text-[18px] font-medium text-white text-center hover:bg-[#394c44] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </div>

              {/* Button */}
              <div className="w-full flex justify-center items-center">
                <CreateAccountButton/>
              </div>
            </form>

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
    </>
  )
}

export default SignIn