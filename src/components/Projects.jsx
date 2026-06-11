import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { projects } from "../data/projects"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="min-h-screen px-20 py-28 bg-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-cyan-400 font-semibold mb-3">Selected Works</p>
        <h2 className="text-5xl font-bold mb-12">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            layoutId={`project-card-${project.id}`}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="text-left group p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] transition"
          >
            <span className="inline-block mb-5 px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition">
              {project.title}
            </h3>

            <p className="text-slate-400 leading-7 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-xl flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl p-10 rounded-[2rem] bg-slate-900 border border-cyan-400/30 shadow-[0_0_70px_rgba(34,211,238,0.2)]"
            >
              <div className="flex justify-between items-start gap-6 mb-6">
                <div>
                  <span className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm">
                    {selectedProject.category}
                  </span>

                  <h3 className="text-4xl font-black">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500/80 transition"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-300 leading-8 mb-8">
                {selectedProject.detail}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
                <p className="text-slate-400 text-sm mb-1">Role</p>
                <p className="text-cyan-300 font-bold">Fullstack Developer</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
                <p className="text-slate-400 text-sm mb-1">Status</p>
                <p className="text-cyan-300 font-bold">Completed</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/20">
              <p className="text-cyan-300 font-bold mb-3">Status:</p>

              <div className="space-y-2 text-slate-300">
                <p>✓ Completed</p>
                <p>✓ Academic Project</p>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects