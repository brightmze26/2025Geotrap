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

/* ---------- SLIDE DATA ---------- */
const slides = [
  { img: "/assets/images/pre2.jpg" },
  { img: "/assets/images/pre3.jpg" },
  { img: "/assets/images/fieldtrip.jpg" },
]

export default function PostPage() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  /* sync indicator */
  React.useEffect(() => {
      if (!api) return
      const onSelect = () => setCurrent(api.selectedScrollSnap())
      setCurrent(api.selectedScrollSnap())
      api.on("select", onSelect)
      return () => {
        api.off("select", onSelect)
      }
    }, [api])

  return (
    <section className="font-geist w-full bg-neutral-100 px-4 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* LEFT ─ CAROUSEL */}
        <div className="md:col-span-6 relative">
          <Carousel setApi={setApi} className="w-full">
            {/* tombol panah */}
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2
              h-9 w-9 md:h-11 md:w-11 rounded-full z-10 bg-white/80 backdrop-blur
              shadow ring-1 ring-black/10 hover:bg-white focus:outline-none" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2
              h-9 w-9 md:h-11 md:w-11 rounded-full z-10 bg-white/80 backdrop-blur
              shadow ring-1 ring-black/10 hover:bg-white focus:outline-none" />

            {/* isi carousel */}
            <CarouselContent className="-ml-4">
              {slides.map((s, i) => (
                <CarouselItem key={i} className="pl-4">
                  <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
                    <Image
                      src={s.img}
                      alt={`Post-event ${i + 1}`}
                      fill
                      priority={i === 0}
                      className="object-cover object-center"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* RIGHT ─ STATIC DESCRIPTION */}
        <div className="md:col-span-6 space-y-6">
          <h2 className="text-3xl font-bold md:text-4xl text-neutral-900">
            Post‑Event
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
            The Post-Event marks the final and closing activity of the entire GEOTRAP 2025 series. It will be held on Sunday, October 19, 2025, one day after the Awarding Night and Gala Dinner. This event features a field trip designed to explore geological and earth science phenomena directly in the field. 
          </p>
          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed">
            Participants will gain a deeper understanding of surface processes and the real-world applications of geoscientific knowledge. This activity not only serves as an educational experience but also enhances participants’ ability to interpret and analyze geological features in their natural context.
          </p>
          <p className="text-sm text-neutral-500">
            {current + 1} / {slides.length}
          </p>
        </div>
      </div>
    </section>
  )
}
