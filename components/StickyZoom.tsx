'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef, useEffect } from 'react'

type StickyZoomSectionProps = {
  children: ReactNode
  onZoomComplete?: () => void
  threshold?: number
}

export default function StickyZoomSection({ children, onZoomComplete, nextSection }: { children: ReactNode, onZoomComplete?: () => void, nextSection?: ReactNode }) {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Winner Section Animations
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0])

  // Next Section Parallax Animation (Up from bottom)
  // Starts lower (50% down) and moves to 0% as we scroll
  // Opacity fade-in ensures it doesn't pop in abruptly if scale/fade timing is off
  const nextSectionY = useTransform(scrollYProgress, [0.3, 1], ['50%', '0%'])
  const nextSectionScale = useTransform(scrollYProgress, [0.3, 1], [0.95, 1])
  const nextSectionOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Next Section (Background Layer) */}
        {/* It sits absolutely behind the winner section */}
        <motion.div
          style={{ y: nextSectionY, scale: nextSectionScale, opacity: nextSectionOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center will-change-transform"
        >
          {nextSection}
        </motion.div>

        {/* Winner Section (Foreground Layer) */}
        <motion.div
          style={{ scale, opacity, pointerEvents: useTransform(scrollYProgress, (v) => v > 0.9 ? 'none' : 'auto') }}
          className="relative z-10 w-full h-full flex items-center justify-center will-change-transform"
        >
          {children}
        </motion.div>

      </div>
    </section>
  )
}
