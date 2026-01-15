'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StickyZoomSection({ children }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Zoom ONLY, no vertical movement
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky layer */}
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  )
}
