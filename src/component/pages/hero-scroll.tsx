"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../scroll/container-scroll";
import ScrollFloat from "../text/text-scroll";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden dark:bg-black bg-white">
            <ContainerScroll
                titleComponent={
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                        containerClassName="w-full flex items-center justify-center text-center lg:text-7xl md:text-5xl text-3xl"
                        textClassName="dark:!text-white"
                    >
                        Join, Complete, and Win!
                    </ScrollFloat>
                }
            >
                <Image
                    src={`https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format`}
                    alt="hero"
                    height={600}
                    width={600}
                    className="mx-auto rounded-2xl object-cover"
                    draggable={false}
                />
                
            </ContainerScroll>
            <ContainerScroll
            >
                <Image
                    src={`https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format`}
                    alt="hero"
                    height={600}
                    width={600}
                    className="mx-auto rounded-2xl object-cover"
                    draggable={false}
                />
                
            </ContainerScroll>
        </div>
    );
}
