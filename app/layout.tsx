'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Grenze, Plus_Jakarta_Sans } from 'next/font/google';
import { Bold } from "lucide-react";

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

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnnouncementOpen, setAnnouncementOpen] = useState(true);
    const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
    const [isBubbleVisible, setBubbleVisible] = useState(false);

    useEffect(() => {
        let animationFrameId: number | null = null;
        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                setBubblePosition({ x: e.clientX, y: e.clientY });
            });
        };  
        const handleMouseEnter = () => setBubbleVisible(true);
        const handleMouseLeave = () => setBubbleVisible(false);

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            document.body.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Menghitung padding atas untuk konten utama berdasarkan visibilitas announcement bar
    useEffect(() => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            if (isAnnouncementOpen) {
                mainContent.style.paddingTop = '10rem'; // Padding saat ada announcement
            } else {
                mainContent.style.paddingTop = '6.5rem'; // Padding saat tidak ada announcement
            }
        }
    }, [isAnnouncementOpen]);


    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    borderRadius: '9999px',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
                    pointerEvents: 'none',
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.3s ease',
                    opacity: isBubbleVisible ? 1 : 0,
                    zIndex: 9999,
                    width: '50px',
                    height: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    left: `${bubblePosition.x}px`,
                    top: `${bubblePosition.y}px`,
                }}
            />
            <header className="fixed top-0 left-0 right-0 z-50 ">
                {isAnnouncementOpen && (
                    <div className="relative flex items-center justify-center w-full rounded-b-full p-2 text-center text-sm mb border border-white/10 shadow-lg shadow-black/20 backdrop-blur-md"
                        style={{
                            backgroundImage: "url('/images/Hero/Header.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                        <span className="bg-white/10 text-black text-xs font-semibold px-2 py-1 rounded-full mr-3">Announcement</span>
                        <p className="text-black hidden sm:inline">Unveiling LayerEdge's fresh look with our expanding vision!</p>
                        <a href="#" className="text-black font-semibold ml-2 underline">Read more &rarr;</a>
                        <button onClick={() => setAnnouncementOpen(false)} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-black hover:text-gray-800">
                            <CloseIcon />
                        </button>
                    </div>
                )}
                <nav className="relative flex mt-4 items-center justify-between w-full max-w-4xl mx-auto backdrop-blur-lg border border-white/10 rounded-full h-16 px-6"
                style={{
                            backgroundImage: "url('/images/Hero/Header.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                    
                    <div className="relative z-10 flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-black">Efection</a>
                    </div>
                    <div className="relative z-10 flex items-center h-full px-6">
                      {/* LEFT MENU */}
    <div className="hidden md:flex items-center space-x-2 flex-1 justify-start">
      {['Hero', 'About'].map((item) => (
        <a
          key={item}
          href="#"
          className="
            text-black
            hover:bg-black/10
            px-3 py-2
            rounded-full
            text-sm
            font-medium
            transition-colors
          "
        >
          {item}
        </a>
      ))}
    </div>

    {/* CENTER LOGO */}
    <div className="flex-shrink-0">
      <img
        src="/images/Hero/nav-logo.png"
        alt="Efection Logo"
        className="h-9 w-auto object-contain"
      />
    </div>

    {/* RIGHT MENU + CTA */}
    <div className="hidden md:flex items-center space-x-3 flex-1 justify-end">
      {['Competition'].map((item) => (
        <a
          key={item}
          href="#"
          className="
            text-black
            hover:bg-black/10
            px-3 py-2
            rounded-full
            text-sm
            font-medium
            transition-colors
          "
        >
          {item}
        </a>
      ))}

    
 </div>
                            

                    </div>
                    <div className="relative z-10 hidden md:block">
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors cta-glow">
                            <Link href="/login">Join us</Link>
                        </button>
                    </div>
                    <div className="relative z-10 flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-full text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </button>
                    </div>
                </nav>
            </header>
            <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div onClick={() => setMobileMenuOpen(false)} className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full w-4/5 max-w-sm bg-gray-900 shadow-xl p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-white">Menu</h2>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2 -mr-2 text-gray-300 hover:text-white">
                            <CloseIcon />
                        </button>
                    </div>
                    <div className="space-y-1">
                        {['Hero', 'About', 'Competition', 'Join Us'].map((item) => (
                             <a key={item} href="#" className="text-gray-300 block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10 hover:text-white">{item}</a>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button className="w-full bg-white text-black px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors cta-glow">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

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
            className="fixed bottom-8 right-8 z-50 cursor-pointer group"
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
                    stroke="white"
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
    <html lang="en" className={`${grenze.variable} ${plusJakarta.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />

          
          <ScrollProgress />

        {children}
      </body>
    </html>
  );
}
