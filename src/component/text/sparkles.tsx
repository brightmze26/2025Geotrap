"use client";
import React from "react";
import { SparklesCore } from "../ui/text-sparkles";
import { cn } from "@/lib/utils";

interface ISparklesText {
    title: string;
    className?: string;
    textClassName?: string;
    sparkles?: boolean;
}

export function SparklesText({
    title,
    className,
    textClassName,
    sparkles
}: ISparklesText) {
    return (
        <div className={cn("h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md", `${className}`)}>
            <h1 className={cn("md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20", `${textClassName}`)}>
                {title}
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                {sparkles && (
                    <SparklesCore
                        background="transparent"
                        minSize={0.2}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />
                )}

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
