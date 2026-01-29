'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQ() {
  return (
    <section className="relative bg-[#C09B6F] overflow-hidden py-24">

      {/* TILED BACKGROUND */}
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: "url('/images/FAQ/bg_overlay.png')",
          backgroundSize: '280px 280px',
        }}
      />
      <div className="absolute inset-0 bg-[#C09B6F]/30" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* LEFT IMAGE — DESKTOP ONLY */}
          <motion.div
            variants={fadeUp}
            className="hidden md:block md:col-span-4"
          >
            <img
              src="/images/FAQ/content.png"
              alt="FAQ"
              className="w-[600px] h-[635px] rounded-xl object-cover shadow-xl"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="col-span-full md:col-span-8 text-right">

            {/* TITLE */}
            <motion.h1
              variants={fadeUp}
              className="header-shadow mb-4 drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]"
              style={{
                fontFamily: 'Grenze, serif',
                fontSize: '80px',
                color: '#fff',
              }}
            >
              Frequently Asked Question
            </motion.h1>

            {/* SUBTITLE */}
            <motion.h4
              variants={fadeUp}
              className="text-white/90 mb-10 drop-shadow-[0_4px_1px_rgba(0,0,0,0.5)]"
            >
              Find answers to commonly asked questions about our competitions
            </motion.h4>

            {/* FAQ CHIPS */}
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-4"
            >
              <FAQItem />
              <FAQItem />
              <FAQItem />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ================= FAQ ITEM ================= */

function FAQItem() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#F4D35E] rounded-xl shadow-md overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <h3 className="text-[#3b2f1e] text-lg md:text-xl font-semibold ">
          Lorem Ipsum
        </h3>

        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-2xl"
        >
          &gt;
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="px-6 pb-4 text-[#3b2f1e] text-sm md:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
