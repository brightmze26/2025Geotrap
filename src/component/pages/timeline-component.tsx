import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import TextBlur from "../text/text-blur";
import RegisterImage from '@public/assets/images/pic1.jpg'
import CompeteImage from '@public/assets/images/pic2.jpg'
import FinalImage from '@public/assets/images/fieldtrip.jpg'
import CompetitionImage from '@public/assets/images/competition.jpg'
import Awarding from '@public/assets/images/awarding.jpg'
import Seminar from '@public/assets/images/pic6.jpg'
import GTS from '@public/assets/images/GTS.jpg'

export function TimelineComponent() {
    const data = [
        {
            title: "16 June 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Company Visit
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Visited PT Geo Dipa Unit Patuha in Ciwidey, participants are introduced to one of the geothermal industries in Indonesia and learn how geothermal energy is utilized.
                    </p>
                    <Image
                        src={RegisterImage}
                        alt="Comvis"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "25 June - 17 July 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Roadshow
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Increasing brand awareness and exposure to student associations and student chapters.
                    </p>
                    <Image
                        src={CompeteImage}
                        alt="Roadshow"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "25 June - 20 July 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Goes To School
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Enhancing brand awareness and introducing Geoscience to high school students.
                    </p>
                    <Image
                        src={GTS}
                        alt="GTS"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "14 July - 17 October 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Competition
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        A major national scale event that serves as a platform to foster ideas and innovations in Geoscience.
                    </p>
                    <Image
                        src={CompetitionImage}
                        alt="Competition"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "18 Oktober 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        National Seminar
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Learn directly from industry practitioners and engaging in meaningful discussions.
                    </p>
                    <Image
                        src={Seminar}
                        alt="Seminar"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "18 Oktober 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Awarding Night
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Visit and learn about geological conditions to support Geoscience understanding.
                    </p>
                    <Image
                        src={Awarding}
                        alt="Final"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "19 Oktober 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Fieldtrip
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        Visit and learn about geological conditions to support Geoscience understanding.
                    </p>
                    <Image
                        src={FinalImage}
                        alt="Final"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
    ];
    return (
        <div className="w-full bg-gradient-to-b from-black from-55% to-white">
            <TextBlur text="Competition Timeline" className="text-white md:text-7xl text-5xl flex w-full text-center py-24 font-bold px-4" />
            {/* <SparklesText title="Competition Timeline" className="h-fit" textClassName="md:!text-7xl !text-5xl px-4" /> */}
            <Timeline data={data} timelineClassName="!pt-0" className="!bg-transparent" />
        </div>
    );
}