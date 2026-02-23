'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

const timelineEvents = [
  {
    id: 1,
    date: "23 February",
    title: "Open Regist",
    description: "The journey begins. Registration opens for all aspiring candidates.",
    align: "top"
  },
  {
    id: 2,
    date: "25 April",
    title: "Preliminary Announcement",
    description: "The first wave of selections marks the closing registration of Story Telling and Speech. Who will proceed to the next stage?",
    align: "bottom"
  },
  {
    id: 3,
    date: "2 May",
    title: "Close Regist",
    description: "Closing Registration for Debate and Story Writing.",
    align: "top"
  },
  {
    id: 4,
    date: "17 & 24 May",
    title: "D-Day",
    description: "The final culmination.",
    align: "bottom"
  },
];

export default function CulturalTimeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] // Memastikan tracking dari awal sampai akhir section
  });

  // Membuat gerakan scroll terasa lebih halus (smooth)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);
  const bgPos = useTransform(smoothProgress, [0, 1], ["0% 0%", "100% 0%"]);

  return (
    <section ref={targetRef} className="relative py-10  h-[400vh] bg-[#211c19]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Background Texture */}
        <div id = "timeline" className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}
        />
        <motion.div
          style={{ backgroundPosition: bgPos }}
          className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-[#1a1614] to-[#1a1614]"
        />

        <motion.div style={{ x }} className="relative flex gap-10 px-[15vw] items-center z-10">

          {/* PROGRESS PATH LAYER */}
          <div className="absolute top-1/2 left-0 w-[4000px] h-10 -translate-y-1/3 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 4000 200" preserveAspectRatio="none">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Jalur Abu-abu (Background Path) */}
              <path
                d="M 0,100 C 500,100 700,180 1200,100 S 1700,20 2200,100 S 2700,180 3200,100 S 3700,20 4000,100"
                fill="none"
                stroke="#F4E04D"
                strokeWidth="2"
                className="opacity-10" // Jalur tipis transparan sebagai panduan
              />

              {/* Jalur Progress (Active Path) */}
              <motion.path
                d="M 0,100 C 500,100 700,180 1200,100 S 1700,20 2200,100 S 2700,180 3200,100 S 3700,20 4000,100"
                fill="none"
                stroke="#F4E04D"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength: smoothProgress }} // Ini yang membuatnya menjadi progress bar
                filter="url(#glow)"
              />
            </svg>
          </div>

          {/* TITLE CARD */}
          <div className="flex-shrink-0 mr-20">
            <h2 className="text-7xl px-10 md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E04D] to-[#bf9b30]">
              Our<br />Journey
            </h2>
          </div>

          {/* EVENTS */}
          {timelineEvents.map((event, index) => (
            <TimelineNode
              key={event.id}
              event={event}
              progress={smoothProgress}
              index={index}
            />
          ))}

          {/* END CARD */}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
            <motion.div
              style={{ opacity: useTransform(smoothProgress, [0.9, 1], [0, 1]) }}
              className="text-5xl font-serif text-[#F4E04D] border-l-8 border-[#F4E04D] pl-8"
            >
              The New Era<br />Begins
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function TimelineNode({ event, progress, index }: { event: any, progress: any, index: number }) {
  const isTop = event.align === 'top';

  // State untuk melacak apakah path sudah melewati card ini
  const [isActive, setIsActive] = useState(false);

  // Menentukan titik (threshold) kapan card menjadi aktif.
  // Nilai ini mengacu pada progress scroll 0 sampai 1.
  const threshold = 0.15 + (index * 0.20);

  // Membaca nilai scroll secara real-time untuk mengubah state isActive
  useMotionValueEvent(progress, "change", (latest: number) => {
    if (latest >= threshold && !isActive) {
      setIsActive(true);
    } else if (latest < threshold && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div className="relative flex-shrink-0 w-[400px] h-[500px] flex flex-col justify-center items-center group">

      {/* Connector Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        className={`absolute left-1/2 w-0.5 origin-${isTop ? 'bottom' : 'top'} ${isTop ? 'bottom-1/2 h-32' : 'top-1/2 h-32'} transition-colors duration-500 ease-out z-10`}
        style={{
          backgroundColor: isActive ? '#F4E04D' : 'rgba(244, 224, 77, 0.3)'
        }}
      />

      {/* The Dot on the Path */}
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-20 transition-all duration-500 ease-out`}
        style={{
          width: isActive ? '36px' : '32px',
          height: isActive ? '36px' : '32px',
          backgroundColor: isActive ? '#F4E04D' : '#1a1614',
          border: isActive ? '4px solid #fff' : '4px solid #F4E04D',
          boxShadow: isActive ? "0 0 30px rgba(244, 224, 77, 0.9)" : "0 0 20px rgba(244, 224, 77, 0.5)",
        }}
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-100px" }}
        className={`
          absolute left-0 right-0 p-5 backdrop-blur-md rounded-2xl
          transition-all duration-500 ease-out z-30 cursor-pointer
          ${isTop ? 'bottom-[65%]' : 'top-[65%]'}
          
          /* LOGIKA KELAS AKTIF DAN HOVER */
          ${isActive
            ? 'border-2 border-[#F4E04D] bg-[#2a2315] scale-105 shadow-[0_0_35px_rgba(244,224,77,0.3)]'
            : 'border border-[#F4E04D]/20 bg-[#1a1614]/90 hover:border-[#F4E04D]/70 hover:scale-105 hover:-translate-y-2 hover:bg-[#211c19] hover:shadow-[0_0_20px_rgba(244,224,77,0.15)]'
          }
        `}
      >
        <span className={`inline-block px-4 py-1 mb-4 text-xs font-black tracking-[0.2em] rounded-full uppercase transition-colors duration-500
          ${isActive ? 'text-[#1a1614] bg-[#F4E04D]' : 'text-[#F4E04D] bg-[#F4E04D]/10'}
        `}>
          {event.date}
        </span>
        <h3 className={`text-3xl font-serif mb-4 transition-colors duration-500 ${isActive ? 'text-[#F4E04D]' : 'text-white'}`}>
          {event.title}
        </h3>
        <p className={`text-base font-light leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
          {event.description}
        </p>
      </motion.div>

    </div>
  );
}