import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { certificates } from "../data/certificates"

const categories = [
  "All",
  "Networking",
  "AI & Data",
  "Software Development",
  "kompetisi",
  "Business",
  "Soft Skill",
  "Academic",
  "Office",
]

function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedCert, setSelectedCert] = useState(null)

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory)

  return (
    <section
      id="certificates"
      className="relative min-h-screen px-6 md:px-20 py-28 bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_80%_20%,#22d3ee,transparent_30%)]"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-cyan-400 font-semibold mb-3">
            Learning & Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-5">
            Sertifikat dan Perjalanan Belajar
          </h2>

          <p className="text-slate-400 max-w-2xl leading-8">
            Kumpulan sertifikat ini menunjukkan proses belajar saya dalam bidang
            networking, data, software development, bisnis digital, dan pengembangan diri.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === category
                  ? "bg-cyan-400 text-slate-950 border-cyan-400 font-bold"
                  : "bg-white/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert, index) => (
              <motion.button
                layout
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group text-left rounded-3xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,0.18)] transition"
              >
                <div className="h-56 bg-slate-950 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs mb-4">
                    {cert.category}
                  </span>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition">
                    {cert.title}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-slate-900 border border-cyan-400/30 shadow-[0_0_70px_rgba(34,211,238,0.2)] p-6"
            >
              <div className="flex justify-between items-start gap-6 mb-6">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-sm mb-4">
                    {selectedCert.category}
                  </span>

                  <h3 className="text-3xl font-black">
                    {selectedCert.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-red-500 transition"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates