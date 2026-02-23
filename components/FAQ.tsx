'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// 1. ANIMATION VARIANTS & DATA
// ==========================================
const faqs = [
  {
    question: "Who can participate in the competition?",
    answer: "EFECTION Vol. IV is the first EFECTION to ever reach the international public. With it, we deliver multiple competitions with their own level of reach: Our speech, and storytelling competition is open for both junior highschool and senior highschool in Bali; Our debate competition is for any universities all around Bali; and finally, our Story Writing competition is open for the international public from all walks of life.",
  },
  {
    question: "How do I register?",
    answer: (
      <>
        Participants who are ready to take on the challenges and opportunities of <strong>EFECTION Vol. IV</strong> may register through the links below:
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
    answer: "The preliminary submission deadline for the Speech & Storytelling Competition is April 17, 2026. Participants are required to upload their performance video to YouTube. The submission must include the YouTube video link as well as the performance script. \n The submission deadline for the Story Writing Competition is May 2, 2026. Participants may submit multiple stories until the deadline, however, each story must be submitted as a separate entry.",
  },
  {
    question: "What is ECSI?",
    answer: "ECSI is the abbreviation for the English Club of INSTIKI, a student club based in INSTIKI. This is a place where those who sought to find an English speaking Community can come and meet, share, and connect, all for one reason: their love for the English language.",
  },
  {
    question: "What is EFECTION?",
    answer: "EFECTION, short for ECSI English Festival Competition, is an annual, yearly-held, competition held by the English Club of INSTIKI. It is a place where English enthusiasts can meet, fight, and improve themselves. EFECTION has entered it's 4th year being held consecutively, and with it it brings many improvements.",
  },
  {
    question: "What is new with EFECTION Vol. IV?",
    answer: "EFECTION Vol. IV brings forthwith many improvements to the yearly-held EFECTION. The biggest improvement Vol. IV has is its new international reach. Vol. IV also introduces the preliminary system for speech and storytelling competitions to allow it to be open to a wider range of speakers and storytellers.",
  },
];

export default function FAQ() {
  return (
    <section className="relative w-full overflow-x-clip">
      
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/35 via-[#C09B6F]/50 to-[#f9c88b]/50 pointer-events-none"></div>
    
      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-[#2a241e]/65 z-0 pointer-events-none" />


      {/* ========================================== */}
      {/* FAQ SECTION (WITH STICKY PARALLAX) */}
      {/* ========================================== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start w-full">
          
          {/* ================= KIRI (GAMBAR FIX/STICKY) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 lg:col-span-5 relative group md:sticky md:top-32 md:h-fit"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 rounded-2xl pointer-events-none" />
            <img
              src="/images/FAQ/content.png"
              alt="FAQ Competition"
              className="w-full max-w-[500px] mx-auto h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group-hover:border-[#FEDB73]/30 transition-colors duration-500"
            />
          </motion.div>

          {/* ================= KANAN (KONTEN SCROLLABLE) ================= */}
          <div className="col-span-full md:col-span-7 lg:col-span-7 flex flex-col justify-center">
            
            <div className="text-left mb-8 md:mb-10 mt-4 md:mt-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                // Ukuran teks disesuaikan agar proporsional
                className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] break-words"
                style={{ fontFamily: "Grenze, serif" }}
              >
                Frequently Asked<br/>
                <span className="text-[#FEDB73] italic">Questions.</span>
              </motion.h1>

              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-gray-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-lg leading-relaxed"
              >
                Find answers to commonly asked questions about our competitions and events.
              </motion.h4>
            </div>

            {/* FAQ LIST */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-4 pb-12 md:pb-24"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}

// ==========================================
// HELPER COMPONENT: FAQ ITEM
// ==========================================
function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0 },
      }}
      className={`
        relative overflow-hidden rounded-2xl border transition-all duration-300
        ${isOpen 
          ? "bg-white/[0.08] border-[#FEDB73]/40 shadow-[0_10px_30px_rgba(254,219,115,0.05)]" 
          : "bg-white/[0.03] border-white/10 hover:bg-white/[0.05] hover:border-white/20"}
        backdrop-blur-md
      `}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-4 sm:p-5 lg:p-6 outline-none gap-3"
      >
        <span className={`font-medium text-sm sm:text-base transition-colors duration-300 ${isOpen ? "text-[#FEDB73]" : "text-white"}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border transition-colors ${isOpen ? "border-[#FEDB73] text-[#FEDB73]" : "border-white/20 text-white"}`}
        >
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-1 text-gray-300 text-xs sm:text-sm text-left leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}