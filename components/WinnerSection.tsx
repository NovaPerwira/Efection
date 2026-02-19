'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type SideImageProps = {
  src: string
  className?: string
  delay?: number
  rotation?: number
}

export default function WinnerSection() {
  return (
    <section className="relative w-full min-h-full py-10 overflow-hidden bg-[#3b352d] flex flex-col items-center justify-center">

      {/* === BACKGROUND LAYERS === */}

      {/* 1. Base Pattern (Floral/Damask) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-/50 via-[#C09B6F]/50 to-[#ffd867]"></div>
      </div>

      {/* 3. Vignette (Gelap di pinggir) */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none"></div>


      {/* === CENTER CONTENT === */}
      <div className="relative z-10 text-center flex flex-col items-center -mt-20">

      {/* Title */}
      <h2
        className="font-serif text-[#f5f1ea] drop-shadow-lg tracking-wide"
        style={{
          fontSize: "clamp(28px, 5vw, 64px)",
          lineHeight: "1.2"
        }}
      >
        Are You Ready to be our <br />
        <span className="italic font-bold text-white">Winner ?</span>
      </h2>

      {/* Center Frame (Mystery Box) */}
      <div className="relative cursor-pointer mt-0">
        {/* The Frame Container */}
        <div className="w-[280px] h-[350px] md:w-[320px] md:h-[400px] relative transform transition-transform duration-500 hover:scale-105">

          {/* CSS Wood Frame Border */}
          <div className="absolute inset-0 z-20 pointer-events-none"></div>

          {/* Inner Pattern/Content */}
          <div className="absolute inset-4 flex items-center justify-center overflow-hidden">
            <Image
              src="/images/subHero/border.webp"
              alt="Inner Pattern"
              fill
              className="object-cover opacity-100"
            />
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
      </div>

    </div>

      {/* === FLOATING SIDE IMAGES === */}
      {/* Kita gunakan absolute positioning relative terhadap section utama */}

      {/* Left Column */}
      <SideImage
        src="/images/subHero/Group 9-1.png"
        className="top-4 -left-4 md:top-15 md:left-[2%] xl:left-[2%] 2xl:left-[5%] min-[2000px]:left-[15%]"
        delay={0.2}
        rotation={-5}
      />
      <SideImage
        src="/images/subHero/Group 9.png"
        className="bottom-16 -left-4 md:bottom-0 md:left-[2%] xl:left-[2%] 2xl:left-[5%] min-[2000px]:left-[15%]"
        delay={0.4}
        rotation={5}
      />

      {/* Right Column */}
      <SideImage
        src="/images/subHero/Group 10.png"
        className="top-4 -right-4 md:top-16 md:right-[2%] xl:right-[2%] 2xl:right-[5%] min-[2000px]:right-[15%]"
        delay={0.3}
        rotation={5}
      />
      <SideImage
        src="/images/subHero/Group 11.png"
        className="bottom-16 -right-4 md:bottom-0 md:right-[2%] xl:right-[2%] 2xl:right-[5%] min-[2000px]:right-[15%]"
        delay={0.5}
        rotation={-5}
      />

    </section>
  )
}

// Komponen Frame Kecil untuk Sisi
function SideImage({ src, className, delay, rotation = 0 }: SideImageProps) {
  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      style={{
        width: "clamp(150px, 18vw, 340px)", // fluid scaling
        aspectRatio: "4 / 5" // keeps consistent portrait shape
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="relative w-full h-full cursor-pointer"
        style={{ rotate: rotation }}
      >
        <img
          src={src}
          alt="Participant"
          className="
            w-full h-full object-contain
            transition-all duration-500 ease-in-out
            hover:scale-105 hover:brightness-110
            hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]
          "
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </motion.div>
    </motion.div>
  );
}
