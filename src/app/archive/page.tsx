"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Archive, ArrowRight } from "lucide-react"
import GeometricNavigation from "@/components/geometric-navigation"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { cn } from "@/lib/utils"

const archivedSections = [
  {
    title: "Original Hero Section",
    description: "The initial Xtract hero section with purple theme and floating elements",
    href: "/spiral",
    status: "Available",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    title: "Spiral Animation",
    description: "Beautiful spiral animation page with rotating geometric elements",
    href: "/spiral",
    status: "Available",
    gradient: "from-indigo-500/20 to-cyan-500/20"
  },
  {
    title: "Geometric Hero Demo",
    description: "Original geometric hero section before integration",
    href: "/hero",
    status: "Available",
    gradient: "from-rose-500/20 to-pink-500/20"
  }
]

const ArchivePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#030303] overflow-hidden">
      <GeometricNavigation />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

        <ElegantShape
          delay={0.4}
          width={500}
          height={120}
          rotate={10}
          gradient="from-indigo-500/[0.08]"
          className="left-[-15%] top-[20%]"
        />

        <ElegantShape
          delay={0.7}
          width={400}
          height={100}
          rotate={-15}
          gradient="from-rose-500/[0.08]"
          className="right-[-10%] top-[70%]"
        />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Archive className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/60 tracking-wide">Design Archive</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Previous Designs
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                & Explorations
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Access our previous design iterations and experimental sections.
              These showcase the evolution of our design language and creative explorations.
            </p>
          </motion.div>

          {/* Archive Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {archivedSections.map((section) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Link href={section.href} className="block">
                  <div className={cn(
                    "relative p-8 rounded-2xl border border-white/[0.08] backdrop-blur-sm",
                    "bg-gradient-to-br", section.gradient,
                    "hover:border-white/20 transition-all duration-500"
                  )}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">
                            {section.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-xs font-medium">
                            {section.status}
                          </span>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      <motion.div
                        className="ml-6 p-3 rounded-xl bg-white/[0.05] border border-white/[0.1] group-hover:bg-white/[0.1] transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Sliding highlight */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ transform: "skewX(-20deg)" }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Back */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-rose-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
                <span className="relative text-white">Back to Home</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ transform: "skewX(-20deg)" }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ArchivePage
