'use client';
import HeroPage from "@/components/Hero";
import { useEffect, useState } from "react";
import EffectionIVSection from "@/components/EffectionIVSection";
import WinnerSection from "@/components/WinnerSection";
import StickyZoomSection from "@/components/paralaxwapper";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isExiting, setIsExiting] = useState(false); // Controls the slide up
  
  const fullText = "EFFECTION IV";

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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-transform duration-1000 ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
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

  return (
    // <>
    //   {loading && <SplashScreen onComplete={handleLoadingComplete} />}
    //   {!loading && <WinnerSection />}
    
    // </>

    <>
     {loading && <SplashScreen onComplete={handleLoadingComplete} />}
      {/* SECTION 1 */}
      <EffectionIVSection />

      {/* SECTION 2 (ZOOM ONLY) */}
      <StickyZoomSection>
        <WinnerSection />
      </StickyZoomSection>

      {/* SECTION AFTER ZOOM */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-4xl font-serif">Next Section</h2>
      </section>
    </>
  );
}
    