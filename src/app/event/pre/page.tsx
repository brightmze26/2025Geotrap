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
    title: "Pre-Event",
    img: "/assets/images/pic1.jpg",
    desc: "The Pre-Event series serves as the initial step to introduce GEOTRAP 2025 to a broader audience and strengthen its presence among companies and student organizations. Taking place from April to June, the program consists of Goes to School, Roadshow, and Company Visit.",
  },
  {
    title: "Pre-Event",
    img: "/assets/images/GTS.jpg",
    desc: "These activities are designed to build awareness, foster collaboration, and generate early engagement with key stakeholders in both academic and industrial sectors. Through these three programs, GEOTRAP 2025 expands its network while promoting geoscience to younger audiences and academic communities. Goes to School aims to introduce the fundamentals of earth sciences to high school students.",
  },
  {
    title: "Pre-Event",
    img: "/assets/images/pic2.jpg",
    desc: "Roadshow targets university-level outreach, strengthening inter-campus ties and raising enthusiasm. Company Visit opens dialogue with industry players, positioning GEOTRAP 2025 as a bridge between future geoscientists and the professional world.",
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
