import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <div className="backdrop-blur-md p-3.5 rounded-md bg-background">
          <Image
            src="/avatar.gif"
            alt="Celeste's Discord profil picture."
            width={100}
            height={100}
            className="rounded-md"
            unoptimized
          />
          
          <div className="flex flex-col sm:items-start sm:text-center">
            <p className="text-2xl">Hi! 👋</p>
            <p >
              aaaaaaaaaaaaaaaaaa
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
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid transition:scale active:scale-75  px-5 transition-colors hover:border-transparent  dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
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
    </div>
  );
}
