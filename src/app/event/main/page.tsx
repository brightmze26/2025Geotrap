"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const slides = [
  {
    title: "Main-Event",
    img: "/assets/images/pic7.jpg",
    desc: "The Main Event of GEOTRAP 2025 will take place from July to October, featuring a series of major activities including competitions, a national seminar, an awarding night, and a gala dinner. The competition segment will be conducted in two stages: online and offline. The offline stage consists of final presentations, which will be held at Universitas Padjadjaran, Jatinangor Campus, serving as the culmination of the competition.",
  },
  {
    title: "Main-Event",
    img: "/assets/images/pic4.jpg",
    desc: "The final presentation is scheduled for Friday, October 17, 2025, followed by the Awarding Night on Saturday, October 18, 2025, where outstanding participants and winners will be honored. On the same day, the National Seminar will be held in the morning, featuring expert speakers from the industry who will share insights and knowledge in their respective geoscience fields. These events aim to provide a platform for academic excellence, professional networking, and celebration of innovation in geoscience.",
  },
]

export default function PrePage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

   React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const active = slides[current] ?? slides[0]

  return (
    <section className="font-geist w-full bg-neutral-100 px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* LEFT – CAROUSEL */}
        <div className="md:col-span-6 relative overflow-hidden">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {slides.map((s, i) => (
                <CarouselItem
                  key={i}
                  className="relative h-64 md:h-96 rounded-xl overflow-hidden"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width:768px) 100vw,
                           (max-width:1200px) 50vw,
                           33vw"
                    priority={i === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Panah di dalam gambar, tidak menabrak deskripsi */}
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-10
               h-9 w-9 md:h-11 md:w-11 rounded-full bg-white/80 backdrop-blur
               shadow ring-1 ring-black/10 hover:bg-white focus:outline-none" />

            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-10
               h-9 w-9 md:h-11 md:w-11 rounded-full bg-white/80 backdrop-blur
               shadow ring-1 ring-black/10 hover:bg-white focus:outline-none" />
          </Carousel>
        </div>

        {/* RIGHT – DESCRIPTION */}
        <div className="md:col-span-6 space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl text-neutral-900">
            {active.title}
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
            {active.desc}
          </p>
          <p className="text-sm text-neutral-500">
            {current + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  )
}
