'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Competition() {
  return (
    <section className="bg-[#C09B6F] relative min-h-screen overflow-hidden">

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
            <CompetitionCard title="Story telling" w={310} h={286} />

            {/* 4️⃣ Speech */}
            <CompetitionCard title="Speech" w={310} h={425} />
          </motion.div>

          {/* ================= HIGH SCHOOL ================= */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_5px_1px_rgba(0,0,0,0.5)]">High School</h4>

            {/* 5️⃣ Storytelling */}
            <CompetitionCard title="Story telling" w={310} h={427} />

            {/* 6️⃣ Speech */}
            <CompetitionCard title="Speech" w={310} h={286} />
          </motion.div>

          {/* ================= OPEN / UNIVERSITY ================= */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 mt-0">
            {/* 7️⃣ UNIVERSITY replaces Open Category title */}
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Varsity</h4>

            {/* Debate */}
            <CompetitionCard title="Debate" w={310} h={304} />

            {/* 8️⃣ Open Category moved DOWN */}
            <h4 className="h4 text-[#F4D35E] drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]">Open Category</h4>

            <CompetitionCard title="Story Writing" w={310} h={342} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function CompetitionCard({
  title,
  w,
  h,
}: {
  title: string;
  w: number;
  h: number;
}) {
  return (
    <div
      className="bg-[#F4D35E] rounded-xl
                 shadow-[0_12px_0_rgba(0,0,0,0.25)]
                 px-6 pt-6"
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
      }}
    >
      {/* TOP-MIDDLE TEXT */}
      <div className="flex justify-center">
        <span
          style={{
            fontFamily: 'Grenze, serif',
            fontSize: '50px',
            color: '#fff',
            textShadow: '0 3px 6px rgba(0,0,0,0.4)',
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
