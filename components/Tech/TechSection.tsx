import React from "react";

const TechSection: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 my-12">
      {/* Judul dengan garis horizontal */}
      <div className="flex items-center mb-8">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-black" />
        <span className="shrink-0 px-4 text-gray-900 text-[20px] md:text-lg lg:text-[50px] font-semibold">
          Technology We Use
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-black" />
      </div>

      {/* Baris Pertama: 4 Card */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Card 1 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
          <div className="p-4 sm:p-6">
            <img
              alt="Drone DJI Mavic 3 Multispectral"
              src="/dronedji.png"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Drone DJI Mavic 3 Multispectral
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
              Drone digunakan untuk mengambil citra udara lahan pertanian secara menyeluruh. Proses ini menggantikan metode pengukuran manual yang lambat dan tidak akurat.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
          <div className="p-4 sm:p-6">
            <img
              alt="Agisoft Metashape"
              src="/agisoft.png"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Agisoft Metashape
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
              Agisoft digunakan untuk menyusun citra udara hasil drone melalui proses photo alignment, sehingga menghasilkan peta ortomosaic dengan referensi geospasial yang akurat.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
        <div className="p-4 sm:p-6">
            <div className="flex justify-center mb-4">
            <img
                alt="Geotiff"
                src="/geotiff.png"
                className="h-40 w-auto object-contain"
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
            Geographic Tagged Image File Format (TIFF)
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
            File GeoTIFF menyimpan peta hasil olahan Agisoft beserta data spasialnya. Format ini memungkinkan pengukuran luas berdasarkan jumlah piksel dengan skala nyata.
            </p>
        </div>
        </article>

        {/* Card 4 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
        <div className="p-4 sm:p-6">
            <div className="flex justify-center mb-4">
            <img
                alt="yolov5seg"
                src="/yoloseg.png"
                className="h-40 w-auto object-contain"
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
            YOLOv5 Instance Segmentation
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
            YOLOv5 digunakan untuk mendeteksi dan melakukan segmentasi tiap area sawah dalam citra ortomosaic. Proses ini menghasilkan mask individual yang memisahkan setiap petak sawah.
            </p>
        </div>
        </article>

      </div>

      {/* Baris Kedua: 3 Card Tengah */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
       {/* Card 5 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
        <div className="p-4 sm:p-6">
            <div className="flex justify-center mb-4">
            <img
                alt="piksel"
                src="/piksel.png"
                className="h-40 w-auto object-contain"
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
            Pixel Area Calculation
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
            Luas lahan dihitung dari jumlah piksel tiap mask hasil YOLOv5 dengan acuan resolusi spasial GeoTIFF. Metode ini menghilangkan kebutuhan pengukuran manual.
            </p>
        </div>
        </article>

        {/* Card 6 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
          <div className="p-4 sm:p-6">
            <div className="flex justify-center mb-4">
            <img
              alt="leaflet"
              src="/leaflet.svg"
              className="h-40 w-auto object-contain"
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              Leaflet.js
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
              Leaflet digunakan untuk menampilkan mask sawah dalam bentuk peta interaktif di platform web. Pengguna dapat mengeklik tiap area untuk melihat data detail.
            </p>
          </div>
        </article>

        {/* Card 7 */}
        <article className="w-full max-w-[300px] h-auto overflow-hidden rounded-xl shadow-lg shadow-gray-500/40 transition hover:shadow-2xl hover:shadow-gray-700/60 bg-white">
          <div className="p-4 sm:p-6">
            <img
              alt="aes"
              src="/aes.png"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 text-center">
              AES Data Secure
            </h3>
            <p className="mt-2 text-sm text-gray-500 text-justify">
              Sistem enkripsi AES diterapkan pada data bantuan petani yang diubah oleh admin. Data akan didekripsi saat dibaca oleh pengguna lain, menjaga keamanan dan privasi informasi.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TechSection;
