import Image from "next/image";
import pfp from '@/app/img/pfp.gif';

export default async function Home() {
  return (
      <main className="min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <div className="flex flex-col backdrop-blur-md p-3.5 w-xl rounded-md bg-background">
          <Image
            src={pfp.src}
            alt="Celeste's Discord profile picture."
            width={100}
            height={100}
            className="rounded-md m-auto"
            unoptimized
          />

          <div className="flex flex-col sm:text-center">
            <p className="text-2xl">
              Hi, I&apos;m celeste! 👋
              </p>
            <p>
              I&apos;m a developer aged of 21yo who live in France,
              I started learning HTML and CSS at 12yo, and my first use 
              of a Linux distribution was in 2016 with Ubuntu.
              </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
            >
              button
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid  px-5 transition-colors hover:border-transparent  dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
            >
              button
            </a>
          </div>
        </div>
      </main>
  );
}
