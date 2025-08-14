'use client'

import Image from 'next/image'
import GetStartedButton from './GetStartedButton' // pastikan path sesuai

const Hero = () => {
  return (
    <section className="border border-black">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0 py-2 border border-red-500">
        
        {/* Gambar di Kiri Full */}
        <div className="w-full md:w-4/7 relative border border-blue-500">
            <Image
                src="/atr-1.png"
                alt="Agriculture Field"
                width={1200}
                height={800}
                className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[750px] h-auto border border-purple-500"
            />

            <Image
                src="/usertest.png"
                alt="Tech Farmer"
                width={500}
                height={500}
                className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    md:left-auto md:right-0 md:translate-x-0
                    w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]
                    h-auto border border-pink-500
                "
                />
        </div>

        {/* Teks di Kanan */}
        {/* Teks di Kanan */}
        <div className="w-full md:w-3/7 px-4 md:px-0 text-center md:text-left border border-green-500">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mb-4 mt-2 text-gray-800 border border-yellow-500">
                Selamat Datang, TechFarmer
            </h1>
            <p className="text-[16px] sm:text-lg mb-6 text-black border border-orange-500 max-w-[500px] mx-auto md:mx-0">
                Mulai jelajahi peta dan temukan data sawah dengan mudah. Nikmati pengalaman interaktif untuk mengelola dan menganalisis lahan pertanian Anda!
            </p>
            <div className="flex justify-center md:justify-start">
                <GetStartedButton />
            </div>
        </div>



      </div>
    </section>
  )
}

export default Hero
