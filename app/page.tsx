import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="backdrop-blur-md p-[14px]">
          <Image
            src="/avatar.gif"
            alt="Celeste's Discord profil picture."
            width={100}
            height={100}
            className="rounded-md"
            unoptimized
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left ">
            <p className="max-w-md text-lg leading-6 text-zinc-600 dark:text-zinc-400">
              Looking for a starting point or more instructions? Head over to aaaaaaaaaa
              or the{" "}
              <a
                href="https://katsuu04.dev"
                className="font-medium text-zinc-950 dark:text-zinc-50"
              >
                meow
              </a>{" "}
              center.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              button
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              button
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
