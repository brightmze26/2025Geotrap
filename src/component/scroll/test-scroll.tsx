import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";
import PaperImage from '@public/assets/images/pic2.jpg';

export const TextParallaxContentExample = () => {
    return (
        <>
            <div className="bg-white">
                <TextParallaxContent
                    imgUrl={PaperImage}
                    subheading="Geoscience Trip and Competition"
                    heading="2025"
                >
                    <PaperAndPosterContent />
                </TextParallaxContent>
            </div>
        </>
    );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({
    imgUrl,
    subheading,
    heading,
    children,
}: {
    imgUrl?: string | StaticImageData;
    subheading?: string;
    heading?: string;
    children: ReactNode;
}) => {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                {imgUrl && (
                    <StickyImage imgUrl={imgUrl} />
                )}
                {(heading && subheading) && (
                    <OverlayCopy heading={heading} subheading={subheading} />
                )}
            </div>
            {children}
        </div>
    );
};

const StickyImage = ({ imgUrl }: { imgUrl: string | StaticImageData }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const backgroundImage = typeof imgUrl === "string" ? imgUrl : imgUrl.src;

    return (
        <motion.div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden bg-black"
        >
            <motion.div
                className="absolute inset-0 bg-neutral-950/70"
                style={{
                    opacity,
                }}
            />
        </motion.div>
    );
};

const OverlayCopy = ({
    subheading,
    heading,
}: {
    subheading: string;
    heading: string;
}) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{
                y,
                opacity,
            }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-7xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-bold md:text-5xl">{heading}</p>
        </motion.div>
    );
};

const PaperAndPosterContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Long journey of learning and discovery.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                With a central theme that supports exploration and exploitation efforts powered by AI-driven geological systems and integrated with sustainable development, GEOTRAP 2025 is designed to keep up with the times,  prioritizing innovation, efficiency, and sustainability.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Discover more about GEOTRAP 2025 and be part of the future of geoscience!
            </p>
        </div>
    </div>
);

const EssayAndInfographicContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Visualizing Geophysical Data
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                This section focuses on the importance of visualizing geophysical data through essays and infographics. Participants will learn how to present complex data in a clear and engaging manner, making it easier for audiences to grasp essential information.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Infographics should combine text, images, and data visualizations to tell a compelling story about the research findings. Essays should provide a deeper analysis of the topic, discussing implications and future directions in geophysics.
            </p>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                Learn more
            </button>
        </div>
    </div>
);

const CaseStudyContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Real-World Applications of Geophysics
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                In this section, participants will analyze real-world case studies that demonstrate the application of geophysical methods in solving environmental and engineering problems. Each case study should highlight the challenges faced and the solutions implemented.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                Participants are encouraged to discuss the methodologies used, the results obtained, and the implications of their findings for future geophysical research and practice.
            </p>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                Learn more
            </button>
        </div>
    </div>
);

const SeismicInterpretationContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Analyzing Seismic Data
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                This section focuses on the interpretation of seismic data, a crucial aspect of geophysical studies. Participants will learn how to analyze seismic waves to infer subsurface structures and geological features.
            </p>
            <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                The analysis should include discussions on the techniques used for data acquisition, processing, and interpretation, as well as the significance of the findings in understanding geological processes.
            </p>
            <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                Learn more
            </button>
        </div>
    </div>
);