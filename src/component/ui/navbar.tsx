"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./navbar-menu";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/home/logo.png";
// import { PaperPage } from "@/app/competition/paper/page";

export function Navbar({ className }: { className?: string }) {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 60) {
      setShow(true);
    } else {
      setShow(false);
    }

    setLastScrollY(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative container mx-auto">
      <div
        className={cn(
          "fixed inset-x-0 w-full mx-auto z-[999]",
          `${
            show ? `top-5 max-w-2xl px-4` : "top-0 max-w-full"
          } transition-all duration-500 md:duration-300 ease-in-out`,
          className
        )}
      >
        <Menu
          setActive={setActive}
          className={`items-start shadow-2xl ${
            show ? "md:rounded-full md:py-6 py-4" : "rounded-none"
          } transition-all duration-50 ease-in-out`}
        >
          <Link href={"/"} className={`h-full`}>
            <Image
              src={Logo}
              alt="Logo"
              width={400}
              height={400}
              className="md:w-24 w-16 max-w-none max-h-none flex-shrink-0 md:h-full h-6 object-contain"
            />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Competition">
            <div className="text-sm grid grid-cols-1 gap-3">
              <HoveredLink href="/competition/essay">Esai dan Infografis</HoveredLink>
              <HoveredLink href="/competition/paper">Paper and Poster</HoveredLink>
              <HoveredLink href="/competition/case">Case Study</HoveredLink>
              <HoveredLink href="/competition/seismic">Seismic Interpretation</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Events">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/event/pre">Pre-Event</HoveredLink>
              <HoveredLink href="/event/main">Main Event</HoveredLink>
              <HoveredLink href="/event/post">Post Event</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Register">
            <div className="flex flex-col space-y-2 text-sm">
              <HoveredLink
                href="https://docs.google.com/forms/d/1E0-GZs7ymgHDPRg1OD_Z9lfooWcut9AJUTM5YEUTJSA/viewform?edit_requested=true&pli=1"
                target="_blank"
              >
                <span className="block md:hidden leading-tight">
                  Esai dan
                  <br />
                  Infografis
                </span>
                {/* Teks satu baris untuk desktop */}
                <span className="hidden md:inline">Esai dan Infografis</span>
              </HoveredLink>
              <HoveredLink
                href="https://docs.google.com/forms/d/e/1FAIpQLScU98-RenAKEShF1lBfJQIfaZQ_O0tj9XWUqap95jH1QgzDdg/viewform"
                target="_blank"
              >
                <span className="block md:hidden leading-tight">
                  Paper and
                  <br />
                  Poster
                </span>
                {/* Teks satu baris untuk desktop */}
                <span className="hidden md:inline">Paper and Poster</span>
              </HoveredLink>
              <HoveredLink
                href="https://docs.google.com/forms/d/e/1FAIpQLSfEbGuGHSLV348jP7KHFOZfUkQINC3XMgeScxalWSATD24lEg/viewform"
                target="_blank"
              >
                Case Study
              </HoveredLink>
              <HoveredLink
                href="https://docs.google.com/forms/d/1iMNQACHof10ZjBO_pom13TyIMXDSisDYCUcAvS1OVDg/viewform?edit_requested=true#settings"
                target="_blank"
              >
                <span className="block md:hidden leading-tight">
                  Seismic
                  <br />
                  Interpretation
                </span>
                {/* Teks satu baris untuk desktop */}
                <span className="hidden md:inline">Seismic Interpretation</span>
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
