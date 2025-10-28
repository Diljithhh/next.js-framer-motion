"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const GeometricNavigation = () => {
  const [activeSection, setActiveSection] = useState("home")

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "My Stack", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "stack", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 backdrop-blur-sm bg-[#030303]/80 border-b border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center"
        >
          <motion.div
            className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/20 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-white font-bold text-base bg-gradient-to-r from-indigo-300 to-rose-300 bg-clip-text text-transparent">D</span>
          </motion.div>
          <span className="text-white font-bold text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent ml-2">DILJITH</span>
        </motion.div>

        {/* Navigation Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden md:flex items-center gap-4 px-4 py-2"
        >
          {navigationItems.map((item, index) => {
            const sectionName = item.href.replace("#", "")
            const isActive = activeSection === sectionName
            return (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
                    isActive
                      ? "text-white bg-white/[0.08] border border-white/20"
                      : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                  )}
                >
                  {item.name}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 rounded-lg border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default GeometricNavigation