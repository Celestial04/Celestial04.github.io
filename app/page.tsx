import Image from "next/image";
import pfp from '@/app/img/pfp.gif';

export default async function Home() {
  return (
      <main className="min-h-screen w-full px-4">
        <div
        className="main flex flex-col p-3.5 rounded-md border-(foreground) lg:w-2/4 mr-auto sm:flex-row sm:gap-2"
        >
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
            <p className="text-2xl">
              Hi, I&apos;m celeste! 👋
              </p>
            <p>
              I&apos;m a developer aged of 21yo who live in France 
              </p>
          </div>
          <div className="flex flex-row gap-4 text-base font-medium sm:">
            <a
              className="flex h-12 w-full items-center justify-center gap-2
              rounded-full bg-background px-5 border-white text-foreground transition-colors
              hover:bg-background/45 sm:w-39.5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
            >
              button
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full
              border border-border px-5 transition-colors hover:border-transparent
              color-foreground border-foreground hover:bg-background sm:w-39.5"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              draggable="false"
            >
              button
            </a>
          </div>
          </div>
        </div>
      </main>
  );
}
