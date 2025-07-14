"use client";

const events = [
  { title: "Registrasi dan Pembayaran (Batch 1)", date: "14 Juli – 10 Agustus 2025" },
  { title: "Registrasi dan Pembayaran (Batch 2)", date: "11 – 18 Agustus 2025" },
  { title: "Pengumpulan Abstrak", date: "15 Juli – 25 Agustus" },
  { title: "Pengumuman Semifinalis", date: "6 September 2025" },
  { title: "Pengumpulan Full Paper", date: "7 – 28 September 2025" },
  { title: "Pengumuman Finalis", date: "7 Oktober 2025" },
  { title: "Pembayaran Final", date: "7 – 9 Oktober 2025" },
  { title: "Pengumpulan Poster dan PPT", date: "12 Oktober 2025" },
  { title: "Voting Poster", date: "13 – 16 Oktober 2025" },
  { title: "Technical Meeting", date: "14 Oktober 2025" },
  { title: "Presentasi", date: "17 Oktober 2025" },
  { title: "Awarding", date: "18 Oktober 2025" },
];

export default function PaperTimeline() {
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
