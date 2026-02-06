import type { Metadata } from "next";
import { Geist, Geist_Mono, Playpen_Sans } from "next/font/google";
import "./globals.css";
import { styleText } from "util";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${playPenSans.className} ${geistMono.variable} antialiased bg-[url(../public/bg.jpg)]`}
      >
        <header className="sticky top-0 z-50 h-[2rem] mx-[15rem] justify-center backdrop-blur-sm drop-shadow-2xl bg-purple-500 text-center ">
            <a
              className="text-xl text- bg-[#ffaadd] hover:text-[#0a0a0a] hover: transition duration-150"
              href="https://katsuu04.dev"
            >
              Main website
            </a>
        </header>
        {children}
      </body>
    </html>
  );
}
