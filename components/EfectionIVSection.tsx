import React from 'react'
import { motion } from 'framer-motion'

type EfectionIVSectionProps = {
  animate?: boolean
}

type SideImageProps = {
  src: string
  className?: string
  delay?: number
  rotation?: number
}

export default function EfectionIVSection({
  animate = true,
}: EfectionIVSectionProps) {
  return (
    <section className="relative w-full py-16 md:py-24 min-h-screen overflow-hidden bg-[#3b352d] flex flex-col items-center justify-center">
      {/* --- Background Elements --- */}

      {/* Vertical Stripes Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/seamless3.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Central Emblem Silhouette (Decorative Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] pointer-events-none z-0">
        <img src="images/Hero/logo.webp" alt="" className="w-full h-full object-contain" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="
          relative z-20 
          w-full max-w-[860px] xl:max-w-[1060px] 2xl:max-w-[1200px]
          px-4 md:px-8 xl:px-12 py-10 md:py-16 xl:py-20
          mt-4 md:mt-10
          text-center
          text-[#f5f1ea]
          
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <div className="flex flex-col items-center justify-center leading-tight">
          <motion.h1
            className="
              font-serif
              tracking-[0.12em]
              font-bold
              mb-3
              drop-shadow-lg
            "
            style={{
              fontSize: "clamp(48px, 8vw, 144px)"
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            EFECTION IV
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="
              text-xl md:text-2xl xl:text-3xl 2xl:text-4xl
              font-serif
              text-[#e2ddd4]
              tracking-wide
            "
            style={{
              fontSize: "clamp(32px, 8vw, 144px)"
            }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Voices of Society
          </motion.h2>

          {/* Description */}
          <motion.p
            className="
              text-xs md:text-sm
              text-white
              font-light
              tracking-[0.10em] md:tracking-[0.15em]
              mb-2 mt-4 px-2
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Exploring Culture, Identity, and Change in a
            <br className="hidden md:block" />
            {" "}Globalized World
          </motion.p>
        </div>

        {/* Prize Pool */}
        <motion.div
  className="
    relative inline-flex flex-col items-center
    px-4 py-6 md:px-10 md:py-8 mt-4
    bg-black/40 backdrop-blur-md 
    border border-[#FEDB73]/20 rounded-2xl
    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
    cursor-pointer
    overflow-hidden
    group
  "
  // 1. Animasi Gorden Tertutup (Awal)
  initial={{
    opacity: 0,
    y: 30,
    scaleX: 0
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scaleX: 1
  }}
  style={{ transformOrigin: "center" }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ 
    delay: 0.3, 
    duration: 1, 
    ease: [0.16, 1, 0.3, 1] // Custom ease (cubic-bezier) untuk efek dramatis yang mulus
  }}
  // 3. Efek Interaktif (Hover & Tap)
  whileHover={{ 
    scale: 1.05,
    borderColor: "rgba(254, 219, 115, 0.6)", // Border lebih menyala
    boxShadow: "0 25px 60px rgba(254, 219, 115, 0.15)", // Glow emas di belakang
    transition: { duration: 0.3 }
  }}
  whileTap={{ scale: 0.97 }}
>
  {/* Efek Cahaya Lewat (Shine/Glare) saat di-hover */}
  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#FEDB73]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

  {/* Decorative Line */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#FEDB73] to-transparent" />

  <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-[#FEDB73] mb-2 font-bold transition-colors group-hover:text-white">
    Total Prize Pool
  </p>

  <motion.h3 className="text-3xl md:text-5xl xl:text-6xl font-serif font-black text-white tracking-tight drop-shadow-md">
    <span className="text-lg md:text-2xl align-top mr-1 font-light opacity-80 group-hover:opacity-100 transition-opacity">Rp.</span>
    13,500,000
  </motion.h3>

  {/* Decorative Bottom */}
  <div className="flex items-center gap-3 mt-4 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
    <div className="h-[1px] flex-1 bg-gradient-to-l from-[#C09B6F] to-transparent"></div>
    <div className="w-2 h-2 rotate-45 border border-[#FEDB73] group-hover:bg-[#FEDB73] transition-colors"></div>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C09B6F] to-transparent"></div>
  </div>
</motion.div>
      </motion.div>


      {/* --- Side Floating Images --- */}
      {/* UPDATED POSITIONING: 
          Uses responsive sizing (w-24 -> w-48) 
          and responsive positioning to prevent overlap on small screens.
      */}

      {/* Left Column */}
      <SideImage
        src="/images/Hero/Group 5.webp"
        className="top-16 -left-4 md:top-0 md:left-[2%] xl:left-[2%] 2xl:left-[5%] min-[2000px]:left-[15%]"
        delay={0.2}
        rotation={-5}
      />
      <SideImage
        src="/images/Hero/Group 6.webp"
        className="bottom-4 -left-4 md:bottom-0 md:left-[2%] xl:left-[2%] 2xl:left-[5%] min-[2000px]:left-[15%]"
        delay={0.4}
        rotation={5}
      />

      {/* Right Column */}
      <SideImage
        src="/images/Hero/Group 7.webp"
        className="top-16 -right-4 md:top-0 md:right-[2%] xl:right-[2%] 2xl:right-[5%] min-[2000px]:right-[15%]"
        delay={0.3}
        rotation={5}
      />
      <SideImage
        src="/images/Hero/Group 8.webp"
        className="bottom-4 -right-4 md:bottom-0 md:right-[2%] xl:right-[2%] 2xl:right-[5%] min-[2000px]:right-[15%]"
        delay={0.5}
        rotation={-5}
      />
    </section>
  )
}

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
