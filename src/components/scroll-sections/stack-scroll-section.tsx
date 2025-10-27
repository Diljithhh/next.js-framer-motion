"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Rocket, Monitor } from "lucide-react"
import { ElegantShape } from "@/components/ui/elegant-shape"

const StackScrollSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }
    }
  }

  const techStack = {
    frontend: [
      { name: "TypeScript", icon: "TS", color: "from-white-500 to-blue-600" },
      { name: "React", icon: "⚛", color: "from-white-400 to-cyan-500" },
      // { name: "Angular", icon: "A", color: "from-red-500 to-red-600" },
      // { name: "Tailwind CSS", icon: "T", color: "from-teal-400 to-teal-500" },
      // { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-500" },
      { name: "Next.js", icon: "N", color: "from-gray-600 to-green-700" },
      // { name: "HTML5", icon: "H", color: "from-orange-500 to-orange-600" },
      // { name: "CSS3", icon: "C", color: "from-blue-400 to-blue-500" },
      // { name: "Material UI", icon: "M", color: "from-blue-600 to-blue-700" },
      // { name: "Bootstrap", icon: "B", color: "from-purple-500 to-purple-600" }
      { name: "Flutter ", icon: "F", color: "from-white-500 to-blue-600" },
    ],
    backend: [
      // { name: "C#", icon: "C#", color: "from-purple-500 to-purple-600" },
      // { name: ".NET", icon: ".NET", color: "from-purple-600 to-purple-700" },
      // { name: "Node.js", icon: "N", color: "from-green-500 to-green-600" },
      { name: "FastAPI", icon: "F", color: "from-white-500 to-yellow-600" },
      // { name: "C++", icon: "C++", color: "from-blue-600 to-blue-700" },
      { name: "Node.js", icon: "N", color: "from-white-400 to-green-500" }
    ],
    database: [
      { name: "PostgreSQL", icon: "P", color: "from-blue-600 to-blue-700" },
      { name: "MongoDB", icon: "M", color: "from-green-500 to-white-600" },
      { name: "Firestore", icon: "F", color: "from-white-500 to-yellow-600" },
      { name: "DynamoDB", icon: "D", color: "from-orange-500 to-white-600" },
      { name: "Supabase", icon: "S", color: "from-orange-500 to-red-600" },
      // { name: "Oracle", icon: "O", color: "from-red-500 to-red-600" },
      { name: "Chromadb", icon: "R", color: "from-red-600 to-red-700" }
    ],
    cloud: [
      // { name: "Firebase", icon: "F", color: "from-orange-500 to-orange-600" },
      { name: "Azure", icon: "A", color: "from-blue-500 to-blue-600" },
      { name: "AWS", icon: "A", color: "from-orange-400 to-orange-500" },
      // { name: "Cosmos DB", icon: "C", color: "from-purple-500 to-purple-600" },
      { name: "Google Cloud", icon: "G", color: "from-blue-400 to-blue-500" }
    ],
    deployment: [
      { name: "Git", icon: "G", color: "from-white-500 to-orange-600" },
      { name: "Docker", icon: "D", color: "from-blue-500 to-blue-600" },
      // { name: "GitHub Actions", icon: "G", color: "from-white-500 to-purple-700" },
      { name: "Vercel", icon: "V", color: "from-white-500 to-red-800" },
      // { name: "Jenkins", icon: "J", color: "from-red-500 to-red-600" },
      { name: "Netlify", icon: "N", color: "from-blue-600 to-blue-700" },
      { name: "Railway", icon: "R", color: "from-blue-500 to-pink-600" },
      { name: "Render", icon: "R", color: "from-blue-500 to-white-600" }
    ]
  }

  const categories = [
    { title: "Frontend", icon: Monitor, techs: techStack.frontend, color: "from-indigo-500/20 to-blue-500/20" },
    { title: "Backend", icon: Code, techs: techStack.backend, color: "from-rose-500/20 to-pink-500/20" },
    { title: "Database", icon: Database, techs: techStack.database, color: "from-green-500/20 to-emerald-500/20" },
    { title: "Cloud", icon: Cloud, techs: techStack.cloud, color: "from-purple-500/20 to-violet-500/20" },
    { title: "Deployment", icon: Rocket, techs: techStack.deployment, color: "from-amber-500/20 to-orange-500/20" }
  ]

  return (
    <section id="stack" className="relative min-h-screen py-32 md:py-40 overflow-hidden bg-black">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />
        <ElegantShape delay={0.3} width={500} height={120} rotate={10} gradient="from-indigo-500/[0.1]" className="left-[-15%] top-[10%]" />
        <ElegantShape delay={0.6} width={400} height={100} rotate={-15} gradient="from-rose-500/[0.1]" className="right-[-10%] top-[50%]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center px-6 md:px-12">
        <div className="max-w-6xl w-full text-center space-y-32">

          {/* Header */}
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12"
            >
              {/* <Code className="w-4 h-4 text-indigo-400" /> */}
              <span className="text-sm text-white/80 tracking-wide font-medium">My Stack</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">Technologies I</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">Work With</span>
            </h2>
          </motion.div>
          <div className="h-20"></div>

          {/* Tech Stack Categories */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {categories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={item} className="space-y-1">


                {/* <motion.div
                  custom={0.5}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-8 md:h-5"
                /> */}

                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} border border-white/10 flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-7 h-7 text-white/90" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
                </div>

                {/* <motion.div
                  custom={0.5}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-8 md:h-5"
                /> */}

                {/* <motion.div
                  custom={0.5}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-8 md:h-5"
                /> */}
                {/* Tech Badges */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + techIndex * 0.05,
                        duration: 0.5
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group"
                    >

                      <div className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm p-4 h-20 flex flex-col items-center justify-center">
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                        {/* Icon */}
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white font-bold text-sm">{tech.icon}</span>
                        </div>


                        {/* Name */}
                        <span className="text-white/90 font-medium text-xs text-center group-hover:text-white transition-colors leading-tight">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    custom={0.5}
                    variants={fadeUpVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="h-8 md:h-12"
                  />
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default StackScrollSection
