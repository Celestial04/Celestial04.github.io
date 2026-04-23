"use client";
const setup = {
  desktop: {
    OS: "Windows 11",
    Dualboot: false,
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
        <div className="Bubble bg-pink-600/25 mb-8">
          <div className="m-auto text-center">
            <h3 className="text-xl">Desktop</h3>
            <div className="flex-row flex gap-3">
              <div className="flex-col flex">
                <div>
                  <h3>OS</h3>
                  {setup.desktop.OS}
                  </div>
                <div>
                <h3>GPU</h3>
                {setup.desktop.GPU}
              </div>
              </div>
              <div>
                <h3>GPU</h3>
                {setup.desktop.GPU}
              </div>
              <div>
                <h3>CPU</h3>
                {setup.desktop.CPU}
              </div>
            </div>
            <hr className="my-0.5" />
            <h3 className="text-xl">Laptop</h3>
            <div className="flex-row flex gap-3">
              <div>
                <h3>OS</h3>
                {setup.laptop.OS}
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
