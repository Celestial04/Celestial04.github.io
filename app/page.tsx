import Image from "next/image";
import pfp from "@/app/img/pfp.gif";

export default async function Home() {
  return (
    <main className="min-h-screen w-full px-4">
      <div className="main flex flex-col m-3.5 rounded-md border-(foreground) lg:mx-auto w-fit sm:flex-row sm:gap-2 lg:relative">
        <Image
          src={pfp.src}
          alt="Celeste's Discord profile picture."
          width={150}
          height={150}
          className="rounded-md"
          unoptimized
        />
        <div>
          <div className="flex flex-col">
            <h1 className="text-5xl">Hi, I&apos;m Celeste! 👋</h1>
            <p className="text-3xl">I&apos;m a developer aged of 21yo who live in France.</p>
          </div>
          <div className="flex flex-row gap-4 w-full text-base font-medium lg:bottom-0 lg:absolute">
            <a
              className="flex h-12 w-full items-center justify-center gap-2
              rounded-full bg-background px-5 border-white text-foreground transition-colors
              hover:bg-background/45 sm:w-39.5"
              href="#Projects"
              draggable="false"
            >
              Projects
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full
              border border-border px-5 transition-colors hover:border-transparent
              color-foreground border-foreground hover:bg-background sm:w-39.5"
              href="#Stats"
              draggable="false"
            >
              Setup
            </a>
          </div>
        </div>
      </div>
      <div
      id="Projects"
      className="flex mt-98 backdrop-blur-xl"
      >
        <h2 className="text-2xl">
          Projects
        </h2>
      </div>
    </main>
  );
}
