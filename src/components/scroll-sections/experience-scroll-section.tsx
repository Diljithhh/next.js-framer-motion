"use client"

import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1] as const
      }
    }
  }

  const experiences = [
    {
      type: "work",
      title: "Software Developer",
      company: "Joy Alukkas Money Exchange",
      location: "Thrissur, Kerala",
      period: "2025 - Present",
      icon: Briefcase,
      achievements: [
        "Flutter Developer for the mobile app of Joy Alukkas Money Exchange",
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      type: "work",
      title: "Software Developer",
      company: "Pixelbrahma",
      location: "Remote",
      period: "2023 - 2025",
      icon: Briefcase,
      achievements: [
        "Optimized chatbot performance by reducing response time by 30% through efficient integration",
        "Developed an AI recommendation engine for a food discovery app, increasing user engagement by 25% using VectorDB",
        "Improved deployment efficiency by automating Dockerized workflows on GCP Cloud Run, reducing deployment time by 40%",
        "Designed scalable PostgreSQL databases with Alembic migrations, enhancing database query performance by 20%",
        "Reduced app load time by 35% while managing high-volume image uploads on AWS S3",
        "Integrated NLP-to-SQL models (Gemma 7B & 3B) for dynamic SQL query generation, enabling faster data retrieval with NLP in a chat interface"
      ],
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      type: "work",
      title: "Software Developer",
      company: "Tvast Software Solutions",
      location: "Bangalore",
      period: "2022 - 2023",
      icon: Briefcase,
      achievements: [
        "Worked in product-based company under Tvast Being the parent (BeingTheParent.com)",
        "Resolved over 50 critical production bugs, improving app stability and reducing crash rates by 15%",
        "Contributed to feature development for BeingTheParent.com, increasing user retention by 10% through new functionalities",
        "Streamlined REST API integrations using Postman and backend collaboration, reducing API response errors by 25%"
      ],
      color: "from-rose-500/20 to-pink-500/20"
    },
    {
      type: "work",
      title: "Freelance Software Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2021 - 2022",
      icon: Briefcase,
      achievements: [
        "Built an entire Business Solution app (web/android/ios) for a wedding studio business",
        "Used AWS S3 for huge image sharing around 30GB, optimized performance by chunking of data",
        "Handled staff and business logic for comprehensive wedding studio management",
        "App URL: the-foto.web.app"
      ],
      color: "from-green-500/20 to-emerald-500/20"
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



      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
        <div className="max-w-6xl w-full text-center space-y-32">

          {/* <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="h-8 md:h-5"
          /> */}

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}


          >
            <div className="flex items-center gap-2"> </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12"
            >


              {/* <Briefcase className="w-4 h-4 text-indigo-400" /> */}
              <span className="text-sm text-white/80 tracking-wide font-medium">Experience</span>
            </motion.div>

            {/* <motion.div
                  custom={0.5}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-8 md:h-5"
                /> */}

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">My Professional</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Journey</span>
            </h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/30 via-rose-500/30 to-purple-500/30" />

            {experiences.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={item}
                className="relative mb-32 md:mb-40"
              >
                {/* Timeline dot */}
                {/* <div className="absolute left-6 md:left-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-rose-500 rounded-full z-10" /> */}

                {/* Content card */}
                <div className="ml-16 md:ml-0 md:w-full md:px-5">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                  >

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} border border-white/10 flex items-center justify-center flex-shrink-0`}>
                        <exp.icon className="w-6 h-6 text-white/80" />
                      </div>


                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{exp.title}</h3>


                        <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-2">
                          {exp.company}
                          {exp.company === "Self-Employed" && exp.achievements[3]?.includes("the-foto.web.app") && (
                            <a
                              href="https://the-foto.web.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-indigo-200 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>


                        <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          {/* <div className="w-2.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" /> */}
                          <p className="text-white/70 leading-relaxed text-sm md:text-base pl-4">
                            {achievement}
                          </p>
                        </div>
                      ))}

                    </div>
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceScrollSection
