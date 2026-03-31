"use client";

export default function Setup() {
  return (
    <div id="Setup" className="flex mt-195 scroll-m-20">
      <div className="border-2 rounded-2xl w-full border-foreground p-1">
        <h2 className="text-2xl">Setup</h2>
        <div className="py-1.25 m-auto text-center">
        <h3 className="text-xl">home&apos;s PC</h3>
        <div className="flex-col gap-3">
          <div>OS</div>
          <div>GPU</div>
          <div>CPU</div>
        </div>
        </div>
      </div>
    </div>
  );
}
