"use client";

const setup = {
  homePC: {
    OS: "Windows 11",
    GPU: "NVIDIA GeForce RTX 2060",
    CPU: "AMD Ryzen 5 5600X",
  },
  laptop: {
    OS: "Arch Linux",
    GPU: "Intel Raptor Lake-P [UHD Graphics]",
    CPU: "Intel Core i5-1334U",
  }


};

export default function Setup() {
  return (
    <div id="Setup" className="flex mt-195 scroll-m-20">
      <div className="border-2 rounded-2xl w-full border-foreground p-1">
        <h2 className="text-2xl">Setup</h2>
        <div className="py-1.25 m-auto text-center">
        <h3 className="text-xl">home&apos;s PC</h3>
        <div className="flex-col gap-3">
          <div>OS: {setup.homePC.OS}</div>
          <div>GPU: {setup.homePC.GPU}</div>
          <div>CPU: {setup.homePC.CPU}</div>
        </div>
        <h3 className="text-xl">laptop</h3>
        <div className="flex-col gap-3">
          <div>OS: {setup.laptop.OS}</div>
          <div>GPU: {setup.laptop.GPU}</div>
          <div>CPU: {setup.laptop.CPU}</div>
        </div>
        </div>
      </div>
    </div>
  );
}
