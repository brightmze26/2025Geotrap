"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./navbar-menu";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/home/logo.png"

export function Navbar({ className }: { className?: string }) {
    const [show, setShow] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 60) {
            setShow(true);
        } else {
            setShow(false)
        }

        setLastScrollY(currentScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const [active, setActive] = useState<string | null>(null);
    return (
        <div className="relative container mx-auto">
            <div
                className={cn("fixed inset-x-0 w-full mx-auto z-[999]", `${show ? `top-5 max-w-2xl px-4` : 'top-0 max-w-full'} transition-all duration-500 md:duration-300 ease-in-out`, className)}
            >
                <Menu setActive={setActive} className={`items-start ${show ? 'rounded-full md:py-6 py-4 border-black' : 'rounded-none'} transition-all duration-100 ease-in-out`}>
                    <Link href={'/'} className={`h-full`}>
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={400}
                            height={400}
                            className="md:w-24 w-16 max-w-none max-h-none flex-shrink-0 md:h-full h-6 object-contain"
                        />
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Competition"> 
                        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Paper and Poster"
                                href="https://algochurn.com"
                                src="https://assets.aceternity.com/demos/algochurn.webp"
                                description="Explore the Fundamentals"
                            />
                            <ProductItem
                                title="Essay and Infographic"
                                href="https://tailwindmasterkit.com"
                                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                                description="Showcase Your Research"
                            />
                            <ProductItem
                                title="Case Study"
                                href="https://gomoonbeam.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                                description="Analyze Real-World Cases"
                            />
                            <ProductItem
                                title="Seismic Interpretation"
                                href="https://userogue.com"
                                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                                description="Interpret Geological Data"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Events">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={'/events'} className="cursor-pointer hover:opacity-[0.9] text-black md:text-xl text-md font-medium">Register</Link>
                    {/* <MenuItem setActive={setActive} active={active} item="Event">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
                </Menu>
            </div>
        </div>
    );
}
