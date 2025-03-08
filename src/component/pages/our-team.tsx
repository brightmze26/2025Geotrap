import { AnimatedTestimonials } from "../ui/testimonial-card";
import OurTeam1 from '@public/home/pedra-1.jpg'
import OurTeam2 from '@public/home/our-team-1.jpg';
import OurTeam3 from '@public/home/our-team-2.jpg';
import OurTeam4 from '@public/home/our-team-3.jpg'
import TextBlur from "../text/text-blur";

export function OurTeams() {
    const testimonials = [
        {
            name:
                "Geotrap 2025 challenges participants to test their geospatial skills in creative ways.",

            src: OurTeam1,
        },
        {
            name:
                "Work in teams to solve complex geospatial problems and showcase your creativity.",
            src: OurTeam2,
        },
        {
            name:
                "Open for students, professionals, and enthusiasts from any background.",
            src: OurTeam3,
        },
        {
            name:
                "Join Geotrap 2025 and show your geospatial innovation to the world!",
            src: OurTeam4,
        },
    ];
    return (
        <div className="h-full md:h-screen flex flex-col items-center justify-center">
            <TextBlur text="Our Mission" className="text-black md:text-7xl text-5xl flex w-full text-center md:pt-0 pt-24 font-bold px-4" />
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    );
}
