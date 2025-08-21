// ARCHIVED: Original navigation component
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
// import { cn } from "@/lib/utils"

const OriginalNavigation = () => {
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Spiral", href: "/spiral" },
    { name: "Hero", href: "/hero" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">X</span>
          </div>
          <span className="text-white font-bold text-xl">XTRACT</span>
        </motion.div>

        {/* Navigation Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden md:flex items-center space-x-8"
        >
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.5, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
        >
          Book a call
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default OriginalNavigation
