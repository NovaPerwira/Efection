'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        text-[#1b1b1b]
        bg-[#C09B6F]
        bg-[url('/images/aboutus/bg_overlay.png')]
        bg-repeat
        bg-[length:280px_280px]
      "
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#C09B6F]/20 z-0" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >

        {/* ================= MOBILE STACK ================= */}
        <div className="md:hidden space-y-12 text-center">

          <motion.h1 className="h1" variants={fadeUp}>
            ABOUT US
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'Grenze, serif',
              fontSize: '40px',
              lineHeight: '1.1',
            }}
          >
            English Festival Competition
          </motion.h2>

          <motion.h4 className="h4 text-[#2a241d]" variants={fadeUp}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </motion.h4>

          <motion.div className="space-y-8" variants={fadeUp}>
            <div>
              <h3 style={{ fontFamily: 'Grenze, serif', fontSize: '32px' }}>
                Location
              </h3>
              <h5 className="h5">Instiki</h5>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Grenze, serif', fontSize: '32px' }}>
                Prize Pool
              </h3>
              <h5 className="h5">IDR. 13,500,000</h5>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Grenze, serif', fontSize: '32px' }}>
                Range
              </h3>
              <h5 className="h5 leading-snug">
                Middle School, High School, Open Category
              </h5>
            </div>
          </motion.div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-12 gap-y-10">

          {/* ABOUT US */}
          <motion.h1
            className="h1 col-start-5 col-span-5"
            variants={fadeUp}
          >
            ABOUT US
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="col-start-2 col-span-8"
            variants={fadeUp}
            style={{
              fontFamily: 'Grenze, serif',
              fontSize: '80px',
              lineHeight: '1.1',
            }}
          >
            English Festival Competition
          </motion.h2>

          {/* Image */}
          <motion.div
            className="
              col-start-11 col-span-2
              row-start-2 row-span-4
              relative
              w-[300px] h-[480px]
            "
            variants={fadeRight}
          >
            <Image
              src="/images/aboutus/photo.png"
              alt="Effection IV event"
              fill
              className="object-cover rounded-md shadow-2xl shadow-black/100"
              priority
            />
          </motion.div>

          {/* Description */}
          <motion.h4
            className="h4 col-start-2 col-span-8 text-[#2a241d]"
            variants={fadeUp}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </motion.h4>

          {/* Labels */}
          <motion.div
            className="col-start-2 col-span-7 grid grid-cols-7"
            variants={fadeUp}
          >
            <h3 className="col-span-2" style={{ fontFamily: 'Grenze, serif', fontSize: '50px' }}>
              Location
            </h3>
            <h3 className="col-start-4 col-span-2" style={{ fontFamily: 'Grenze, serif', fontSize: '50px' }}>
              Prize Pool
            </h3>
            <h3 className="col-start-7 col-span-2" style={{ fontFamily: 'Grenze, serif', fontSize: '50px' }}>
              Range
            </h3>
          </motion.div>

          {/* Values */}
          <motion.div
            className="col-start-2 col-span-9 grid grid-cols-9 text-[#2a241d]"
            variants={fadeUp}
          >
            <h5 className="col-span-2 h5">Instiki</h5>
            <h5 className="col-start-4 col-span-2 h5">IDR. 13,500,000</h5>
            <h5 className="col-start-7 col-span-3 h5 leading-snug">
              Middle School, High School, Open Category
            </h5>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
