"use client"

import { motion } from "framer-motion"
import { Circle } from "lucide-react"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { cn } from "@/lib/utils"

const FluidHeroSection = () => {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    }

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Fluid Background */}
            <SplashCursor
                SIM_RESOLUTION={128}
                DYE_RESOLUTION={1440}
                DENSITY_DISSIPATION={3.5}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                PRESSURE_ITERATIONS={20}
                CURL={3}
                SPLAT_RADIUS={0.2}
                SPLAT_FORCE={6000}
                SHADING={true}
                COLOR_UPDATE_SPEED={10}
                BACK_COLOR={{ r: 0, g: 0, b: 0 }}
                TRANSPARENT={true}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
                <div className="max-w-6xl w-full text-center">
                    {/* Available Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-16 backdrop-blur-sm"
                    >
                        <Circle className="h-2 w-2 fill-rose-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            Available for Opportunities
                        </span>
                    </motion.div>

                    <motion.div
                        custom={0.5}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-8 md:h-12"
                    />

                    {/* Main Heading */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 tracking-tight leading-[1.1] text-center w-full flex flex-col items-center justify-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                                Hi 👋
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block text-center">
                                I&apos;m Diljith
                            </span>


                            <motion.div
                                custom={2.5}
                                variants={fadeUpVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-center mb-8 md:mb-12"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                                    a 🕵🏻‍♂️ curious
                                </span>
                            </motion.div>
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block text-center"
                                )}
                            >
                                Software Developer
                            </span>
                        </h1>
                    </motion.div>

                    {/* Curious Text - Pop-in Animation */}


                    {/* Description */}
                    {/* <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 md:mb-16 text-center font-light tracking-wide max-w-3xl mx-auto">
                            Specialized in Flutter, FastAPI, AI & Cloud Technologies. Passionate about building intelligent solutions and optimizing performance.
                        </p>
                    </motion.div> */}

                    {/* CTA Buttons */}
                    {/* <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="/resume.pdf"
                            download="Diljith_VD_Resume.pdf"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                inline-flex items-center justify-center
                px-8 py-4
                rounded-xl font-semibold text-lg text-white
                bg-gradient-to-r from-purple-600 to-purple-700
                hover:from-purple-700 hover:to-purple-800
                transition-all duration-300 shadow-lg shadow-purple-600/25
                backdrop-blur-sm
              "
                        >
                            Download Resume
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                inline-flex items-center justify-center
                px-8 py-4
                rounded-xl font-semibold text-lg text-white
                border-2 border-white/20 hover:border-white/30
                bg-transparent hover:bg-white/5
                transition-all duration-300 backdrop-blur-sm
              "
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div> */}
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none z-5" />
        </section>
    )
}

export default FluidHeroSection
