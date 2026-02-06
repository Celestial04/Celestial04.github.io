import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Celeste04.dev'",
  description:
    "Celeste's portfolio website: a developper from France. I code things, but it's not useful :c",
  openGraph: {
    title: "Celeste04.dev",
    description: "Celeste's portfolio website: a developper from France.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url(../public/bg.jpg)]`}
      >
        <header
          className="
        sticky top-0 z-50 h-[1rem] mx-[15rem] justify-center backdrop-blur-sm drop-shadow-2xl
        "
        >
          <a className="hover:bg-[#ffaadd]" href="https://katsuu04.dev">Main website</a>
        </header>
        {children}
      </body>
    </html>
  );
}
