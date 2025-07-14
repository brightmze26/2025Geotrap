import { AnimatedTestimonials } from "../ui/testimonial-card";
import OurTeam1 from "@public/assets/images/pre1.jpg";
import OurTeam2 from "@public/assets/images/pic8.jpg";
import OurTeam3 from "@public/assets/images/pic9.jpg";
import OurTeam4 from "@public/assets/images/pic1.jpg";
import OurTeam5 from "@public/assets/images/pic2.jpg";
import OurTeam6 from "@public/assets/images/pic4.jpg";
import TextBlur from "../text/text-blur";
import { TextHoverEffect } from "../text/text-hover-effect";

export function OurTeams() {
  const testimonials = [
    {
      name: "GEOTRAP 2025 is a prestigious geoscience competition.",
      src: OurTeam1,
    },
    {
      name: "We challenge future leaders to solve national energy issues.",
      src: OurTeam2,
    },
    {
      name: "Reduce environmental impact through real-world solutions.",
      src: OurTeam3,
    },
    {
      name: "Promote innovation to support sustainable development.",
      src: OurTeam4,
    },
    {
      name: "Join as a delegate, let's collaborate, compete, and grow.",
      src: OurTeam5,
    },
    {
      name: "Lead the change. Shape the future. Be the champion.",
      src: OurTeam6,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-8 md:px-8">
      <TextBlur
        text="Our Mission"
        className="text-black text-3xl sm:text-4xl md:text-6xl font-bold text-center w-full pb-8 md:pb-12"
      />
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
