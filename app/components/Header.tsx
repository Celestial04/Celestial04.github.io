"use client";
import icon from "@/app/favicon.ico"
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex py-4 top-0 z-50  backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#main"><Image
      src={icon.src}
      width={40}
      height={5}
      className="flex"
      alt="Website icon."
      />
      <p className=" flex content-center">Celeste04.moe</p>
      </a>
      </div>
    </header>
  );
}
