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
              Ivan Neilsen adalah seorang influencer dan content creator yang
              menyediakan layanan promosi melalui platform digital seperti
              Instagram, TikTok, YouTube, dan live streaming. Dengan melakukan
              kerja sama, pihak brand/klien dianggap telah membaca, memahami,
              dan menyetujui seluruh ketentuan yang berlaku.
            </p>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Scope of Work
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">
                Jenis konten: (Post, Story, Reels, Live Streaming, dll)
              </p>
              <p className="mb-2">Platform: disesuaikan dengan kesepakatan</p>
              <p className="mb-2">
                Brief & konsep konten harus diberikan oleh klien sebelum
                produksi
              </p>
              <p className="mb-2">
                Ivan berhak menyesuaikan gaya penyampaian agar tetap sesuai
                dengan personal branding
              </p>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Payment Terms
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">
                Pembayaran dilakukan sesuai rate yang telah disepakati
              </p>
              <p className="mb-2">Sistem pembayaran:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full payment di awal, atau</li>
                <li>DP 50% + pelunasan sebelum posting</li>
              </ul>
              <p className="mb-2">
                Pembayaran yang sudah dilakukan tidak dapat dikembalikan
                (non-refundable)
              </p>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Timeline & Delivery
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">
                Waktu pengerjaan konten: 3–7 hari kerja (tergantung
                kompleksitas)
              </p>
              <p className="mb-2">Revisi maksimal: 2x revisi minor</p>
              <p className="mb-2">
                Keterlambatan dari pihak klien (brief, approval) akan
                mempengaruhi timeline
              </p>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Revisions Policy
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">Revisi hanya berlaku untuk:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kesalahan informasi</li>
                <li>Ketidaksesuaian dengan brief awal</li>
              </ul>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Content Restrictions
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">
                Ivan berhak menolak kerja sama yang mengandung:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Konten negatif / SARA / ilegal</li>
                <li>Produk yang merugikan (scam, judi, dll)</li>
                <li>Brand yang bertentangan dengan nilai personal</li>
              </ul>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Usage Rights
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Konten hanya boleh digunakan oleh klien untuk keperluan
                  promosi internal
                </li>
              </ul>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Cancellation Policy
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">Pembatalan oleh klien setelah pembayaran:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>DP hangus</li>
              </ul>
              <p className="mb-2">Jika konten sudah diproduksi:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Klien tetap wajib membayar penuh</li>
              </ul>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Performance Disclaimer
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">Ivan tidak menjamin:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Jumlah views / likes / engagement tertentu</li>
                <li>
                  Hasil campaign tergantung banyak faktor (algoritma, audience,
                  dll)
                </li>
              </ul>
            </div>

            <p
              className="text-[#a6adba] w-full text-justify text-xl mb-5 mt-5 md:mt-0 font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Confidentiality
            </p>

            <div
              className="text-[#a6adba] text-xl mb-5 mt-5 md:mt-0"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p className="mb-2">Kedua pihak wajib menjaga kerahasiaan:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Data kerja sama</li>
                <li>Informasi bisnis</li>
                <li>Detail campaign</li>
              </ul>
            </div>

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
              Dengan menyetujui kerja sama ini, kedua belah pihak dianggap telah
              sepakat tanpa paksaan.
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
