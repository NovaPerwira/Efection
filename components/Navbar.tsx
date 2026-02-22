'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue
} from 'framer-motion';

/* ---------------- ICONS ---------------- */

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  /* ---------------- SMOOTH CURSOR ---------------- */

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  /* ---------------- NAV VARIANTS ---------------- */

  const navVariants = {
    top: {
      y: 0,
      scale: 1,
    },
    scrolled: {
      y: -8,
      scale: 0.98,
    }
  };

  /* ---------------- RENDER ---------------- */

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 80 : 50,
          height: isHovering ? 80 : 50,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">

        <motion.nav
          variants={navVariants}
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative flex items-center justify-between
            w-full max-w-6xl
            backdrop-blur-xl
            border border-white/10
            shadow-2xl shadow-black/10
            h-16 px-6 mt-4
            rounded-full transition-all duration-300"
          style={{
            backgroundImage: "url('/images/Hero/Header.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold text-black tracking-tight"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Efection
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-">

            <Link
              href="/"
              className="px-12 py-2 rounded-full text-sm font-semibold
                text-white bg-black/20 border border-white/20
                hover:bg-black/60 hover:border-[#FEDB73]/60
                hover:text-[#FEDB73] transition-all duration-300"
            >
              Home
            </Link>
          
          <div className="flex-shrink-0 mx-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer"> 
            <img src="/images/Hero/nav-logo.png" alt="Logo" className="h-9 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" /> 
          </div>
          
            <Link
              href="/#comp"
              className="px-5 py-2 rounded-full text-sm font-semibold
                text-white bg-black/20 border border-white/20
                hover:bg-black/60 hover:border-[#FEDB73]/60
                hover:text-[#FEDB73] transition-all duration-300"
            >
              Competition
            </Link>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link
              href="/#register"
              className="bg-[#FEDB73] text-black
                px-6 py-2.5 rounded-full text-sm font-semibold
                hover:scale-105
                hover:shadow-[0_0_20px_rgba(254,219,115,0.6)]
                transition-all duration-300"
            >
              Join Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-black"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

        </motion.nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm
                bg-[#2b2621]/95 shadow-2xl
                z-50 p-8 md:hidden border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-10">
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Grenze, serif' }}
                >
                  Efection
                </h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </button>
              </div>

              <div className="space-y-6 text-lg">

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#FEDB73] transition"
                >
                  Home
                </Link>

                <Link
                  href="/#comp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#FEDB73] transition"
                >
                  Competition
                </Link>

                <Link
                  href="/#register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center mt-8
                    bg-[#FEDB73] text-black py-3 rounded-full
                    font-semibold hover:scale-105 transition"
                >
                  Join Us
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}