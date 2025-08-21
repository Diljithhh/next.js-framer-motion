"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const SpiralAnimation = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Generate spiral points
  const generateSpiralPoints = (numPoints: number, spirals: number) => {
    const points = []
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * spirals * 2 * Math.PI
      const radius = (i / numPoints) * 200 + 50
      const x = 50 + Math.cos(angle) * radius * 0.002
      const y = 50 + Math.sin(angle) * radius * 0.002
      points.push({ x: `${x}%`, y: `${y}%`, delay: i * 0.02 })
    }
    return points
  }

  const spiralPoints = generateSpiralPoints(200, 3)

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Central Spiral */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-96 h-96"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {spiralPoints.map((point, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                left: point.x,
                top: point.y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.7, 1, 0],
                scale: [0, 1.5, 1, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: point.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Outer Rotating Rings */}
      {[...Array(3)].map((_, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 30 + ringIndex * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div
            className={`rounded-full border border-purple-500/20`}
            style={{
              width: `${300 + ringIndex * 100}px`,
              height: `${300 + ringIndex * 100}px`,
            }}
          >
            {[...Array(12)].map((_, dotIndex) => {
              const angle = (dotIndex / 12) * 2 * Math.PI
              const radius = 150 + ringIndex * 50
              return (
                <motion.div
                  key={dotIndex}
                  className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                  style={{
                    left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                    top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: dotIndex * 0.1 + ringIndex * 0.3,
                    ease: "easeInOut"
                  }}
                />
              )
            })}
          </div>
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${(i * 31) % 100}%`, // Deterministic positioning
            top: `${(i * 17) % 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: (i % 5) + 3, // Deterministic duration (3-7 seconds)
            repeat: Infinity,
            delay: (i % 15) * 0.2, // Deterministic delay
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Center Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}

export { SpiralAnimation }
