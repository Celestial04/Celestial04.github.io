import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";

const playPenSans = Playpen_Sans({
  subsets: ["latin"]
})

const title = "celeste04.moe | portfolio website"
const url = "https://celeste04.moe"

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description:
    "Celeste's portfolio website: a little developper from Frnce who have 21yo. I code things, but it's not useful, but I test things",
  openGraph: {
    title: title,
    type: "website",
    description: "Celeste's portfolio website: a developper from France.",
    siteName: 'Celeste\'s portfolio website',
    url: url,
    images: '../bg.jpg'
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
