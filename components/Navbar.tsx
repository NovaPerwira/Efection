import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Sesuaikan jika pakai Vite/CRA gunakan 'react-router-dom'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';

// --- Icons Component (Inline untuk kemudahan) ---
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
  const [isAnnouncementOpen, setAnnouncementOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // --- Logic Cursor Smooth (Spring Physics) ---
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
      // Logic: Jika scroll > 50px, ubah state navbar & tutup announcement otomatis
      if (window.scrollY > 50) {
        setIsScrolled(true);
        // Opsional: Tutup announcement otomatis saat scroll agar layar bersih
        // setAnnouncementOpen(false); 
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);

  // Varian animasi Framer Motion
  const announcementVariants = {
    hidden: { height: 0, opacity: 0, marginTop: 0, overflow: 'hidden' },
    visible: { height: 'auto', opacity: 1, marginTop: '0px' },
    exit: { height: 0, opacity: 0, marginTop: 0, overflow: 'hidden' }
  };

  const navVariants = {
    top: { 
      width: '100%', 
      maxWidth: '56rem', // max-w-4xl
      y: 0 
    },
    scrolled: { 
      width: '100%', 
      maxWidth: '64rem', // Sedikit lebih lebar saat scroll (opsional) atau tetap
      y: isAnnouncementOpen ? 0 : -10 // Sedikit adjustment posisi
    }
  };

  return (
    <>
      {/* --- Smooth Custom Cursor --- */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 80 : 50, // Membesar saat hover elemen interaktif
          height: isHovering ? 80 : 50,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
          opacity: 1, // Bisa dikontrol visibility-nya
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-300">
        
        {/* --- Announcement Bar with AnimatePresence --- */}
        <AnimatePresence>
          {isAnnouncementOpen && (
            <motion.div
              variants={announcementVariants}
              initial="visible"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Bezier curve smooth
              className="relative w-full flex justify-center"
            >
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Main Navbar --- */}
        <motion.nav 
          variants={navVariants}
          animate={isScrolled ? "scrolled" : "top"}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`
            relative flex items-center justify-between mx-auto 
            backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/5
            h-16 px-6 mt-4 transition-all duration-300
            ${isScrolled ? 'rounded-2xl ' : 'rounded-full'}
          `}
          style={{
            backgroundImage: !isScrolled ? "url('/images/Hero/Header.png')" : "opacity-50", // Hilangkan BG image saat scroll agar lebih bersih, atau biarkan
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Fallback color jika image tidak load / saat scroll
            // backgroundColor: isScrolled ? "url('/images/Hero/Header.png')" : "opacity-50" 
          }}
        >
          {/* Logo Text Left */}
          <div className="relative z-10 flex-shrink-0">
             <Link href="/" className="text-2xl font-bold text-black tracking-tight"
               onMouseEnter={() => setIsHovering(true)}
               onMouseLeave={() => setIsHovering(false)}
             >
                Efection
             </Link>
          </div>

          {/* Desktop Menu Container */}
          <div className="hidden md:flex items-center flex-1 justify-center px-8">
             {/* Left Links */}
             <div className="flex items-center space-x-1 mr-4">
                {['Hero', 'About'].map((item) => (
                    <a key={item} href="#" 
                       className="text-black hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                       onMouseEnter={() => setIsHovering(true)}
                       onMouseLeave={() => setIsHovering(false)}
                    >
                        {item}
                    </a>
                ))}
             </div>

             {/* Center Logo Icon */}
             <div className="flex-shrink-0 mx-2 transform hover:scale-105 transition-transform duration-300">
                <img src="/images/Hero/nav-logo.png" alt="Logo" className="h-8 w-auto object-contain drop-shadow-sm" />
             </div>

             {/* Right Links */}
             <div className="flex items-center space-x-1 ml-4">
                {['Competition'].map((item) => (
                    <a key={item} href="#" 
                       className="text-black hover:bg-black/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                       onMouseEnter={() => setIsHovering(true)}
                       onMouseLeave={() => setIsHovering(false)}
                    >
                        {item}
                    </a>
                ))}
             </div>
          </div>

          {/* Desktop CTA */}
          <div className="relative z-10 hidden md:block">
            <button 
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <Link href="/login">Join us</Link>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="relative z-10 flex md:hidden">
            <button 
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 rounded-full text-black hover:bg-black/5 transition-colors"
            >
                {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* --- Mobile Menu Overlay (AnimatePresence) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <>
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
                />
                
                {/* Drawer */}
                <motion.div 
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#111] shadow-2xl z-50 p-6 md:hidden border-l border-white/10"
                >
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Efection</h2>
                        <button 
                            onClick={() => setMobileMenuOpen(false)} 
                            className="p-2 -mr-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {['Hero', 'About', 'Competition', 'Join Us'].map((item, idx) => (
                             <motion.a 
                                key={item} 
                                href="#" 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (idx * 0.05) }}
                                className="block px-4 py-3 rounded-xl text-lg font-medium text-gray-300 hover:text-black hover:bg-white transition-all duration-200"
                            >
                                {item}
                             </motion.a>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-10"
                    >
                        <button className="w-full bg-white text-black px-4 py-3.5 rounded-xl text-base font-bold hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Join Us Now
                        </button>
                    </motion.div>
                </motion.div>
            </>
        )}
      </AnimatePresence>
    </>
  );
}