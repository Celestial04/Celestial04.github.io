import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playPenSans = Playpen_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Celeste04.dev'",
  description:
    "Celeste's portfolio website: a developper from France. I code things, but it's not useful :c",
  openGraph: {
    title: "Celeste04.dev",
    description: "Celeste's portfolio website: a developper from France.",
  },
  icons: ".."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playPenSans.className} backdrop-blur-xl`}
      >
        <header className="sticky top-0 z-50 h-14 justify-center backdrop-blur-xl text-center">
            <a
              href="https://celeste04.moe"
              draggable="false"
            >
              Main website
            </a>
        </header>
        {children}
      </body>
    </html>
  );
}
