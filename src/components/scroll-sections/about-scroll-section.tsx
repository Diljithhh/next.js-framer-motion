"use client"
import { motion } from "framer-motion"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"

const easeInOut = [0.25, 0.4, 0.25, 1] as const                     // ① tuple cast fixes the TS error

const AboutScrollSection = () => {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: .15, delayChildren: .3 } } }
  const item       = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: .8, ease: easeInOut } } }

  return (
    <section id="about" className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-black">
      {/* decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
        <ElegantShape delay={.3} width={500} height={120} rotate={10}  gradient="from-indigo-500/[0.1]" className="left-[-15%] top-[10%]" />
        <ElegantShape delay={.6} width={400} height={100} rotate={-15} gradient="from-rose-500/[0.1]"   className="right-[-10%] top-[50%]" />
      </div>

      {/* ⇢ make sure BOTH classes below are present and NO ml-[20px] remains */}
      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">      {/* centred flex wrapper */}
        <div className="max-w-6xl w-full text-center space-y-32">                          {/* identical to Services */}

          {/* hero */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: .8, delay: .2 }}>
            <motion.div initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        transition={{ delay: .1, duration: .6 }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12">
              <Users className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/80 tracking-wide font-medium">About Us</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">Pioneering the Future of</span><br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Business Automation</span>
            </h2>
          </motion.div>
          <div className="h-20"></div>

          {/* intro */}
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-5xl mx-auto text-center">  {/* ② add text-center */}
            We&apos;re a team of AI experts, engineers, and business strategists dedicated to transforming
            how companies operate through intelligent automation solutions.
          </p>

          {/* stats */}
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {/* …unchanged… */}
          </motion.div>
          <div className="h-20"></div>

          {/* mission */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: .8, delay: .6 }} className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Our Mission</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center">  {/* centred */}
              To democratize AI automation and make cutting-edge technology accessible to businesses of all sizes.
              We believe that every company should have the power to streamline operations, reduce costs and focus
              on what truly matters – growing their business and serving their customers.
            </p>
          </motion.div>

          {/* values */}
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* …unchanged… */}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutScrollSection
