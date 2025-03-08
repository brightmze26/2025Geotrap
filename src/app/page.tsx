'use client'
import { HeroScrollDemo } from "@/component/pages/hero-scroll";
import { HomeBackgroundLines } from "@/component/pages/home-background-lines";
import { ContentStickyScroll } from "@/component/pages/home-content-scroll";
import { OurTeams } from "@/component/pages/our-team";
import { TimelineDemo } from "@/component/pages/timeline-component";
import { PortfolioPage } from "@/component/scroll/slider-scroll";
import { TextParallaxContentExample } from "@/component/scroll/test-scroll";
import { SparklesText } from "@/component/text/sparkles";
import MarqueeComponent from "@/component/ui/marquee";

export default function Home() {
  return (
    <div className="w-full">
      {/* Home Background Scrollable Section */}
      <HomeBackgroundLines />
      {/* <ContentStickyScroll /> */}
      <OurTeams />
      <TimelineDemo />
      <MarqueeComponent />
      {/* <PortfolioPage />
      <HeroScrollDemo /> */}
      <TextParallaxContentExample />
    </div>
  );
}
