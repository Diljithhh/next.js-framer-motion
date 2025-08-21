"use client"

import { motion } from "framer-motion"
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react"
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

const AboutScrollSection = () => {
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
    <section id="about" className="relative min-h-screen py-32 md:py-40 overflow-hidden mt-32">
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
      </div>

      <div className="relative z-10 px-6 md:px-8 lg:px-12 ml-[20px]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-32"
          >
            <div className="h-20"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12"
            >
              <Users className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/80 tracking-wide font-medium">About Us</span>
            </motion.div>
            <div className="h-10"></div>


            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                Pioneering the Future of
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                Business Automation
              </span>
            </h2>
            <div className="h-20"></div>

            {/* <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light text-center"> */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light max-w-5xl mx-auto text-center">

  We&apos;re a team of AI experts, engineers, and business strategists dedicated to transforming
  how companies operate through intelligent automation solutions.
</p>

          </motion.div>
          <div className="h-10"></div>
          {/* <div className="h-20"></div> */}


          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-32"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="text-center group"
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 border border-white/20 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-9 h-9 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-white mb-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-white/70 text-base font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
          <div className="h-20"></div>


          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto text-center mb-32"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                Our Mission
              </span>
            </h3>

            {/* SizedBox equivalent - height 10 for column layout */}
            <div className="h-[10px]"></div>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mx-auto
            md:px-8 lg:px-12 text-center">
              <span>To democratize AI au</span>
              {/* SizedBox equivalent - width 20 between text elements */}
              <span className="inline-block w-[20px]"></span>
              <span>tomation and make cutting-edge technology accessible to businesses of all sizes.
              We believe that every company should have the power to streamline operations, reduce costs, and
              focus on what truly matters - growing their business and serving their customers.</span>
            </p>
          </motion.div>
          <div className="h-20"></div>

          {/* Values Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32"
          >
            {values.map((value) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="group relative p-10 rounded-3xl border border-white/[0.1] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/25 transition-all duration-500"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br from-indigo-500/30 to-rose-500/30 border border-white/30"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  <h4 className="text-2xl font-bold text-white mb-6">{value.title}</h4>
                  <p className="text-white/75 leading-relaxed text-lg">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Team Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
                Meet Our Team
              </span>
            </h3>
          </motion.div>
          <div className="h-20"></div> */}


          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto"
          >
              {team.slice(0, 4).map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative text-center"
              >
                <div className="relative p-8 rounded-3xl border border-white/[0.1] backdrop-blur-sm bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/25 transition-all duration-500">
                  <motion.div
                    className={cn(
                      "w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center font-bold text-2xl text-white",
                      "bg-gradient-to-br", member.gradient,
                      "border border-white/30"
                    )}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {member.avatar}
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3">{member.name}</h4>
                  <p className="text-indigo-300 font-medium mb-6 text-lg">{member.role}</p>
                  <p className="text-white/70 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div> */}
          <div className="h-20"></div>

        </div>
      </div>
    </section>
  )
}

export default AboutScrollSection
