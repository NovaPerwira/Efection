'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
// --- Helper Component (Defined before use) ---

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
}

const RevealText = ({ children, delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50px 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// --- Hero Section (Sesuai Request Anda) ---

const HeroSection = () => {
  const containerRef = useRef(null);
  
  // Menggunakan useScroll relative terhadap container ini
  // Container height dibuat lebih tinggi (200vh) untuk memberikan ruang scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Stiffness 1100 membuat respon scroll sangat cepat/snappy
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 1100, damping: 30, restDelta: 0.001 });

  // 1. Background Logic:
  // Scale: 1 -> 1.3 (Zoom In)
  // Y: Tetap 0 (Fixed position karena container sticky, tidak kita gerakkan dengan transform)
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
  
  // 2. Content (Text) Logic:
  // Y: 0 -> -1000 (Bergerak ke ATAS jauh lebih cepat)
  // Opacity: Fade out saat scroll mencapai 80%
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -1000]);
  const textOpacity = useTransform(smoothProgress, [0, 0.8], [2, 0]);

  // 3. Silhouette Logic:
  // Opacity: Menghilang saat 50% scroll
  // Scale: Sedikit membesar agar dramatis
  const silhouetteOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const silhouetteScale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);
  // Kita biarkan silhouette posisinya tetap atau sedikit naik mengikuti flow
  const silhouetteY = useTransform(smoothProgress, [0, 0.5], [0, -100]); 

  // 4. Overlay Gelap: Transisi ke section berikutnya
  const overlayOpacity = useTransform(smoothProgress, [0.6, 1], [0.3, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full bg-black">
      
      {/* Sticky Container: Memastikan elemen tetap di viewport selama scroll di parent */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Layer Background (Zoom Only, Position Fixed visually) */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1768310481123-9c8e4e6fc61a?q=80&w=1170&auto=format&fit=crop" 
            alt="Candi Borobudur Landscape" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay Tetap */}
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80" />
          {/* Dynamic Overlay untuk transisi */}
          <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black" />
        </motion.div>

        {/* Layer Text Content (Moves UP) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 pb-20 md:pb-0"
        >
          <RevealText>
            <span className="block text-orange-500 font-bold tracking-[0.4em] text-sm md:text-base mb-6 uppercase">
              The Soul of Indonesia
            </span>
          </RevealText>
          
          <RevealText delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-white mb-6 leading-[0.9]">
              Effection<br/><span className="italic font-light text-white/90">IV</span>
            </h1>
          </RevealText>

          <RevealText delay={0.4}>
            <p className="max-w-md md:max-w-xl mx-auto text-white/80 text-sm md:text-lg font-light leading-relaxed mb-8">
              Jelajahi keindahan budaya yang tak lekang oleh waktu, di mana tradisi bertemu dengan keagungan alam.
            </p>
          </RevealText>

          <RevealText delay={0.6}>
             <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 opacity-60"
             >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <ChevronDown />
             </motion.div>
          </RevealText>
        </motion.div>

        {/* Layer Silhouette (Fades Out) */}
        <motion.div 
          style={{ opacity: silhouetteOpacity, scale: silhouetteScale, y: silhouetteY }}
          className="absolute bottom-0 left-0 right-0 h-[40vh] md:h-[60vh] z-30 pointer-events-none flex items-end justify-center"
        >
          <div className="relative w-full h-full max-w-7xl mx-auto">
             <Image 
               src="https://images.unsplash.com/photo-1629814408013-41e988c5201d?q=80&w=2070&auto=format&fit=crop"
               alt="Siluet Wayang"
               className="w-full h-full object-contain object-bottom md:object-bottom-right drop-shadow-2xl brightness-0 contrast-125"
               style={{
                 maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                 WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
               }}
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function HeroPage() {
  return (
    <main className="bg-[#0a0a0a] text-white font-sans selection:bg-orange-600 selection:text-white">
      <HeroSection />
      {/* Spacer di bawah ini hanya untuk membuktikan efek scroll selesai dengan mulus */}
      <div className="h-screen flex items-center justify-center bg-black text-white/20">
        <p>Next Section Content Here...</p>
      </div>
    </main>
  );
}