'use client'

import React from 'react'

const ContactSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <article className="w-full md:w-[1000px] h-auto md:h-[500px] rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-[#567666] flex flex-col md:flex-row overflow-hidden">
        
        {/* Card Kiri - Contact Information */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
            Contact Us
          </h2>
          
          {/* Address */}
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Address</h3>
              <p className="text-white text-sm leading-relaxed">
                Kampus PENS, Jl. Raya ITS, Keputih, Kec.<br />
                Sukolilo, Surabaya, Jawa Timur 60117
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Phone</h3>
              <p className="text-white text-sm">081574644513</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start mb-6">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Email</h3>
              <p className="text-white text-sm">grupmobilecs24@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Card Kanan - Send Message Form */}
        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
            Send Message
          </h3>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Nama Anda"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Contoh : contoh@gmail.com"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message"
                className="w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-[#303f38] focus:ring-2 focus:ring-[#303f38] sm:text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#567666] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#4a6559] transition-colors duration-200 shadow-sm"
            >
              Submit
            </button>
          </form>
        </div>

      </article>
    </section>
  )
}

export default ContactSection