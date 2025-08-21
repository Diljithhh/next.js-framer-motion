"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import GeometricNavigation from "@/components/geometric-navigation"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@xtract.ai",
    description: "Get in touch via email",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Speak with our team",
    gradient: "from-rose-500/20 to-pink-500/20"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "San Francisco, CA",
    description: "Our headquarters",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri, 9AM-6PM PST",
    description: "We're here to help",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
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
          delay={0.4}
          width={600}
          height={140}
          rotate={8}
          gradient="from-indigo-500/[0.08]"
          className="left-[-20%] top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={400}
          height={100}
          rotate={-12}
          gradient="from-rose-500/[0.08]"
          className="right-[-15%] top-[60%]"
        />

        <ElegantShape
          delay={1}
          width={300}
          height={80}
          rotate={18}
          gradient="from-violet-500/[0.08]"
          className="left-[8%] bottom-[10%]"
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
              <MessageCircle className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/60 tracking-wide">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Let&apos;s Transform
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Your Business Together
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your operations with AI automation?
              Let&apos;s discuss how we can help you streamline processes and boost productivity.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-gradient-to-br from-white/[0.02] to-transparent hover:border-white/20 transition-all duration-500"
                >
                  <motion.div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
                      "bg-gradient-to-br", info.gradient,
                      "border border-white/20"
                    )}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-indigo-300 font-medium mb-1">{info.content}</p>
                  <p className="text-white/60 text-sm">{info.description}</p>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative p-8 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-gradient-to-br from-white/[0.02] to-transparent">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-medium text-white/80">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-medium text-white/80">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-white/80">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
                      placeholder="Your company"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-white/80">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-6 py-4 rounded-xl font-semibold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400 to-rose-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />

                    <span className="relative text-white flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>

                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        style={{ transform: "skewX(-20deg)" }}
                      />
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Our team of AI experts is ready to discuss your automation needs and
                  create a custom solution that fits your business perfectly.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/20">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Free Consultation</h3>
                    <p className="text-white/60 text-sm">Get a personalized assessment of your automation opportunities</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-rose-500/20 to-pink-500/20 flex items-center justify-center border border-white/20">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Quick Response</h3>
                    <p className="text-white/60 text-sm">We typically respond within 24 hours to all inquiries</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-white/20">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Custom Solutions</h3>
                    <p className="text-white/60 text-sm">Tailored AI automation solutions designed for your specific needs</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
