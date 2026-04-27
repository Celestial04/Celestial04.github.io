"use client";
const setup = {
  desktop: {
    OS: "Windows 11",
    GPU: "NVIDIA GeForce RTX 2060",
    CPU: "AMD Ryzen 5 5700X",
    RAM: "32GB",
  },
  laptop: {
    OS: "Arch Linux",
    GPU: "Intel Raptor Lake-P [UHD Graphics]",
    CPU: "Intel Core i5-1334U",
    RAM: "32GB"
  },
};

export default function Setup() {
  return (
    <div id="Setup" className="flex my-[67vh] scroll-m-24">
      <div className="border-2 rounded-2xl w-full border-foreground p-1">
        <h2 className="text-2xl">Setup</h2>
        <div className="flex max-md:flex-col gap-3">
          <div className="Bubble bg-pink-600/25 mx-auto text-center">
            <h3 className="text-xl">Desktop</h3>
            <div className="flex flex-w gap-3">
              <div>
                <h3>OS</h3>
                {setup.desktop.OS}
              </div>
              <div>
                <h3>RAM</h3>
                {setup.desktop.RAM}
              </div>
              <div>
                <h3>GPU</h3>
                {setup.desktop.GPU}
              </div>
              <div>
                <div>
                  <h3>CPU</h3>
                  {setup.desktop.CPU}
                </div>
              </div>
            </div>
          </div>
          <div className="Bubble bg-orange-300/25 mx-auto text-center">
            <h3 className="text-xl">Laptop</h3>
            <div className="flex flex-w gap-3">
              <div>
                <h3>OS</h3>
                {setup.laptop.OS}
              </div>
              <div>
                <h3>RAM</h3>
                {setup.laptop.RAM}
              </div>
              <div>
                <h3>GPU</h3>
                {setup.laptop.GPU}
              </div>
              <div>
                <h3>CPU</h3>
                {setup.laptop.CPU}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
