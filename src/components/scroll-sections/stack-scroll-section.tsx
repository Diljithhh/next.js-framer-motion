"use client"

import { motion } from "framer-motion"
import { Code, Star, Shield } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"

const StackScrollSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  const techStack = [
    { name: "Flutter", icon: "F", color: "from-white-400 to-blue-500" },
    { name: "FastAPI", icon: "F", color: "from-white-500 to-green-600" },
    { name: "Google Cloud", icon: "G", color: "from-white-400 to-blue-500" },
    { name: "DynamoDB", icon: "D", color: "from-white-500 to-pink-600" },
    { name: "Firestore", icon: "F", color: "from-white-500 to-orange-600" },
    { name: "Next.js", icon: "N", color: "from-white-600 to-gray-700" },
    { name: "Docker", icon: "D", color: "from-white-500 to-red-600" },
    { name: "AWS S3", icon: "A", color: "from-white-500 to-salmon-600" },
  ]

  return (
    <section id="stack" className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-black">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05]" />
        <ElegantShape delay={0.3} width={600} height={140} rotate={12} gradient="from-indigo-500/[0.08]" className="left-[-20%] top-[15%]" />
        <ElegantShape delay={0.6} width={500} height={120} rotate={-15} gradient="from-rose-500/[0.08]" className="right-[-15%] top-[60%]" />
        <ElegantShape delay={0.9} width={300} height={80} rotate={25} gradient="from-purple-500/[0.06]" className="left-[10%] bottom-[20%]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl w-full text-center space-y-20">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12"
            >
              <Code className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/80 tracking-wide font-medium">Tech Arsenal</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-center mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">My Technology</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Toolkit</span>
            </h2>


          </motion.div>


          {/* Tech Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.05, y: -3 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm p-6 h-32 flex flex-col items-center justify-center">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{tech.icon}</span>
                  </div>

                  {/* Name */}
                  <span className="text-white/90 font-semibold text-sm text-center group-hover:text-white transition-colors leading-tight">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center pt-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-white/20 backdrop-blur-sm">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-base">
                {techStack.length} Core Technologies
              </span>
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white/80 text-sm">
                Production Ready
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default StackScrollSection
