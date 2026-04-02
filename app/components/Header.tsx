"use client";
import icon from "@/app/favicon.ico";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex py-3 top-0 z-50 backdrop-blur-lg shadow-md max-h-24">
      <div 
      className="container mx-auto flex flex-row max-md:flex-col px-4 gap-2
      items-center justify-between"
      >
        <div>
        <a href="#main" className="flex-row flex">
          <Image
            src={icon.src}
            width={40}
            height={40}
            alt="Website icon"
          />
          <p className="text-3xl">Celeste04.moe</p>
        </a>
        </div>
        <div className="text-lg flex flex-row gap-4 justify-between">
        <a href="#Setup">
          Setup
        </a>
        <a href="#Projects">
          Projects
        </a>
        <a href="#Me">
          About Me
        </a>
      </div>
      </div>
    </header>
  );
}
