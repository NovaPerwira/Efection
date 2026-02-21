'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Image from "next/image";
import CompetitionCard from "@/components/CompetitionCard";
import Footer from "@/components/Footer";

// ==========================================
// SHARED ANIMATIONS & DATA
// ==========================================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const faqs = [
  {
    question: "Who can participate in the competition?",
    answer:
      "EFECTION Vol. IV is the first EFECTION to ever reach the international public. With it, we deliver multiple competitions with their own level of reach: Our speech, and storytelling competition is open for both junior highschool and senior highschool in Bali; Our debate competition is for any universities all around Bali; and finally, our Story Writing competition is open for the international public from all walks of life.",
  },
  {
    question: "How do I register?",
    answer: (
      <>
        Participants who are ready to take on the challenges and opportunities of <strong>EEFCTION Vol. IV</strong> may register through the links below:
        <br /><br />
        
        🔹 <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSevBO-Wm3H_U2zQRjZt63FFl6pGCAYKxUw63WOwnAwvl7WTcA/viewform" 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-yellow-200 transition"
        >
          Register for the Regional Competition (Debate, Speech, Storytelling)
        </a>

        <br /><br />

        🔹 <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnS_mIXivrGGbYp2DFvacLxVK_TCZpZ6QzKlITBkZZtfSHcpw/viewform"
          target="_blank" 
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-yellow-200 transition"
        >
          Register for the International Competition (Story Writing)
        </a>
      </>
    ),
  }, 
  {
    question: "When is the submission deadline?",
    answer:
      "The preliminary submission deadline for the Speech & Storytelling Competition is April 17, 2026. Participants are required to upload their performance video to YouTube. The submission must include the YouTube video link as well as the performance script. \n The submission deadline for the Story Writing Competition is May 2, 2026. Participants may submit multiple stories until the deadline, however, each story must be submitted as a separate entry.",
  },
    {
    question: "What is ECSI?",
    answer:
      "ECSI is the abbreviation for the English Club of INSTIKI, a student club based in INSTIKI. This is a place where those who sought to find an English speaking Community can come and meet, share, and connect, all for one reason: their love for the English language.",
  },
  {
    question: "What is EFECTION?",
    answer:
      "EFECTION, short for ECSI English Festival Competition, is an annual, yearly-held, competition held by the English Club of INSTIKI. It is a place where English enthusiasts can meet, fight, and improve themselves. EFECTION has entered it's 4th year being held consecutively, and with it it brings many improvements.",
  },
  {
    question: "What is new with EFECTION Vol. IV?",
    answer:
      "EFECTION Vol. IV brings forthwith many improvements to the yearly-held EFECTION. The biggest improvement Vol. IV has is its new international reach. Vol. IV also introduces the preliminary system for speech and storytelling competitions to allow it to be open to a wider range of speakers and storytellers.",
  },
]

const features = [
  {
    id: 'judge',
    title: 'Expert Judges',
    description: 'Evaluated by renowned industry professionals and academics, ensuring a highly credible and fair assessment of your work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
    ),
  },
  {
    id: 'transparent',
    title: 'Transparent Process',
    description: 'Clear rubrics, open scoring systems, and honest communication at every step. Integrity is the foundation of our event.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
  },
  {
    id: 'publication',
    title: 'Global Publication',
    description: 'Outstanding submissions will earn the exclusive opportunity to be published in our affiliated journals and media platforms.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
  {
    id: 'feedback',
    title: 'Constructive Feedback',
    description: 'Beyond winning, every participant receives detailed, actionable feedback to help refine their craft and foster growth.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
    ),
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CompetitionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Scroll Progress untuk KE-EMPAT section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, damping: 25, restDelta: 0.001
  });

  // Path SVG diperpanjang menjadi 4000 untuk menutupi 4 section
  const combinedPath = "M 1440,0 C 1440,300 200,200 200,500 C 200,800 1200,700 800,1000 C 400,1300 1200,1300 1200,1500 C 1200,1700 200,1750 200,2000 C 200,2250 1200,2250 1200,2500 C 1200,2750 200,2750 200,3000 C 200,3250 1200,3250 1200,3500 C 1200,3750 200,3750 200,4000";

  return (
    <section
      ref={sectionRef}
      id="event-showcase"
      className="relative w-full overflow-hidden flex flex-col items-center text-[#e2ddd4]"
    >

      {/* Background Layer */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/35 via-[#C09B6F]/50 to-[#f9c88b]/50"></div>
    </div>
      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-[#2a241e]/65 z-0 pointer-events-none" />

      {/* --- LAYER PROGRESS PATH KESELURUHAN --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
        <svg width="100%" height="100%" viewBox="0 0 1440 4000" preserveAspectRatio="none">
          <defs>
            <filter id="glowCombined" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path d={combinedPath} fill="none" stroke="#F4D35E" strokeWidth="2" vectorEffect="non-scaling-stroke" className="opacity-10" />
          <motion.path d={combinedPath} fill="none" stroke="#F4E04D" strokeWidth="6" strokeLinecap="round" filter="url(#glowCombined)" vectorEffect="non-scaling-stroke" style={{ pathLength: smoothProgress }} />
        </svg>
      </div>

      {/* ========================================== */}
      {/* 1. COMPETITIONS */}
      {/* ========================================== */}
      <motion.div
        id = "comp" className="relative z-10 max-w-7xl w-full px-6 py-24 min-h-screen flex flex-col items-center justify-center"
        initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.2 }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-center mb-10 drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)] text-white"
          style={{
            fontFamily: 'Grenze, serif',
            fontSize: 'clamp(80px, 8vw, 128px)'
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
            <motion.h4 className="text-[#F4D35E] drop-shadow-[0_5px_1px_rgba(0,0,0,0.5)]">High School</motion.h4>
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

      {/* ========================================== */}
      {/* 2. WHY CHOOSE US */}
      {/* ========================================== */}
      <div className="relative z-20 w-full py-24 min-h-screen flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FEDB73]/5 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

        <div className="w-full max-w-[1200px] px-4 md:px-8 xl:px-12 flex flex-col items-center">
          <motion.div className="text-center mb-16 md:mb-24" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#FEDB73] mb-4 font-bold">The Advantage</p>
            <h2 className="drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]" style={{ fontFamily: 'Grenze, serif', fontSize: '80px', color: '#fff', lineHeight: '1.1' }}>
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="
                  relative flex flex-col items-center text-center px-6 py-10
                  bg-[#C09B6F]/10 backdrop-blur-md 
                  border-2 border-[#C09B6F]/50 rounded-2xl
                  shadow-[0_4px_15px_rgba(0,0,0,0.3)]
                  transition-all duration-300
                  hover:bg-[#C09B6F]/20 hover:border-[#F4D35E] hover:-translate-y-2 group
                "
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 + index * 0.15, duration: 0.7 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#F4D35E]/60 to-transparent border border-[#F4D35E]/60 flex items-center justify-center text-[#F4D35E] mb-6 group-hover:scale-110 group-hover:text-white group-hover:border-[#F4D35E] transition-all duration-500 ease-out">
                  {feature.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-[#e2ddd4] mb-4 tracking-wide group-hover:text-white transition-colors">{feature.title}</h4>
                <div className="h-[1px] w-8 bg-[#C09B6F]/50 mb-4 group-hover:w-16 group-hover:bg-[#FEDB73] transition-all duration-300"></div>
                <p className="text-sm text-gray-300 font-light leading-relaxed tracking-wider group-hover:text-gray-100 transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}