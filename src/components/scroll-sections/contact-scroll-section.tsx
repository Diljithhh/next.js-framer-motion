"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"
import { cn } from "@/lib/utils"
import emailjs from "emailjs-com"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "diljithv7@gmail.com",
    description: "Get in touch via email",
    gradient: "from-indigo-500/20 to-purple-500/20"
  }
]

const ContactScrollSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // EmailJS configuration - replace with your actual values
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID"
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "YOUR_USER_ID"

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", company: "", message: "" })
      })
      .catch((err) => {
        console.error(err)
        alert("Failed to send message.")
      })
      .finally(() => setIsSubmitting(false))
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

  return (
    <section id="contact" className="relative min-h-screen py-32 md:py-40 overflow-hidden mt-32">
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
      </div>

      <div className="relative z-10 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20 md:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
            >
              <MessageCircle className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/60 tracking-wide">Get In Touch</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Send us a message
              </span>
            </h2>
          </motion.div>

          {/* Contact Info Cards
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center mb-20 md:mb-24"
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

                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </motion.div>
              )
            })}
          </motion.div> */}

          <div className="h-20"></div>
          <div className="flex justify-center px-6 md:px-12 py-16">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="relative max-w-2xl w-full"
  >
    <div className="relative p-10 md:p-14 rounded-2xl border border-white/[0.08] backdrop-blur-sm bg-gradient-to-br from-white/[0.02] to-transparent shadow-lg">

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 ml-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80 ml-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80 ml-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
            placeholder="Your company"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80 ml-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300 resize-none"
            placeholder="Tell us about your automation needs..."
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full px-6 py-4 rounded-xl font-semibold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative text-white flex items-center justify-center gap-2">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </motion.button>
      </form>
    </div>
  </motion.div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScrollSection
