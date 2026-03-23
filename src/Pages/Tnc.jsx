import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../firebase"; // Mengimpor objek db dari file firebase.js
import { collection, getDocs } from "firebase/firestore"; // Mengimpor modul yang benar

const Tnc = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [certificateCount, setCertificateCount] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const projectCollection = collection(db, "projects"); // Mengacu pada koleksi "projects" di Firestore
    getDocs(projectCollection)
      .then((querySnapshot) => {
        setProjectCount(querySnapshot.size);
      })
      .catch((error) => {
        console.error("Error fetching projects: ", error);
      });

    const certificateCollection = collection(db, "certificates"); // Mengacu pada koleksi "certificates" di Firestore
    getDocs(certificateCollection)
      .then((querySnapshot) => {
        setCertificateCount(querySnapshot.size);
      })
      .catch((error) => {
        console.error("Error fetching certificates: ", error);
      });
  }, []);

  return (
    <>
      <div className="md:px-[10%] px-[6%]" id="Tnc">
        <div
          className="text-4xl text-[#ced4d7] font-bold md:pb-8 pb-4"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Term & Condition
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Kolom Kiri */}
          <div className="flex justify-center md:pr-10 pr-0 md:w-auto ">
            {/* <div data-aos="fade-up" data-aos-duration="1000">
              <img
                src="/Ivan.jpg"
                alt="Photo Ivan Nailsen"
                className="w-[35rem] h-auto rounded-xl"
                id="ImgAbout"
              />
            </div> */}
          </div>

          {/* Kolom Kanan */}
          <div className="md:w-full flex flex-col justify-between">
            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Ivan Neilsen adalah seorang influencer dan content creator yang menyediakan layanan promosi melalui platform digital seperti Instagram, TikTok, YouTube, dan live streaming.
                Dengan melakukan kerja sama, pihak brand/klien dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang berlaku.
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Scope of Work
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Jenis konten: (Post, Story, Reels, Live Streaming, dll)
                Platform: disesuaikan dengan kesepakatan
                Brief & konsep konten harus diberikan oleh klien sebelum produksi
                Ivan berhak menyesuaikan gaya penyampaian agar tetap sesuai dengan personal branding
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Payment Terms
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Pembayaran dilakukan sesuai rate yang telah disepakati
                Sistem pembayaran:
                Full payment di awal, atau
                DP 50% + pelunasan sebelum posting
                Pembayaran yang sudah dilakukan tidak dapat dikembalikan (non-refundable)
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Timeline & Delivery
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Waktu pengerjaan konten: 3–7 hari kerja (tergantung kompleksitas)
                Revisi maksimal: 2x revisi minor
                Keterlambatan dari pihak klien (brief, approval) akan mempengaruhi timeline
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Revisions Policy
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Revisi hanya berlaku untuk:
                Kesalahan informasi
                Ketidaksesuaian dengan brief awal
                Revisi besar / perubahan konsep = biaya tambahan
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Content Restrictions
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Ivan berhak menolak kerja sama yang mengandung:
                Konten negatif / SARA / ilegal
                Produk yang merugikan (scam, judi, dll)
                Brand yang bertentangan dengan nilai personal
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Usage Rights
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Konten hanya boleh digunakan oleh klien untuk keperluan promosi internal
                Penggunaan untuk iklan berbayar (ads) harus dengan izin dan biaya tambahan
                Hak cipta tetap dimiliki oleh Ivan Neilsen
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Cancellation Policy
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Pembatalan oleh klien setelah pembayaran:
                DP hangus
                Jika konten sudah diproduksi:
                Klien tetap wajib membayar penuh
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Performance Disclaimer
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Ivan tidak menjamin:
                Jumlah views / likes / engagement tertentu
                Hasil campaign tergantung banyak faktor (algoritma, audience, dll)
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Confidentiality
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Kedua pihak wajib menjaga kerahasiaan:
                Data kerja sama,
                Informasi bisnis,
                Detail campaign
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Agreement
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
                Dengan menyetujui kerja sama ini, kedua belah pihak dianggap telah sepakat tanpa paksaan.
            </p>

            {/* <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              With a mindset of continuous improvement, Ivan consistently enhances his production quality, communication skills, and audience engagement to deliver the best possible experience for viewers and potential brand partners.
            </p> */}

            {/* <div
              className="relative "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <ButtonCV />
            </div> */}

            {/* <div
              class="grid grid-cols-3 md:gap-4 gap-5 mt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
                id="InfoAbout"
              >
                <b className="text-3xl text-[#ced4d7]">4+</b>
                <div className="text-center text-[#a6adba]">
                  Years of Experience
                </div>
              </div>
              <div
                class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
                id="InfoAbout"
              >
                <b className="text-3xl text-[#ced4d7]">{projectCount}+</b>
                <b className="text-3xl text-[#ced4d7]">3+</b>
                <div className="text-center text-[#a6adba]">
                  Project Created
                </div>
              </div>
              <div
                class="w-auto h-[8em] flex flex-col justify-center items-center rounded-sm"
                id="InfoAbout"
              >
                <b className="text-3xl text-[#ced4d7]">{certificateCount}+</b>
                <b className="text-3xl text-[#ced4d7]">1+</b>
                <div className="text-center text-[#a6adba]">Certificate</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tnc;
