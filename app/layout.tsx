import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playPenSans = Playpen_Sans({
  subsets: ["latin"]
})

const title = "celeste04.moe | portfolio website"

export const metadata: Metadata = {
  title: title,
  description:
    "Celeste's portfolio website: a developper from France. I code things, but it's not useful :c",
  openGraph: {
    title: title,
    type: "website",
    description: "Celeste's portfolio website: a developper from France.",
    siteName: 'Celeste\'s portfolio website',
    url: 'https://celeste04.moe',
    images: '../public/bg.jpg'
  },

  icons: "../public/avatar.gif"
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
