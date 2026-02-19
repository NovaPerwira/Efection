'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CompetitionCard from "@/components/CompetitionCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    id: 'judge',
    title: 'Expert Judges',
    description: 'Evaluated by renowned industry professionals and academics, ensuring a highly credible and fair assessment of your work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 'transparent',
    title: 'Transparent Process',
    description: 'Clear rubrics, open scoring systems, and honest communication at every step. Integrity is the foundation of our event.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    id: 'publication',
    title: 'Global Publication',
    description: 'Outstanding submissions will earn the exclusive opportunity to be published in our affiliated journals and media platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'feedback',
    title: 'Constructive Feedback',
    description: 'Beyond winning, every participant receives detailed, actionable feedback to help refine their craft and foster growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function CombinedCompetitionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Mengambil progress scroll dari gabungan kedua section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });

  // Path gabungan yang meliuk sempurna dari section Competition hingga Why Choose Us
  // Menggunakan viewBox yang lebih panjang (0 0 1440 2000) agar muat 2 section
  const combinedPath = "M 1440,0 C 1440,300 200,200 200,500 C 200,800 1200,700 800,1000 C 400,1300 1200,1300 1200,1500 C 1200,1700 200,1750 200,2000";

  return (
    <section 
      ref={sectionRef} 
      id="competition-and-features" 
      // Tambahkan `bg-fixed` untuk mematikan pergerakan background (Parallax)
      className="bg-[#3b352d] bg-fixed relative w-full overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: "url('/images/aboutus/bg_overlay.png')",
        backgroundSize: '280px 280px',
      }}
    >
      
      {/* OVERLAY GELAP (Tetap menempel di belakang konten) */}
      <div className="absolute inset-0 bg-[#3b352d]/50 z-0 pointer-events-none" />

      {/* --- LAYER PROGRESS PATH KESELURUHAN --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 2000" 
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glowCombined" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Jalur Panduan Transparan */}
          <path
            d={combinedPath}
            fill="none"
            stroke="#F4D35E"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="opacity-10"
          />

          {/* Jalur Menyala (Terus jalan sampai akhir Why Choose Us) */}
          <motion.path
            d={combinedPath}
            fill="none"
            stroke="#F4E04D"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#glowCombined)"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: smoothProgress }}
          />
        </svg>
      </div>
      {/* ----------------------------------------------- */}

      {/* ==================================================== */}
      {/* 1. COMPETITION SECTION CONTENT */}
      {/* ==================================================== */}
      <motion.div
        className="relative z-10 max-w-7xl w-full px-6 py-24 min-h-screen flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-center mb-24"
          style={{
            fontFamily: 'Grenze, serif',
            fontSize: '80px',
            color: '#fff',
            textShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}
        >
          Our Competitions
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-20 w-full items-start">
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Middle School</h4>
            <CompetitionCard title="Story telling" w={310} h={286} slug="middle-storytelling" icon="/images/competitions/STORYTELLING_SMP.png" iconSize={150}/>
            <CompetitionCard title="Speech" w={310} h={425} slug="middle-speech" icon="/images/competitions/SPEECH_SMP.png" iconSize={190}/>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_5px_1px_rgba(0,0,0,0.5)]">High School</h4>
            <CompetitionCard title="Story telling" w={310} h={427} slug="high-storytelling" icon="/images/competitions/STORYTELLING_SMA.png" iconSize={200}/>
            <CompetitionCard title="Speech" w={310} h={286} slug="high-speech" icon="/images/competitions/SPEECH_SMA.png" iconSize={150}/>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 mt-0">
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Varsity</h4>
            <CompetitionCard title="Debate" w={310} h={304} slug="university-debate" icon="/images/competitions/DEBATE.png" iconSize={150}/>
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Open Category</h4>
            <CompetitionCard title="Story Writing" w={310} h={342}  slug="open-story-writing" icon="/images/competitions/STORYWRITING.png" iconSize={190}/>
          </motion.div>
        </div>
      </motion.div>


      {/* ==================================================== */}
      {/* 2. WHY CHOOSE US SECTION CONTENT */}
      {/* ==================================================== */}
      <div className="relative z-20 w-full border-t border-[#FEDB73]/10 pt-24 pb-32 min-h-screen flex flex-col items-center justify-center">
        
        {/* Subtle Glow dipusatkan hanya untuk area Why Choose Us */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEDB73]/5 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

        <div className="w-full max-w-[1200px] px-4 md:px-8 xl:px-12 flex flex-col items-center">
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#FEDB73] mb-4 font-bold">
              The Advantage
            </p>
            <h2 className="text-3xl md:text-5xl xl:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-md">
              Why Choose Us
            </h2>
            
            <div className="flex items-center justify-center gap-3 mt-6 w-full opacity-80">
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-[#C09B6F] to-transparent"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#FEDB73]"></div>
              <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-[#C09B6F] to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="
                  relative flex flex-col items-center text-center
                  px-6 py-10
                  bg-black/30 backdrop-blur-sm 
                  border border-[#F4D35E]/60 rounded-2xl
                  transition-all duration-300
                  hover:bg-black/50
                  hover:border-[#F4D35E]/40
                  hover:shadow-[0_10px_40px_rgba(254,219,115,0.1)]
                  hover:-translate-y-2
                  group
                "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="  
                  w-16 h-16 rounded-full 
                  bg-gradient-to-b from-[#F4D35E]/60 to-transparent 
                  border border-[#F4D35E]/60 
                  flex items-center justify-center
                  text-[#F4D35E] mb-6
                  group-hover:scale-110 group-hover:text-white group-hover:border-[#F4D35E]
                  transition-all duration-500 ease-out
                ">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#e2ddd4] mb-4 tracking-wide group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <div className="h-[1px] w-8 bg-[#C09B6F]/50 mb-4 group-hover:w-16 group-hover:bg-[#FEDB73] transition-all duration-300"></div>
                <p className="text-sm text-gray-400 font-light leading-relaxed tracking-wider group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}