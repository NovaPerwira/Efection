import React from 'react'
import { motion } from 'framer-motion'

type EffectionIVSectionProps = {
  animate?: boolean
}

type SideImageProps = {
  src: string
  className?: string
  delay?: number
  rotation?: number
}

export default function EffectionIVSection({
  animate = true,
}: EffectionIVSectionProps) {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden bg-[#3b352d] flex flex-col items-center justify-center">
      {/* --- Background Elements --- */}
      
      {/* Vertical Stripes Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="images/Hero/bg.png" alt="" />
      
      </div>

      {/* Central Emblem Silhouette (Decorative Background) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-20 pointer-events-none z-0">
         <img src="images/Hero/logo.webp" alt="" />
      </div>

      {/* --- Main Content --- */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center text-[#f5f1ea]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-wider mb-2 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          EFFECTION IV
        </motion.h1>

        {/* Subtitle: Voices of Society */}
        <motion.h2
          className="text-2xl md:text-4xl font-serif text-[#e2ddd4] mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Voices of Society
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-[#d4cec4] font-light tracking-widest uppercase mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Exploring Culture, Identity, and Change in a <br className="hidden md:block" />
          Globalized World
        </motion.p>

        {/* Prize Pool Section */}
        <motion.div
          className="relative inline-block py-6 px-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Decorative lines/brackets for prize pool */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#b38a3a]/50"></div>
          <p className="text-xs uppercase tracking-widest text-[#b38a3a] mb-2">Up to</p>
          <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md font-sans">
            Rp. 13,500,000
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#8c8579] mt-2">Prize Pool</p>
          
          {/* Bottom decorative bracket simulation */}
          <div className="mt-6 w-24 h-8 border-t-4 border-[#b38a3a]/40 rounded-t-full mx-auto transform rotate-180 opacity-50"></div>
        </motion.div>
      </motion.div>

      {/* --- Side Floating Images --- */}
      {/* Left Column */}
      <SideImage 
        src="/images/Hero/psrt 1.webp" 
        className="top-0 left-0" 
        delay={0.2} 
      />
      <SideImage 
        src="/images/Hero/psrt 3.webp" 
        className="bottom-0 left-0" 
        delay={0.4} 
      />

      {/* Right Column */}
      <SideImage 
        src="/images/Hero/psrt 2.webp" 
        className="top-0 -right-4 " 
        delay={0.3} 
      />
      <SideImage 
        src="/images/Hero/psrt 4.webp" 
        className="bottom-0 -right-6" 
        delay={0.5} 
      />
    </section>
  )
}

function SideImage({ src, className, delay, rotation = 0 }: SideImageProps) {
  return (
    <motion.div
      className={`hidden lg:block absolute w-48 h-64 ${className}`}
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
        {/* Simplified Image Component: No borders, frames, or overlays */}
        <img
          src={src}
          alt="Participant"
          className="w-full h-full object-contain transition-transform duration-500 overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] cursor-pointer z-20 "
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>
    </motion.div>
  )
}



// <Image
//           src={src}
//           alt="Speaker"
//           width={200}
//           height={300}
//           className="absolute w-32 h-48 md:w-40 md:h-56 rounded-lg overflow-hidden border-2 border-[#b38a3a]/30 transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] cursor-pointer z-20 "
//         />