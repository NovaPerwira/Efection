'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const faqs = [
  {
    title: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Lorem ipsum',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Lorem ipsum',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#C09B6F] min-h-screen overflow-hidden text-[#1b1b1b]">

      {/* 🔁 TILING BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-repeat bg-left-top"
        style={{
          backgroundImage: "url('/images/FAQ/bg_overlay.png')",
          backgroundSize: '300px 300px', // adjust tile size
        }}
      />

      {/* 🎨 COLOR OVERLAY */}
      <div className="absolute inset-0 bg-[#C09B6F]/20" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <div className="grid grid-cols-12 gap-y-8 items-start">

          {/* 1️⃣ TITLE */}
          <motion.h2
            className="col-start-4 col-span-8 text-right"
            variants={fadeUp}
            style={{
              fontFamily: 'Grenze, serif',
              fontSize: '80px',
              lineHeight: '1.1',
            }}
          >
            Frequently Asked Question
          </motion.h2>

          {/* 2️⃣ DESCRIPTION */}
          <motion.h4
            className="col-start-6 col-span-6 text-right text-[#2a241d]"
            variants={fadeUp}
          >
            Find answers to commonly asked questions about our competitions
          </motion.h4>

          {/* 3️⃣ IMAGE */}
          <motion.div
            className="col-span-4 flex justify-center"
            variants={fadeUp}
          >
            <div className="relative w-[299px] h-[374px]">
              <Image
                src="/images/faq/content.png"
                alt="FAQ visual"
                fill
                className="object-cover rounded-xl shadow-2xl shadow-black/100"
              />
            </div>
          </motion.div>

          {/* 4️⃣ FAQ CHIPS */}
          <motion.div
            className="col-start-5 col-span-7 space-y-4"
            variants={fadeUp}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#F4D35E] shadow-md overflow-hidden"
                >
                  {/* CHIP HEADER */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between px-6 py-4"
                  >
                    <h3
                      style={{
                        fontFamily: 'Grenze, serif',
                        fontSize: '32px',
                      }}
                    >
                      {faq.title}
                    </h3>

                    {/* ARROW */}
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-2xl font-semibold"
                    >
                      &gt;
                    </motion.span>
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-23 text-[#2a241d]">
                          {faq.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
