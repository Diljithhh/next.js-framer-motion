"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DebugPanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState<string>("Loading...")

  useEffect(() => {
    // Update window size only on client side
    const updateSize = () => {
      setWindowSize(`${window.innerWidth}x${window.innerHeight}`)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🎨
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 w-80 text-white text-sm"
          >
            <h3 className="font-bold mb-3">Design Debug Panel</h3>

            <div className="space-y-2">
              <div>
                <strong>Current Font:</strong> System Sans-Serif
              </div>
              <div>
                <strong>Main Gradient:</strong> Purple 400 → Purple 600
              </div>
              <div>
                <strong>Background:</strong> Black (#000000)
              </div>
              <div>
                <strong>Screen Size:</strong> {windowSize}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/20">
              <p className="text-xs text-white/70">
                Use browser DevTools to inspect the reference site and compare with these values.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DebugPanel
