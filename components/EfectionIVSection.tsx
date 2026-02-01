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
      <div className="absolute w-full h-full inset-0 opacity-15 pointer-events-none">
        <img src="images/Hero/bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Central Emblem Silhouette (Decorative Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0">
         <img src="images/Hero/logo.webp" alt="" className="w-full h-full object-contain opacity-50" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="
          relative z-20 
          w-full max-w-[860px]
          px-4 md:px-8 py-10 md:py-16
          mt-4 md:mt-10
          text-center
          text-[#f5f1ea]
          backdrop-blur-[2px]
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
              text-3xl sm:text-4xl md:text-5xl
              font-serif
              tracking-[0.12em]
              font-bold
              mb-3
              drop-shadow-lg
            "
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
              text-xl md:text-2xl
              font-serif
              text-[#e2ddd4]
              tracking-wide
            "
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
            px-8 py-5 leading-tight
            mt-4 md:mt-0
          "
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Top decorative line */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-full h-[2px] bg-white/50" />

          <p className="text-[10px] uppercase tracking-widest text-white mb-1">
            Up to
          </p>

          <h3
            className="
              text-[24px]
              sm:text-[34px]
              md:text-[40px]
              font-bold
              text-white
              tracking-wide
              leading-none
            "
          >
            Rp. 13,500,000
          </h3>

          <p className="text-[10px] uppercase tracking-widest text-white mt-1">
            Prize Pool
          </p>

          {/* Bottom decorative bracket */}
          <div className="
            mt-3
            w-18 h-5
            border-t-4 border-[#b38a3a]/40
            rounded-t-full
            rotate-180
            opacity-40
          " />
        </motion.div>
      </motion.div>


      {/* --- Side Floating Images --- */}
      {/* UPDATED POSITIONING: 
          Uses responsive sizing (w-24 -> w-48) 
          and responsive positioning to prevent overlap on small screens.
      */}
      
      {/* Left Column */}
      <SideImage 
        src="/images/Hero/psrt 1.webp" 
        className="top-4 -left-4 md:top-0 md:left-0" 
        delay={0.2} 
        rotation={-5}
      />
      <SideImage 
        src="/images/Hero/psrt 3.webp" 
        className="bottom-4 -left-4 md:bottom-0 md:left-0" 
        delay={0.4} 
        rotation={5}
      />

      {/* Right Column */}
      <SideImage 
        src="/images/Hero/psrt 2.webp" 
        className="top-4 -right-4 md:top-0 md:-right-4" 
        delay={0.3} 
        rotation={5}
      />
      <SideImage 
        src="/images/Hero/psrt 4.webp" 
        className="bottom-4 -right-4 md:bottom-0 md:-right-6" 
        delay={0.5} 
        rotation={-5}
      />
    </section>
  )
}

function SideImage({ src, className, delay, rotation = 0 }: SideImageProps) {
  return (
    <motion.div
      // REMOVED "hidden lg:block"
      // Added responsive width/height: w-24 h-32 on mobile -> w-48 h-64 on desktop
      className={`absolute z-10 w-24 h-32 sm:w-32 sm:h-44 md:w-40 md:h-52 lg:w-48 lg:h-64 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
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
            cursor-pointer 
          "
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>
    </motion.div>
  )
}