"use client"

import { motion } from "framer-motion"
import { Zap, Brain, Workflow, BarChart3, Shield, Clock } from "lucide-react"
import GeometricNavigation from "@/components/geometric-navigation"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Brain,
    title: "AI Process Automation",
    description: "Transform manual workflows into intelligent automated systems that learn and adapt to your business needs.",
    features: ["Smart Document Processing", "Predictive Analytics", "Intelligent Routing"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconGradient: "from-indigo-400 to-purple-400"
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description: "Streamline complex business processes with AI-driven insights and automated decision-making capabilities.",
    features: ["Process Mining", "Bottleneck Detection", "Real-time Optimization"],
    gradient: "from-rose-500/20 to-pink-500/20",
    iconGradient: "from-rose-400 to-pink-400"
  },
  {
    icon: BarChart3,
    title: "Data Intelligence",
    description: "Extract actionable insights from your data with advanced AI models and predictive analytics.",
    features: ["Real-time Dashboards", "Predictive Modeling", "Automated Reporting"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconGradient: "from-cyan-400 to-blue-400"
  },
  {
    icon: Zap,
    title: "Lead Generation AI",
    description: "Automate your sales pipeline with intelligent lead scoring and personalized outreach campaigns.",
    features: ["Smart Lead Scoring", "Automated Outreach", "Conversion Optimization"],
    gradient: "from-amber-500/20 to-orange-500/20",
    iconGradient: "from-amber-400 to-orange-400"
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    description: "Ensure regulatory compliance with automated monitoring and intelligent risk assessment systems.",
    features: ["Risk Assessment", "Compliance Monitoring", "Audit Automation"],
    gradient: "from-emerald-500/20 to-green-500/20",
    iconGradient: "from-emerald-400 to-green-400"
  },
  {
    icon: Clock,
    title: "24/7 AI Support",
    description: "Provide round-the-clock customer support with intelligent chatbots and automated issue resolution.",
    features: ["Intelligent Chatbots", "Automated Ticketing", "Sentiment Analysis"],
    gradient: "from-violet-500/20 to-purple-500/20",
    iconGradient: "from-violet-400 to-purple-400"
  }
]

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const slideVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
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
          delay={0.5}
          width={400}
          height={100}
          rotate={15}
          gradient="from-indigo-500/[0.08]"
          className="left-[-10%] top-[20%]"
        />

        <ElegantShape
          delay={0.7}
          width={300}
          height={80}
          rotate={-20}
          gradient="from-rose-500/[0.08]"
          className="right-[-5%] top-[60%]"
        />

        <ElegantShape
          delay={0.9}
          width={200}
          height={60}
          rotate={25}
          gradient="from-violet-500/[0.08]"
          className="left-[10%] bottom-[15%]"
        />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
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
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide">AI Automation Services</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Transform Your Business
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                with AI Automation
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of artificial intelligence to streamline operations,
              boost productivity, and drive unprecedented growth for your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={slideVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  <div className={cn(
                    "relative p-8 rounded-2xl border border-white/[0.08] backdrop-blur-sm",
                    "bg-gradient-to-br", service.gradient,
                    "hover:border-white/20 transition-all duration-500"
                  )}>
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                        "bg-gradient-to-br", service.gradient,
                        "border border-white/20"
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <IconComponent className={cn(
                        "w-6 h-6 bg-gradient-to-r bg-clip-text text-transparent",
                        service.iconGradient
                      )} style={{ color: 'white' }} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center text-sm text-white/60"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-full mr-3" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Sliding highlight */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ transform: "skewX(-20deg)" }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-rose-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              <span className="relative text-white">Start Your AI Transformation</span>
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

export default ServicesPage
