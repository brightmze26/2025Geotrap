import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import { SparklesText } from "../text/sparkles";
import TextBlur from "../text/text-blur";
import RegisterImage from '@public/home/register.jpg'
import CompeteImage from '@public/home/compete.jpg'
import FinalImage from '@public/home/final.jpg'

export function TimelineComponent() {
    const data = [
        {
            title: "10 July - 07 September 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Registration
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        The registration period for the Geophysical Competition opens on July 10, 2025. Participants are required to fill out the registration form and submit it by September 7, 2025. Ensure that all required documents are attached for a successful registration.
                    </p>
                    <Image
                        src={RegisterImage}
                        alt="Register"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "21 September 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Start Competition
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        The Geophysical Competition officially begins on September 21, 2025. Participants will engage in various challenges that test their knowledge and skills in geophysics. Teams will be required to solve real-world problems using geophysical methods and techniques.
                    </p>
                    <Image
                        src={CompeteImage}
                        alt="Competition"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-full lg:h-96 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                </div>
            ),
        },
        {
            title: "23 September 2025",
            content: (
                <div className="flex flex-col gap-2 md:gap-8 pb-8 md:pb-20">
                    <p className="text-neutral-200 text-2xl md:text-5xl font-medium h-full">
                        Final
                    </p>
                    <p className="text-neutral-300 text-lg md:text-xl">
                        The final round of the Geophysical Competition will take place on September 23, 2025. The top teams will present their solutions to a panel of judges, showcasing their innovative approaches to geophysical challenges. Winners will be announced at the end of the event, and prizes will be awarded.
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
        <div className="w-full bg-gradient-to-b from-black from-35% to-white">
            <TextBlur text="Competition Timeline" className="text-white md:text-7xl text-5xl flex w-full text-center py-24 font-bold px-4" />
            {/* <SparklesText title="Competition Timeline" className="h-fit" textClassName="md:!text-7xl !text-5xl px-4" /> */}
            <Timeline data={data} timelineClassName="!pt-0" className="!bg-transparent" />
        </div>
    );
}
