import { BackgroundLines } from "../ui/background-lines";

export function HomeBackgroundLines() {
    return (
        <BackgroundLines svgOptions={{duration: 5}} className="relative flex items-center justify-center w-full flex-col px-4 !h-screen z-10">
            <h1 className="bg-clip-text text-center text-white text-5xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                <span className="text-[#adbe73]">GEO</span><span className="text-[#f07137]">TRAP</span> 2025
            </h1>
            <i className="max-w-4xl mx-auto text-2xl md:text-4xl text-white font-semibold text-center z-20">
                "Geoscientist Contribution in Facing Challenges of AI Technology and Sustainable Development"

            </i>
        </BackgroundLines>
    );
}