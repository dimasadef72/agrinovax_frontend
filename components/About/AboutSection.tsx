'use client'

import Image from 'next/image'
import Logo from '../ui/Logo'

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Teks di Kiri */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#151e19] ">
              About Us
            </h2>
            
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#567666] flex flex-wrap items-center justify-center md:justify-start gap-3">
                What is 
                <div className="w-[160px] md:w-[200px]">
                  <Logo />
                </div>
                ?
              </h3>
              
              <p className="text-[#394c44] leading-relaxed text-sm md:text-base">
                AgriNovax adalah platform pemetaan lahan pertanian yang mengintegrasikan drone, Agisoft, dan YOLOv5 untuk menghasilkan peta ortomosik dan segmentasi sawah secara otomatis. Sistem ini menghitung luas lahan dengan akurat dari citra udara, serta menampilkan data pemilik, ukuran lahan, dan riwayat bantuan melalui web. Informasi bantuan dienkripsi menggunakan AES untuk menjamin keamanan dan privasi. Dengan AgriNovax, pemetaan pertanian menjadi lebih efisien, akurat, dan aman. Sehingga membuka jalan menuju pertanian yang lebih modern dan berbasis data.
              </p>
            </div>
          </div>

          {/* Gambar di Kanan */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              <Image
                src="/user_about.png"
                alt="AgriNova Farmer"
                width={400}
                height={500}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto mx-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
