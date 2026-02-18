'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const timelineEvents = [
  {
    id: 1,
    date: "23 February",
    title: "Open OR",
    description: "The journey begins. Recruitment opens for all aspiring candidates.",
    align: "top"
  },
  {
    id: 2,
    date: "25 April",
    title: "Preliminary Announcement",
    description: "The first wave of selections. Who will proceed to the next stage?",
    align: "bottom"
  },
  {
    id: 3,
    date: "2 May",
    title: "Close OR / Debate & SW",
    description: "Recruitment closes. The intellectual battleground commences.",
    align: "top"
  },
  {
    id: 4,
    date: "17 & 25 May",
    title: "D-Day",
    description: "The final culmination. The new era is established.",
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
    <section ref={targetRef} className="relative py-10 h-[400vh] bg-[#1a1614]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} 
        />
        <motion.div 
          style={{ backgroundPosition: bgPos }}
          className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/40 via-[#1a1614] to-[#1a1614]"
        />

        <motion.div style={{ x }} className="relative flex gap-20 px-[15vw] items-center z-10">
          
          {/* PROGRESS PATH LAYER */}
          <div className="absolute top-1/2 left-0 w-[4000px] h-40 -translate-y-1/2 pointer-events-none">
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
          <div className="flex-shrink-0 w-[30vw] mr-20">
            <h2 className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4E04D] to-[#bf9b30]">
              Our<br/>Journey
            </h2>
          </div>

          {/* EVENTS */}
          {timelineEvents.map((event) => (
            <TimelineNode key={event.id} event={event} progress={smoothProgress} />
          ))}

          {/* END CARD */}
          <div className="flex-shrink-0 w-[40vw] flex items-center justify-center">
             <motion.div 
               style={{ opacity: useTransform(smoothProgress, [0.9, 1], [0, 1]) }}
               className="text-5xl font-serif text-[#F4E04D] border-l-8 border-[#F4E04D] pl-8"
             >
               The New Era<br/>Has Arrived
             </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function TimelineNode({ event, progress }: { event: any, progress: any }) {
  const isTop = event.align === 'top';
  
  // Titik menyala hanya jika progress scroll sudah melewati titik tersebut
  // (Angka di bawah perlu disesuaikan dengan posisi visual node Anda)
  const dotGlow = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div className="relative flex-shrink-0 w-[400px] h-[500px] flex flex-col justify-center items-center">
      
      {/* Connector Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        className={`absolute left-1/2 w-0.5 bg-[#F4E04D]/30 origin-${isTop ? 'bottom' : 'top'} ${isTop ? 'bottom-1/2 h-32' : 'top-1/2 h-32'}`} 
      />

      {/* The Dot on the Path */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1a1614] border-4 border-[#F4E04D] rounded-full z-20"
        style={{ 
          boxShadow: "0 0 20px rgba(244, 224, 77, 0.5)",
          scale: useTransform(progress, [0, 1], [0.8, 1.2]) 
        }}
      />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-100px" }}
        className={`
          absolute left-0 right-0 p-8
          border border-[#F4E04D]/20 bg-[#1a1614]/90 backdrop-blur-md
          rounded-2xl shadow-2xl
          ${isTop ? 'bottom-[65%]' : 'top-[65%]'}
        `}
      >
        <span className="inline-block px-4 py-1 mb-4 text-xs font-black tracking-[0.2em] text-[#1a1614] bg-[#F4E04D] rounded-full uppercase">
          {event.date}
        </span>
        <h3 className="text-3xl font-serif text-white mb-3">{event.title}</h3>
        <p className="text-gray-400 text-base font-light leading-relaxed">{event.description}</p>
      </motion.div>
      
    </div>
      
  );
}