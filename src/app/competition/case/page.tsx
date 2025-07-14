"use client"

import TextBlur from "@/component/text/text-blur"
import CaseTimeline from "@/component/ui/CaseTimeline"
import Image from "next/image"
import { useState } from "react"

export default function CasePage() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <div className="font-geist w-full bg-neutral-100">
      <TextBlur
        text="Case Study"
        className="text-black md:text-6xl text-5xl flex w-full text-center justify-center py-24 font-bold px-4"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-3 md:grid-cols-12">
        {/* POSTER SECTION */}
        <div className="col-span-1 md:col-span-4 w-full">
          <div
            className="relative w-full aspect-[3/4] cursor-pointer rounded-xl overflow-hidden shadow-lg"
            onClick={() => setPopupOpen(true)}
          >
            <Image
              src="/assets/images/postercase.png" // ganti sesuai nama file posternya
              alt="Case Study Poster"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Case Study Competition (CSC) merupakan salah satu ajang kompetisi yang diselenggarakan oleh Himpunan Mahasiswa Geofisika “PEDRA” dalam rangkaian GEOTRAP 2025. Kompetisi ini terbuka bagi mahasiswa/i aktif program D3/D4/S1 di perguruan tinggi Indonesia, khususnya di bidang kebumian yang tertarik dengan inovasi teknologi di sektor energi, khususnya dalam penerapan Advanced Digital Technology (ADT) untuk industri minyak dan gas. 
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Kompetisi ini dirancang untuk menguji pemahaman dan keterampilan peserta dalam menganalisis tantangan industri migas, seperti geomekanik formasi, kondisi reservoir, efisiensi operasional, optimalisasi, dan pengurangan emisi karbon. Selain itu, peserta akan ditantang untuk mengembangkan strategi implementasi berbasis AI yang dapat mendukung pencapaian Net Zero Emission 2050, termasuk melalui teknologi Carbon Capture, Utilization and Storage (CCUS). Tak hanya sekadar ajang kompetisi, CSC diharapkan dapat menjadi wadah bagi peserta untuk mengasah kemampuan berpikir kritis, analisis data, serta perancangan solusi inovatif yang aplikatif di dunia industri energi.
          </p>
          <div className="flex justify-end">
            <a
              className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit flex items-center justify-center"
              href="https://bit.ly/Guidebook-CS-GEOTRAP2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* TEXTBLUR TIMELINE */}
      <TextBlur
        text="Timeline"
        className="text-black md:text-6xl text-4xl flex w-full text-center justify-center py-24 font-bold px-4"
      />

      {/* TIMELINE */}
      <div className="px-4 md:px-16 pb-24 text-black">
        <CaseTimeline />
      </div>

      {/* POPUP POSTER */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[9999]  flex items-center justify-center bg-black/70"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative w-[90%] max-w-md rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/assets/images/postercase.png"
              alt="Poster popup"
              width={600}
              height={900}
              className="w-full h-auto object-cover"
            />
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
