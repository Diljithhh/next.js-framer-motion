"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, Award, Users, ExternalLink, Star } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"

const ExperienceScrollSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  // Simplified experience data
  const experienceData = {
    totalYears: "4+ Years",
    title: "Full Stack Mobile App Developer",
    subtitle: "Flutter & Cloud based solutions",
    summary: "",
    stats: [
      { label: "Projects Completed", value: "5+", icon: Code },
      { label: "Technologies Mastered", value: "10+", icon: Award },
      { label: "Users Impacted", value: "5K+", icon: Users }
    ]
  }

  // Products data
  const products = [
    {
      name: "The Foto Studio",
      description: "Complete business solution for wedding studios with staff management, client booking, and image sharing",
      tech: ["Flutter", "AWS S3", "Firebase", "Web/iOS/Android"],
      url: "https://the-foto.web.app",
      image: "📸",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "AI Food Discovery App",
      description: "AI-powered recommendation engine for food discovery with VectorDB integration",
      tech: ["FastAPI", "VectorDB", "AI/ML", "PostgreSQL"],
      image: "🍽️",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Aaghosham",
      description: "A Flutter app which shows nearby local celebrations and events in Kerala",
      tech: ["Flutter", "Firebase", "Google Maps API", "Google Places API","Android"],
      image: "🎉",
      color: "from-purple-500/20 to-pink-500/20"
    },
  ]

  return (
    <section id="experience" className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-black">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
        <ElegantShape delay={0.3} width={500} height={120} rotate={10} gradient="from-indigo-500/[0.1]" className="left-[-15%] top-[10%]" />
        <ElegantShape delay={0.6} width={400} height={100} rotate={-15} gradient="from-rose-500/[0.1]" className="right-[-10%] top-[50%]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl w-full text-center space-y-32">

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
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/80 tracking-wide font-medium">Experience & Products</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">My Professional</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Journey</span>
            </h2>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              {/* Experience Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-rose-500/20 border border-white/20 mb-6">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-2xl font-bold text-white">{experienceData.totalYears}</span>
                  <span className="text-white/60">of Experience</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
                  {experienceData.title}
                </h3>
                <p className="text-xl text-indigo-300 font-medium mb-8 text-center">
                  {experienceData.subtitle}
                </p>

                {/* Summary - Now properly centered */}
                <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto text-center">
                  {experienceData.summary}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experienceData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={item}
                    className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1 text-center">{stat.value}</div>
                    <div className="text-white/60 text-sm text-center">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Products Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                  Featured Products
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} border border-white/10 flex items-center justify-center mb-4 text-2xl mx-auto`}>
                    {product.image}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 text-center">{product.name}</h4>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 text-center">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {product.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200 transition-colors text-sm font-medium justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceScrollSection