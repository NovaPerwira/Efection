'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Grenze, Plus_Jakarta_Sans } from 'next/font/google';
import { Bold } from "lucide-react";
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const grenze = Grenze({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-grenze',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: "400",
});



const ArrowUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5"></path>
    <path d="M5 12l7-7 7 7"></path>
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HamburgerIcon = () => (
  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const radius = 30; // Ukuran radius lingkaran
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="fixed bottom-8  right-8 z-50 cursor-pointer group"
      onClick={scrollToTop}
      title="Kembali ke atas"
    >
      <svg width="80" height="80" viewBox="0 0 80 80" className="transition-transform duration-300 group-hover:scale-110">
        {/* Lingkaran Latar Belakang */}
        <circle cx="40" cy="40" r={radius} stroke="rgba(255, 255, 255, 0.2)" strokeWidth="4" fill="transparent" />
        {/* Lingkaran Progress */}
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#FEDB73"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 40 40)"
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
        {/* Konten di dalam lingkaran: Ikon atau Teks Persentase */}
        {Math.round(scrollPercentage) >= 100 ? (
          <g transform="translate(28, 28)" className="text-white">
            <ArrowUpIcon />
          </g>
        ) : (
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white" fontSize="16px" fontWeight="bold">
            {`${Math.round(scrollPercentage)}%`}
          </text>
        )}
      </svg>
    </div>
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${grenze.variable} ${plusJakarta.variable}`}>
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />


        <ScrollProgress />

        {children}
      </body>
    </html>
  );
}
