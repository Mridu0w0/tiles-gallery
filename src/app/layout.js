import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./footer/page";
import Navbar from "@/components/shared/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TileGallery - Premium Tiles for Every Space",
  description: "Discover our curated collection of premium tiles, perfect for elevating your home's aesthetic. Explore a variety of styles, from classic to contemporary, and find the ideal tiles for your next project. ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        
        
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
