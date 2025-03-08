'use client'
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contents = [
  {
    id: 1,
    text: "First Content",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  },
  {
    id: 2,
    text: "Second Content",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  },
  {
    id: 3,
    text: "Third Content",
    image: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  },
];

export default function ParallaxScroll() {
  const [activeImage, setActiveImage] = useState("");
  const [isImageVisible, setIsImageVisible] = useState(false);
  const { ref: parallaxRef, inView: isParallaxInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (isParallaxInView) {
      setIsImageVisible(true);
    }
  }, [isParallaxInView]);

  return (
    <div
      ref={parallaxRef}
      className="relative h-screen w-full py-20">
      {/* Fixed Image Section */}
      {isImageVisible && activeImage && (
        <motion.div className="fixed top-0 right-0 h-screen w-1/2 flex items-center justify-center">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt="Content Image"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Scrollable Text Sections */}
      <div className="w-full flex flex-col items-start justify-center">
        {contents.map((content) => {
          const { ref, inView } = useInView({ threshold: 0.6 });

          // Update image when section comes into view
          useEffect(() => {
            if (inView) {
              setActiveImage(content.image);
            }
          }, [inView]);

          return (
            <section key={content.id} ref={ref} className="h-screen flex items-center">
              <motion.div
                className="w-1/2 px-16"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-4xl font-bold">{content.text}</h2>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
