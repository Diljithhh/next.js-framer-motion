"use client"

import { motion } from "framer-motion"

const ServicesScrollSection = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
        <div className="max-w-6xl text-center space-y-32">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-16"
            >
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide">Our Services</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                AI Solutions That Take Your
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block">
                Business to the Next Level
              </span>
            </h2>
          </motion.div>
          <div className="h-20"></div>


          {/* Services Container */}
          <div className="w-full space-y-24 md:space-y-32">

            {/* Business Data Analytics using PowerBI */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-12"
            >

              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-white">Business Data Analytics using PowerBI</h3>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Transform raw data into actionable insights with stunning PowerBI dashboards that drive smarter business decisions.
              </p>
            </motion.div>
            <div className="h-20"></div>

            {/* Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-300">Workflow Automation</h3>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Streamline operations and eliminate repetitive tasks with intelligent automation solutions that scale with your business.
              </p>
            </motion.div>
            <div className="h-20"></div>


            {/* AI Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-indigo-300">AI Assistant</h3>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                Empower your team with intelligent AI assistants that understand your business and provide instant, accurate support 24/7.
              </p>
            </motion.div>
            <div className="h-20"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesScrollSection
