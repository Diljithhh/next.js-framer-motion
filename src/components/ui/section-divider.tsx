"use client"

import { motion } from "framer-motion"

const SectionDivider = () => {
  return (
    <div className="relative py-16 md:py-20 overflow-hidden">
      {/* Gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${20 + (i * 13) % 60}%`, // Deterministic positioning
            top: `${40 + (i * 7) % 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + (i % 3), // Deterministic duration (3-5 seconds)
            repeat: Infinity,
            delay: i * 0.3, // Deterministic delay
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default SectionDivider
