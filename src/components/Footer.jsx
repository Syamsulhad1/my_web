import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="relative px-6 md:px-20 py-14 bg-slate-950 overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_0%,#22d3ee,transparent_40%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Nama */}
        <h3 className="text-2xl font-black text-white mb-2">
          Syamsul Hadi
        </h3>

        {/* Identitas */}
        <p className="text-cyan-300 font-medium mb-6">
          Mahasiswa Teknologi Rekayasa Internet
        </p>

        {/* Tagline */}
        <p className="text-slate-400 leading-8 max-w-2xl mx-auto mb-10">
          Membangun solusi digital melalui project nyata,
          rasa ingin tahu, dan pembelajaran berkelanjutan.
        </p>

        {/* Copyright */}
        <div className="space-y-2">
          <p className="text-slate-500 text-sm">
            © 2026 Syamsul Hadi. All rights reserved.
          </p>

          <p className="text-slate-600 text-sm">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
