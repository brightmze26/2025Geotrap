"use client";

const events = [
  { title: "Pendaftaran dan Pembayaran (Early Bird)", date: "14 Juli 2025 – 7 Agustus 2025" },
  { title: "Pendaftaran dan Pembayaran (Normal)", date: "8 – 20 Agustus 2025" },
  { title: "Pemberian Data Exercise", date: "21 Agustus 2025" },
  { title: "Pengerjaan Exercise", date: "22 Agustus – 1 September 2025" },
  { title: "Pengumpulan Exercise", date: "30 Agustus – 1 September 2025" },
  { title: "Pengumuman Finalis", date: "13 September 2025" },
  { title: "Pembayaran Final", date: "13 – 15 September 2025" },
  { title: "Pemberian Dataset Seismik", date: "16 September 2025" },
  { title: "Pengerjaan Interpretasi dan Analisis", date: "17 September – 8 Oktober 2025" },
  { title: "Pengumpulan Esai Final dan PPT", date: "9 - 13 Oktober 2025" },
  { title: "Technical Meeting", date: "14 Oktober 2025" },
  { title: "Presentasi", date: "17 Oktober 2025" },
  { title: "Awarding", date: "18 Oktober 2025" },
];

export default function SeismicTimeline() {
  return (
    <div className="w-full py-20 px-4">

      <div className="relative mx-auto max-w-4xl">
        {/* Garis Tengah */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary" />

        {/* Items */}
        <div className="flex flex-col gap-12">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex justify-between items-center w-full">
                {/* Konten kiri */}
                <div className={`w-5/12 ${isLeft ? "text-right" : "invisible"}`}>
                  <p className="text-sm text-black">{event.date}</p>
                  <h3 className="text-xl font-semibold text-black mt-1 leading-snug">
                    {event.title}
                  </h3>
                </div>

                {/* Titik */}
                <div className="w-1/12 flex justify-center relative">
                  <div className="w-4 h-4 rounded-full bg-primary z-10 shadow-md" />
                </div>

                {/* Konten kanan */}
                <div className={`w-5/12 ${isLeft ? "invisible" : "text-left"}`}>
                  <p className="text-sm text-black">{event.date}</p>
                  <h3 className="text-xl font-semibold text-black mt-1 leading-snug">
                    {event.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
