import { motion } from "framer-motion"
import {
  coreSkills,
  technicalSkills,
  professionalSkills,
} from "../data/skills"

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 md:px-20 py-28 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_20%,#22d3ee,transparent_30%)]"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-cyan-400 font-semibold mb-3">
            Skills & Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Kemampuan yang Saya Kembangkan
          </h2>

          <p className="text-slate-400 max-w-2xl leading-8">
            Kombinasi kemampuan teknis, pengalaman project, dan pembelajaran
            berkelanjutan yang saya bangun selama perjalanan di bidang IT.
          </p>
        </motion.div>

        {/* Core Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-cyan-300">
            Core Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 transition"
              >
                <div className="text-5xl mb-4">
                  {skill.icon}
                </div>

                <h4 className="text-xl font-bold mb-2">
                  {skill.title}
                </h4>

                <p className="text-slate-400">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-cyan-300">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="px-5 py-3 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-cyan-300">
            Professional Skills
          </h3>

          <div className="flex flex-wrap gap-4">
            {professionalSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className="px-5 py-3 rounded-full bg-white/10 border border-white/10 text-slate-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills