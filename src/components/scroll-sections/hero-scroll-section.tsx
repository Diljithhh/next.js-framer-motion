"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { FloatingPathsBackground } from "@/components/ui/floating-paths-background"
import { cn } from "@/lib/utils"


const HeroScrollSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as  [number, number, number, number],
      },
    }),
  }

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
        <div className="max-w-6xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-16"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">
              Xtract AI Agency
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 tracking-tight leading-[1.1] text-center w-full flex flex-col items-center justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block text-center">
                Intelligent Automation
              </span>
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block text-center"
                )}
              >
                for Modern Businesses
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 md:mb-16 text-center font-light tracking-wide max-w-3xl mx-auto ">
              Transform your business operations with cutting-edge AI automation.

            </p>
            {/* <div className="h-20"></div> */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 md:mb-16 text-center leading-relaxed font-light tracking-wide max-w-3xl mx-auto">
              Streamline workflows and  boost productivity.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-white/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-transparent hover:border-white/50 transition-all duration-300 backdrop-blur-sm bg-transparent"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </div>

            {/* Floating Paths Background Animation */}
      <motion.div
        custom={4}
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingPathsBackground
          className="w-full h-full opacity-20 hover:opacity-30 transition-opacity duration-500"
        />
      </motion.div>
      <div className="h-20"></div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  )
}

export default HeroScrollSection
