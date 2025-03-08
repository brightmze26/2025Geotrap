import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from 'next/image'
import ScrollFloat from "../text/text-scroll";

const sponsors = [
    "/assets/images/fpp.png",
    "/assets/images/hb.png",
    "/assets/images/padja.png",
    "/assets/images/pert.png",
    "/assets/images/skkmi.png",
    "/assets/images/hb.png",
    "/assets/images/padja.png",
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Mulai dari bawah (y: 20) dan transparan (opacity: 0)
    visible: { opacity: 1, y: 0 }, // Animasi ke posisi normal (y: 0) dan muncul (opacity: 1)
};
export default function MarqueeComponent() {
    return (
        <div className="flex flex-col md:gap-24 gap-12 items-center text-center">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                containerClassName="w-full flex items-center justify-center text-center"
                textClassName="text-black font-bold lg:text-7xl md:text-5xl text-3xl"
            >
                Trusted By
            </ScrollFloat>
            <Marquee
                speed={50}
                pauseOnHover={true}
                gradient={false} // Nonaktifkan gradient
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
    )
}

