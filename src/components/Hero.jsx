import { motion } from "framer-motion"
import Mascot from "./Mascot"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-screen overflow-hidden bg-slate-950 px-6 md:px-20 flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_45%,#22d3ee,transparent_32%)]"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_70%,#6366f1,transparent_35%)]"></div>

      <div className="absolute top-24 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full border border-cyan-400/10"></div>
      <div className="absolute top-32 left-1/2 w-[420px] h-[420px] -translate-x-1/2 rounded-full border border-cyan-400/10"></div>

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-40 hidden lg:block text-5xl opacity-70"
      >
        🚁
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-72 opacity-35">
        <div className="absolute bottom-0 left-[4%] w-20 h-44 bg-cyan-400/10 border border-cyan-400/20 rounded-t-xl"></div>
        <div className="absolute bottom-0 left-[14%] w-28 h-64 bg-blue-400/10 border border-blue-400/20 rounded-t-xl"></div>
        <div className="absolute bottom-0 left-[28%] w-20 h-40 bg-cyan-400/10 border border-cyan-400/20 rounded-t-xl"></div>
        <div className="absolute bottom-0 right-[34%] w-24 h-56 bg-blue-400/10 border border-blue-400/20 rounded-t-xl"></div>
        <div className="absolute bottom-0 right-[18%] w-32 h-72 bg-cyan-400/10 border border-cyan-400/20 rounded-t-xl"></div>
        <div className="absolute bottom-0 right-[6%] w-20 h-48 bg-blue-400/10 border border-blue-400/20 rounded-t-xl"></div>
      </div>

      <div className="relative z-20 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Digital Command Center Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05]"
        >
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400">
            Syamsul Hadi
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-2xl md:text-3xl text-slate-200 font-semibold"
        >
          Mahasiswa IT yang fokus pada Web Development, AI, Networking, dan IoT.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6 max-w-2xl text-slate-400 leading-8"
        >
          Saya membangun solusi digital yang interaktif, modern, dan relevan
          dengan kebutuhan nyata melalui project berbasis smart city, jaringan,
          machine learning, dan Internet of Things.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {["React", "Django", "Machine Learning", "MikroTik", "IoT"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-slate-300 text-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-4 bg-cyan-400 rounded-xl font-bold text-slate-950 hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            Explore Projects
          </a>

          <a
            href="#certificates"
            className="px-7 py-4 border border-cyan-400/60 rounded-xl font-bold text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            View Certificates
          </a>
        </motion.div>
      </div>

      <div className="absolute right-10 bottom-16 z-30 hidden lg:block">
        <Mascot variant="hero" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-sm hidden md:block"
      >
        Scroll untuk menjelajahi ↓
      </motion.div>
    </section>
  )
}

export default Hero