"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"
import GeometricNavigation from "@/components/geometric-navigation"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { cn } from "@/lib/utils"

const stats = [
  { number: "500+", label: "Businesses Automated", icon: TrendingUp },
  { number: "99.9%", label: "Uptime Guarantee", icon: Award },
  { number: "50+", label: "AI Models Deployed", icon: Zap },
  { number: "24/7", label: "Support Available", icon: Globe }
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & AI Strategist",
    description: "10+ years in AI development with expertise in machine learning and business automation.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    avatar: "AC"
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Lead Engineer",
    description: "Former Google AI researcher specializing in natural language processing and computer vision.",
    gradient: "from-rose-500/20 to-pink-500/20",
    avatar: "SJ"
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Automation",
    description: "Process optimization expert with 15+ years in enterprise workflow transformation.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    avatar: "MR"
  },
  {
    name: "Emily Wang",
    role: "AI Solutions Architect",
    description: "Specializes in custom AI model development and integration for enterprise clients.",
    gradient: "from-amber-500/20 to-orange-500/20",
    avatar: "EW"
  }
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver exactly what your business needs with surgical precision and attention to detail."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge AI technology combined with creative problem-solving approaches."
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside your team as trusted partners in your digital transformation journey."
  }
]

const AboutPage = () => {
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

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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
          delay={0.3}
          width={500}
          height={120}
          rotate={10}
          gradient="from-indigo-500/[0.1]"
          className="left-[-15%] top-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={400}
          height={100}
          rotate={-15}
          gradient="from-rose-500/[0.1]"
          className="right-[-10%] top-[50%]"
        />

        <ElegantShape
          delay={0.9}
          width={300}
          height={80}
          rotate={20}
          gradient="from-violet-500/[0.1]"
          className="left-[5%] bottom-[20%]"
        />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/60 tracking-wide">About Xtract</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Pioneering the Future of
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Business Automation
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
              We&apos;re a team of AI experts, engineers, and business strategists dedicated to transforming
              how companies operate through intelligent automation solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 md:mb-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-rose-500/10 border border-white/10 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-8 h-8 text-white/80" />
                  </motion.div>
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Our Mission
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              To democratize AI automation and make cutting-edge technology accessible to businesses of all sizes.
              We believe that every company should have the power to streamline operations, reduce costs, and
              focus on what truly matters - growing their business and serving their customers.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16"
          >
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={slideInVariants}
                  whileHover={{ y: -5 }}
                  className="group relative p-8 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-gradient-to-br from-white/[0.02] to-transparent hover:border-white/20 transition-all duration-500"
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                Meet Our Team
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative text-center"
              >
                <div className="relative p-6 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-gradient-to-br from-white/[0.02] to-transparent hover:border-white/20 transition-all duration-500">
                  {/* Avatar */}
                  <motion.div
                    className={cn(
                      "w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center font-bold text-xl text-white",
                      "bg-gradient-to-br", member.gradient,
                      "border border-white/20"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {member.avatar}
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-indigo-300 font-medium mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>

                  {/* Sliding highlight */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-rose-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              <span className="relative text-white">Join Our Mission</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
