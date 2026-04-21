"use client";
const setup = {
  homePC: {
    OS: "Windows 11 (dual-boot with Arch Linux)",
    GPU: "NVIDIA GeForce RTX 2060",
    CPU: "AMD Ryzen 5 5700X",
  },
  laptop: {
    OS: "Arch Linux",
    GPU: "Intel Raptor Lake-P [UHD Graphics]",
    CPU: "Intel Core i5-1334U",
  },
};

export default function Setup() {
  return (
    <div id="Setup" className="flex my-[67vh] scroll-m-20">
      <div className="border-2 rounded-2xl w-full border-foreground p-1">
        <h2 className="text-2xl">Setup</h2>
        <div className="rounded-2xl bg-pink-600/25 p-4 mb-8 hover:scale-107 duration-150">
          <div className="py-1.25 m-auto text-center">
            <h3 className="text-xl">Desktop</h3>
            <div className="flex-col gap-3">
              <div>OS: {setup.homePC.OS}</div>
              <div>GPU: {setup.homePC.GPU}</div>
              <div>CPU: {setup.homePC.CPU}</div>
            </div>
            <hr className="my-0.5" />
            <h3 className="text-xl">Laptop</h3>
            <div className="flex-col gap-3">
              <div>OS: {setup.laptop.OS}</div>
              <div>GPU: {setup.laptop.GPU}</div>
              <div>CPU: {setup.laptop.CPU}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
