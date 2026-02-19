import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

// --- Icons Component ---
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // --- Smooth Cursor ---
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  const navVariants = {
    top: {
      width: '100%',
      maxWidth: '56rem',
      y: 0
    },
    scrolled: {
      width: '100%',
      maxWidth: '64rem',
      y: -10
    }
  };

  return (
    <>
      {/* --- Custom Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 80 : 50,
          height: isHovering ? 80 : 50,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300">

        {/* --- Main Navbar --- */}
        <motion.nav
          variants={navVariants}
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative flex items-center justify-between mx-auto backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/5 h-16 px-6 mt-4 transition-all duration-300 rounded-full"
          style={{
            backgroundImage: "url('/images/Hero/Header.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Logo */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-black tracking-tight"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Efection
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center flex-1 justify-center px-8">

            <div className="flex items-center space-x-3">
              {/* Hero */}
              <motion.a
                href="/"
                className="px-13 py-2 rounded-full text-sm font-semibold text-gray-100 bg-black/10 backdrop-blur-md border border-white/20 hover:bg-black/60 hover:border-[#FEDB73]/60 hover:text-[#FEDB73] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Home
              </motion.a>

            {/* Center Logo Icon */}
            <div className="flex-shrink-0 mx-2 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <img src="/images/Hero/nav-logo.png" alt="Logo" className="h-9 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
            </div>
              {/* Competition -> #comp */}
              <motion.a
                href="/#comp"
                className="px-5 py-2 rounded-full text-sm font-semibold text-gray-100 bg-black/20 backdrop-blur-md border border-white/20 hover:bg-black/60 hover:border-[#FEDB73]/60 hover:text-[#FEDB73] transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Competition
              </motion.a>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSevBO-Wm3H_U2zQRjZt63FFl6pGCAYKxUw63WOwnAwvl7WTcA/viewform?usp=dialog"
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-black hover:bg-black/5 transition-colors"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#3b352d]/85 shadow-2xl z-50 p-6 md:hidden border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl font-bold text-white">Efection</h2>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </button>
              </div>

              <div className="space-y-4">
                <a href="/" className="block text-white text-lg">Hero</a>
                <a href="/#comp" className="block text-white text-lg">Competition</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
