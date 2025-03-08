"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface TextBlurProps {
    text: string;
    className?: string;
}

export default function TextBlur({ text, className }: TextBlurProps) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView) setIsVisible(true);
    }, [inView]);

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            initial={{ filter: "blur(10px)", opacity: 0 }}
            animate={isVisible ? { filter: "blur(0px)", opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {text}
        </motion.span>
    );
}
