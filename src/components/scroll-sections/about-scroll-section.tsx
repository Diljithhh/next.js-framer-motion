"use client"
import { motion } from "framer-motion"
import { Users, Target, Zap, Award } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"

const easeInOut = [0.25, 0.4, 0.25, 1] as const                     // ① tuple cast fixes the TS error
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
              {/* <Users className="w-4 h-4 text-indigo-400" /> */}
              <span className="text-sm text-white/80 tracking-wide font-medium">About Me</span>
            </motion.div>



            {/* <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">Software Developer</span><br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">& AI Enthusiast</span>
            </h2> */}
          </motion.div>
          {/* <div className="h-20"></div> */}

          {/* intro */}
          {/* <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-5xl mx-auto text-center">
            Full Stack Developer with expertise in Flutter, FastAPI, PostgreSQL, AWS, and GCP. Experienced in AI & NLP integrations, cloud deployments, AI agents and scalable backend systems.
          </p> */}

          {/* <div className="h-20"></div> */}

          {/* mission */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: .8, delay: .6 }} className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">My Approach</span>
            </h3>

            {/* <motion.div
              custom={0.5}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-8 md:h-12"
            /> */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center">
              I focus on building intelligent solutions that solve real-world problems.
            </p>
          </motion.div>
{/*
          <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-8 md:h-12"
          /> */}
          <div className="h-10"></div>

          {/* values */}
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Problem Solving */}
            <motion.div variants={item} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500/20 to-rose-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                <Target className="w-8 h-8 text-indigo-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Problem Solving</h4>
              <p className="text-white/60 leading-relaxed">
                Analytical thinking and systematic debugging approach to tackle complex technical challenges and optimize system performance.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div variants={item} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                <Zap className="w-8 h-8 text-rose-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Innovation</h4>
              <p className="text-white/60 leading-relaxed">
                AI/ML integration and modern technology adoption to create cutting-edge solutions that drive business growth.
              </p>
            </motion.div>

            {/* Quality */}
            <motion.div variants={item} className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-white/10">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">Quality</h4>
              <p className="text-white/60 leading-relaxed">
                Performance optimization and best practices to deliver high-quality, scalable software solutions.
              </p>
            </motion.div>

          </motion.div>

          <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-8 md:h-12"
          />
          <div className="h-20"></div>

        </div>
      </div>
    </section>
  )
}

export default AboutScrollSection
