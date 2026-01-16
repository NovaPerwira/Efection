'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function EffectionIVSection({animate}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#3b352d]">
      {/* Background pattern */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/images/1.jpg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-40"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center text-[#f5f1ea]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#b38a3a] text-sm px-4 py-1 rounded-full mb-8"
        >
          <span className="text-xs">⚡</span>
          <span className="font-medium">#1 Voices of Society</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          EFFECTION IV
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-sm md:text-base text-[#e2ddd4] leading-relaxed mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Exploring Culture, Identity, and Change in a <br className="hidden md:block" />
          Globalized World
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex justify-center gap-10 md:gap-16 mb-20"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <Stat value="1K+" label="Peserta" />
          <Stat value="30K+" label="Peserta" />
          <Stat value="4.9 ★" label="Rating Peserta" />
        </motion.div>
      </motion.div>

      {/* Side images */}
      <SideImage src="/images/1.jpg" className="top-16 left-6" delay={0} />
      <SideImage src="/images/1.jpg" className="bottom-20 left-10" delay={0.4} />
      <SideImage src="/images/1.jpg" className="top-20 right-6" delay={0.2} />
      <SideImage src="/images/1.jpg" className="bottom-24 right-10" delay={0.6} />
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <motion.div
      className="text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
    >
      <p className="text-xl md:text-2xl font-semibold">{value}</p>
      <p className="text-xs md:text-sm text-[#d4cec4]">{label}</p>
    </motion.div>
  )
}

function SideImage({ src, className, delay }) {
  return (
    <motion.div
      className={`hidden lg:block absolute z-20 w-36 xl:w-44 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -14, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.6 },
        y: {
          delay,
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <div className="relative">
        {/* Frame */}
        <Image
          src="/images/1.jpg"
          alt="Frame"
          width={220}
          height={320}
          className="absolute inset-0 z-10"
        />

        {/* Photo */}
        <Image
          src={src}
          alt="Speaker"
          width={200}
          height={300}
          className="relative z-0 object-cover rounded-sm"
        />
      </div>
    </motion.div>
  )
}
