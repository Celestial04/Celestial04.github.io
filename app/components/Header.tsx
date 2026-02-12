"use client";
import icon from "@/app/favicon.ico"
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky flex px-4 top-0 z-50 h-14 backdrop-blur-lg shadow-md">
      <Image
      src={icon.src}
      width={5}
      height={5}
      alt="Website icon."
      />
      <p className="content-center">Celeste.moe</p>
    </header>
  );
}
