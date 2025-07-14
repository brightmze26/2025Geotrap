import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollFloat from "../text/text-scroll";

const sponsors = [
  "/assets/images/skkmigas.png",
  "/assets/images/ys.png",
  "/assets/images/petrogas.png",
  "/assets/images/size.png",
  "/assets/images/megatrans.jpg",
  "/assets/images/marimas.png",
  "/assets/images/kl.png",
  "/assets/images/skkmigas.png",
  "/assets/images/iog.png",
  "/assets/images/exxon.png",
  "/assets/images/cepu.png",
  "/assets/images/piblok.png",
  "/assets/images/beam.jpeg",
  "/assets/images/buynana.png",
  "/assets/images/crisbar.jpg",
  "/assets/images/ojkkk.png",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Mulai dari bawah (y: 20) dan transparan (opacity: 0)
  visible: { opacity: 1, y: 0 }, // Animasi ke posisi normal (y: 0) dan muncul (opacity: 1)
};
export default function MarqueeComponent() {
  return (
    <section className="relative z-20 bg-white overflow-hidden">
      <div className="flex flex-col md:gap-24 gap-12 items-center text-center py-12 md:py-24 mt-16 md:mt-24">
          <h2 className="text-black font-bold md:!text-7xl !text-5xl">
            Sponsored & Supported By
          </h2>
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={false}
          className="overflow-hidden bg-dotted-pattern bg-contain py-2"
        >
          {sponsors.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mx-8 transition-all duration-300 hover:scale-110 min-w-0"
            >
              <Image
                src={src}
                alt={`sponsor-${index}`}
                width={150}
                height={100}
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
