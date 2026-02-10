import type { Metadata } from "next";
import { Playpen_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from "./components/Footer";
import Script from 'next/script'
import pfp from '@/app/img/pfp.gif';
import bg from '@/app/img/bg.jpg'

const playPenSans = Playpen_Sans({
  subsets: ["latin"]
})

const title = "celeste04.moe, it's my site!"
const url = "https://celeste04.moe"

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: title,
  description:
    "Celeste's portfolio website: a little developper from France who have 21yo. I code things, but it's not useful",
  openGraph: {
    title: title,
    type: "website",
    description: "Hi! I'm Celeste, a developper from France who have 21yo! Learn more about me here!",
    siteName: 'Celeste\'s portfolio website',
    url: url,
    images: [bg.src]
  },
  twitter: {
    card: 'summary',
    creator: '@celestial04_',
    site: '@celestial04_',
    images: [pfp.src],
  },

  
  icons: [pfp.src]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playPenSans.className} antialiased backdrop-blur-xl`}
      >
        <Header/>
        {children}
        <Script 
        defer src="https://analytics.celeste04.moe/script.js"
        data-website-id="b4c47dd4-9c88-4e8a-9034-6a01a251b2f6"/>
        <Footer/>
      </body>
    </html>
  );
}
