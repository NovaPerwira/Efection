'use client';

import { motion } from "framer-motion";
import Image from "next/image";

// ==========================================
// VARIANTS ANIMASI
// ==========================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="relative z-20 w-full py-16 md:py-24 flex items-center border-t border-white/5 bg-[#0A0A0A]/40 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1614]/35 via-[#C09B6F]/50 to-[#f9c88b]/50 pointer-events-none"></div>

      {/* OVERLAY GELAP */}
      <div className="absolute inset-0 bg-[#2a241e]/65 z-0 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* ================== BAGIAN ATAS: TITLE/IMG (KIRI) & PARAGRAF (KANAN) ================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-24">

          {/* KIRI: Title & Image */}
          <motion.div className="col-span-1 lg:col-span-5 flex flex-col gap-6" variants={fadeRight}>
            <div>
              <h1 className="text-white tracking-[0.3em] text-sm uppercase opacity-50 font-bold">
                About Us
              </h1>
              <h2 className="text-[#FEDB73] text-5xl lg:text-[80px] leading-[1.1] drop-shadow-lg" style={{ fontFamily: 'Grenze, serif' }}>
                English Festival Competition
              </h2>
            </div>
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 group">
              <Image
                src="/images/aboutus/photo.png"
                alt="Effection IV event"
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* KANAN: Paragraf Penjelasan */}
          <motion.div className="col-span-1 lg:col-span-7 flex flex-col justify-center lg:pl-10" variants={fadeLeft}>
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#FEDB73] to-transparent rounded-l-3xl opacity-80" />
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                EFECTION Vol. IV is the first EFECTION to ever reach the international public. With it, we deliver multiple competitions with their own level of reach. This is a place where English enthusiasts can meet, fight, and improve themselves.
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-6">
                Join us to showcase your talent, meet inspiring peers, and be part of an unforgettable experience. Whether you are a local student or an international participant, there is a stage for you here.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ================== BAGIAN BAWAH: LOCATION, PRIZE POOL, CRITERIA ================== */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={fadeUp}
        >
          {/* 1. Location (Iframe Maps) */}
          <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 backdrop-blur-sm group hover:border-white/20 transition-colors">
            <h3 className="text-[#FEDB73] mb-4 text-3xl" style={{ fontFamily: 'Grenze, serif' }}>Location</h3>
            <p className="text-white text-base mb-4 font-medium">Instiki Campus, Denpasar</p>
            <div className="relative w-full h-[200px] lg:h-full min-h-[200px] rounded-xl overflow-hidden shadow-inner border border-white/5">
              {/* Ganti URL src dengan link embed Google Maps Anda */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0264022879685!2d115.22557617488812!3d-8.688998888506093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd240fb2b3396fb%3A0x6b746860d5c31758!2sINSTIKI%20-%20Institut%20Bisnis%20dan%20Teknologi%20Indonesia!5e0!3m2!1sen!2sid!4v1714000000000!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* 2. Prize Pool (Sangat Menonjol) */}
          <div className="relative flex flex-col justify-center items-center h-full bg-gradient-to-br from-[#1a150b] to-[#0A0A0A] border-2 border-[#FEDB73]/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(254,219,115,0.15)] overflow-hidden group transform hover:-translate-y-2 transition-all duration-300">
            {/* Efek Shine/Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FEDB73]/20 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* Animasi kilauan saat hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#FEDB73]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

            <p className="relative z-10 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FEDB73] mb-3 font-bold text-center">
              Total Prize Pool
            </p>

            <h3 className="relative z-10 text-4xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md text-center flex flex-col items-center">
              <span className="text-xl sm:text-2xl font-light opacity-80 mb-1 text-[#FEDB73]">IDR</span>
              13,500,000
            </h3>

            {/* Dekorasi Garis Emas */}
            <div className="flex items-center gap-3 mt-8 w-full max-w-[150px] opacity-80">
              <div className="h-[1px] flex-1 bg-gradient-to-l from-[#FEDB73] to-transparent"></div>
              <div className="w-2 h-2 rotate-45 bg-[#FEDB73] shadow-[0_0_10px_#FEDB73]"></div>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FEDB73] to-transparent"></div>
            </div>
          </div>

          {/* 3. Range / Criteria */}
          <div className="flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm group hover:border-white/20 transition-colors">
            <h3 className="text-[#FEDB73] mb-6 text-3xl" style={{ fontFamily: 'Grenze, serif' }}>Criteria Range</h3>

            <ul className="flex flex-col gap-5 text-white text-base lg:text-lg">
              <li className="flex items-start gap-4">
                <span className="text-[#FEDB73] mt-1 text-sm">✦</span>
                <div>
                  <span className="font-semibold block">Middle School</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Regional Level</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#FEDB73] mt-1 text-sm">✦</span>
                <div>
                  <span className="font-semibold block">High School</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Regional Level</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#FEDB73] mt-1 text-sm">✦</span>
                <div>
                  <span className="font-semibold block">Varsity</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">University Level</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#FEDB73] mt-1 text-sm">✦</span>
                <div>
                  <span className="font-semibold block">Open Category</span>
                  <span className="text-xs text-gray-400 uppercase tracking-wider">International / Public</span>
                </div>
              </li>
            </ul>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}