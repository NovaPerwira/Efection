'use client';

import { motion } from 'framer-motion';
import CompetitionCard from "@/components/CompetitionCard";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Competition() {
  return (
    <section id="competition" className="bg-[#C09B6F] relative min-h-screen overflow-hidden">

      
      {/* TILED BACKGROUND */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: "url('/images/aboutus/bg_overlay.png')",
          backgroundSize: '280px 280px',
        }}
      />
      <div className="absolute inset-0 bg-[#C09B6F]/30" />
      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* 1️⃣ TITLE — H1 */}
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-20 items-start">

          {/* ================= MIDDLE SCHOOL ================= */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
            {/* 2️⃣ TITLE — H4 */}
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Middle School</h4>

            {/* 3️⃣ Storytelling */}
            <CompetitionCard title="Story telling" w={310} h={286} slug="middle-storytelling" icon="/images/competitions/STORYTELLING_SMP.png" iconSize={150}/>

            {/* 4️⃣ Speech */}
            <CompetitionCard title="Speech" w={310} h={425} slug="middle-speech" icon="/images/competitions/SPEECH_SMP.png" iconSize={190}/>
          </motion.div>

          {/* ================= HIGH SCHOOL ================= */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_5px_1px_rgba(0,0,0,0.5)]">High School</h4>

            {/* 5️⃣ Storytelling */}
            <CompetitionCard title="Story telling" w={310} h={427} slug="high-storytelling" icon="/images/competitions/STORYTELLING_SMA.png" iconSize={200}/>

            {/* 6️⃣ Speech */}
            <CompetitionCard title="Speech" w={310} h={286} slug="high-speech" icon="/images/competitions/SPEECH_SMA.png" iconSize={150}/>
          </motion.div>

          {/* ================= OPEN / UNIVERSITY ================= */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 mt-0">
            {/* 7️⃣ UNIVERSITY replaces Open Category title */}
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Varsity</h4>

            {/* Debate */}
            <CompetitionCard title="Debate" w={310} h={304} slug="university-debate" icon="/images/competitions/DEBATE.png" iconSize={150}/>

            {/* 8️⃣ Open Category moved DOWN */}
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Open Category</h4>

            <CompetitionCard title="Story Writing" w={310} h={342}  slug="open-story-writing" icon="/images/competitions/STORYWRITING.png" iconSize={190}/>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


