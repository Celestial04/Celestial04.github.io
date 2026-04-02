"use client";
import icon from "@/app/favicon.ico";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex py-3 top-0 z-50  backdrop-blur-lg shadow-md">
      <div className="container mx-auto flex-row px-4">
        <a href="#main" className="flex-row flex gap-2 items-center">
          <Image
            src={icon.src}
            width={40}
            height={40}
            alt="Website icon"
          />
          <p className="text-3xl">Celeste04.moe</p>
        </a>
        <a href="#Setup" className="text-lg hover:underline">
          Setup
        </a>
        -
        <a href="#Projects" className="text-lg hover:underline">
          Projects
        </a>
      </div>
    </header>
  );
}
