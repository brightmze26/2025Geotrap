"use client"

import TextBlur from "@/component/text/text-blur"
import EssayTimeline from "@/component/ui/EssayTimeline"
import Image from "next/image"
import { useState } from "react"

export default function CasePage() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <div className="font-geist w-full bg-neutral-100">
      <TextBlur
        text="Esai dan Infografis"
        className="text-black md:text-6xl text-5xl flex w-full text-center justify-center py-24 font-bold px-4"
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-3 md:grid-cols-12">
        {/* POSTER SECTION */}
        <div className="col-span-1 md:col-span-4 w-full">
          <div
  className="w-full cursor-pointer rounded-xl overflow-hidden shadow-lg"
  onClick={() => setPopupOpen(true)}
>
  <Image
    src="/assets/images/posteressay.png"
    alt="Essay Poster"
    width={400}
    height={533}
    className="w-full h-auto object-contain"
  />
</div>

        </div>

        {/* DESCRIPTION */}
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Lomba Esai dan Infografis merupakan salah satu ajang kompetisi yang diselenggarakan oleh Himpunan Mahasiswa Geofisika “PEDRA” dalam rangkaian acara GEOTRAP 2025. Kompetisi ini mengajak siswa/i SMA/sederajat untuk menuangkan ide-ide inovatif dan kreatif dalam menghadapi tantangan global melalui pemanfaatan teknologi kecerdasan buatan (AI). Di era Revolusi Industri 4.0 menuju Society 5.0, teknologi AI hadir sebagai kekuatan baru untuk membangun masa depan yang lebih berkelanjutan. 
          </p>
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            Kompetisi ini membuka ruang bagi siswa/i SMA/sederajat untuk mengeksplorasi peran AI dalam memantau bencana alam, mengatasi polusi udara, menjaga keseimbangan sosial di tengah kemajuan teknologi, hingga mempertahankan budaya lokal di era globalisasi. Tidak hanya sekadar kompetisi, ajang ini menjadi wadah untuk mengasah kemampuan berpikir kritis, analisis data, dan kreativitas siswa/i dalam menuangkan gagasan ilmiah ke dalam bentuk esai atau infografis yang inovatif.
          </p>
          <div className="flex justify-end">
            <a
              className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit flex items-center justify-center"
              href="https://bit.ly/Guidebook-Esai-GEOTRAP2025"
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
        <EssayTimeline />
      </div>

      {/* POPUP*/}
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
              src="/assets/images/posteressay.png"
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
