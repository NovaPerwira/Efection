'use client';
// import HeroPage from "@/components/Hero";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import EfectionIVSection from "@/components/EfectionIVSection";
import WinnerSection from "@/components/WinnerSection";
import StickyZoomSection from "@/components/StickyZoom";
import AboutSection from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Competition from "@/components/Competition";
import Timeline from "@/components/Timeline";
const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isExiting, setIsExiting] = useState(false); // Controls the slide up

  const fullText = "EFECTION IV";

  // 1. Typewriter Effect Logic
  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Speed of typing

    return () => clearInterval(typeInterval);
  }, []);

  // 2. Progress Bar Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment logic
        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 3. Exit Logic (Slide Up)
  useEffect(() => {
    if (progress === 100) {
      // Wait a moment after 100% before sliding up
      setTimeout(() => {
        setIsExiting(true);
        // Trigger onComplete after the CSS transition finishes
        setTimeout(onComplete, 1000);
      }, 800);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      {/* Text Container with Typewriter */}
      <div className="mb-12 relative h-16 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-mono font-bold tracking-widest relative flex items-center">
          <span style={{ color: 'var(--color-primary)' }}>
            {displayedText}
          </span>
          {/* Cursor Blink - only show if not exiting */}
          {!isExiting && <span className="cursor-blink"></span>}
        </h1>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-96 h-1.5 rounded-full overflow-hidden bg-gray-800 relative">
        <div
          className="h-full transition-all duration-75 ease-out"
          style={{
            width: `${progress}%`,
            backgroundColor: 'var(--color-primary)',
            boxShadow: '0 0 20px var(--color-primary-glow)'
          }}
        />
      </div>

      {/* Percentage Text / Status */}
      <div className="mt-4 font-mono text-sm tracking-widest" style={{ color: 'var(--text-muted)' }}>
        <div className="flex justify-between w-64 md:w-96">
          <span>{progress < 100 ? "INITIALIZING..." : "SYSTEM READY"}</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute bottom-10 left-0 w-full px-10 flex justify-between opacity-30 text-xs font-mono">
        <div>EFECTION IV</div>
        <div>SECURE CONNECTION</div>
      </div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  // Define the content for the "Next Section" that will parallax up
  const NextSectionContent = (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#8B6C50]">
  {/* Background dengan Overlay agar teks lebih terbaca */}
  <div className="absolute inset-0 opacity-40">
    <img src="images/Hero/bg.png" alt="Background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#8B6C50]"></div>
  </div>

  {/* Konten Utama */}
  <div className="relative z-10 text-center px-4">
    {/* Badge/Konteks Atas */}
    <div className="mb-6 animate-fade-in-down">
      <p className="text-[#FEDB73] font-serif italic text-xl tracking-widest uppercase mb-2">
        The Journey Continues
      </p>
      <div className="h-[1px] w-24 bg-[#C09B6F] mx-auto"></div>
    </div>

    {/* Judul Utama dengan Efek Gradient Emas */}
    <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
      You Our Next<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C09B6F] via-[#FEDB73] to-[#FEDB73]"> Winner</span>
    </h2>

    {/* CTA: Statement "The Next Winner" */}
    <div className="max-w-2xl mx-auto">
      <p className="text-gray-300 text-lg md:text-2xl font-light tracking-wide mb-10 leading-relaxed">
        Destiny is calling. Prepare yourself, for the stage is set and 
        <span className="text-white font-semibold italic"> you should be the next winner.</span>
      </p>

      {/* Button Action */}
      <button className="px-8 py-4 bg-black text-white rounded-xl font-bold uppercase tracking-tighter hover:bg-[#d4b589] transition-all transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(192,155,111,0.4)]">
        Claim Your Throne
      </button>
    </div>
  </div>

  {/* Dekorasi Ornamen (Opsional) */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="w-[1px] h-12 bg-gradient-to-b from-[#C09B6F] to-transparent"></div>
  </div>
</div>
  );

  return (
    <>
      {loading ? (
        <SplashScreen onComplete={handleLoadingComplete} />
      ) : (
        <>
          {/* SECTION 1 */}
          <EfectionIVSection animate={true} />

          {/* SECTION 2 (ZOOM + TRANSITION) */}
          {/* We pass the 'Next Section' content as a prop to synchronized the animation */}
          <StickyZoomSection nextSection={NextSectionContent}>
            <WinnerSection />
          </StickyZoomSection>

          {/* SECTION 3 & Others */}
          {/* These render naturally AFTER the sticky section is done */}
          <div className="relative z-10 bg-black">
            {/* Ensure Timeline background blends seamlessly */}
            <div className="relative pt-20">
              <Timeline />
            </div>
            <Competition />
            <FAQ />
            <AboutSection />
          </div>
        </>
      )}
    </>
  );
}
