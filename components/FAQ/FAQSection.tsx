import React from "react";
import Image from "next/image";
import FAQImage from "@/public/FAQ.jpg"; // pastikan path ini sesuai lokasi file FAQ.jpg

const FAQSection: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 my-12">
      {/* Judul FAQ dengan garis horizontal */}
      <div className="flex items-center mb-8">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-black" />
        
        <span className="shrink-0 px-4 text-gray-900 text-[20px] md:text-lg lg:text-[50px] font-semibold">
            Frequently Asked Questions
        </span>
        
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-black" />
        </div>

      {/* Grid Gambar + Accordion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Gambar */}
        <div className="w-full">
          <Image
            src="/FAQ.jpg"
            alt="FAQ Illustration"
            width={600}
            height={400}
            className="rounded-2xl  w-full h-auto object-cover shadow-xl"
        />
        </div>

        {/* Accordion FAQ Section */}
        <div className="space-y-4">
        {/* FAQ 1 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">Apa itu AgriNovaX?</h2>
            <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="px-4 pt-4 text-gray-900">
            AgriNovaX adalah platform pemetaan lahan pertanian yang menggabungkan drone, Agisoft, dan YOLOv5 untuk menghasilkan peta sawah otomatis.
            </p>
        </details>

        {/* FAQ 2 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">Apa tujuan utama dari sistem ini?</h2>
            <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="px-4 pt-4 text-gray-900">
           Sistem ini bertujuan untuk membantu pengukuran dan pemetaan lahan pertanian secara otomatis dan akurat, 
           guna menggantikan metode manual yang lambat dan rawan kesalahan, serta mendukung efisiensi pengelolaan lahan.
           </p>
        </details>

        {/* FAQ 3 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">Teknologi apa saja yang digunakan dalam sistem ini?</h2>
            <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="px-4 pt-4 text-gray-900">
            Sistem ini menggabungkan teknologi drone untuk pengambilan gambar udara, Agisoft untuk penyelarasan foto dan pembuatan peta ortomosaic, YOLOv5 untuk segmentasi sawah, 
            serta platform web interaktif untuk visualisasi dan pengelolaan data.</p>
        </details>

        {/* FAQ 4 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">Informasi apa saja yang tersedia bagi pengguna di platform web?</h2>
            <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="px-4 pt-4 text-gray-900">
            Pengguna dapat melihat peta interaktif dengan informasi tiap lahan, seperti nama pemilik, luas lahan, dan riwayat bantuan yang diterima, cukup dengan mengklik area yang ditampilkan.
            </p>
        </details>

        {/* FAQ 5 */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 cursor-pointer">
            <h2 className="text-lg font-medium">Bagaimana sistem menjaga keamanan data yang tersimpan?</h2>
            <svg className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </summary>
            <p className="px-4 pt-4 text-gray-900">
            Setiap data yang diubah oleh admin, terutama informasi bantuan, akan dienkripsi menggunakan algoritma AES sebelum disimpan ke database, 
            lalu didekripsi saat ditampilkan, sehingga menjaga kerahasiaan dan keamanan data.
            </p>
        </details>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
