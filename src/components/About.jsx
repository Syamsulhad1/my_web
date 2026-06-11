import ProfileCard from "./ProfileCard"
import { motion } from "framer-motion"

const highlights = [
  "Web Development",
  "Artificial Intelligence",
  "Networking",
  "Internet of Things",
]

const journey = [
  {
    year: "2024",
    icon: "🌱",
    title: "Membangun Fondasi IT",
    desc: "Mulai memperkuat dasar pemrograman, jaringan komputer, dan pengembangan web melalui praktik kampus.",
  },
  {
    year: "2025",
    icon: "💻",
    title: "Mengerjakan Project Nyata",
    desc: "Mengembangkan project SmartCity Reported, IoT Smart Stall Cleaner, Hotspot MikroTik, dan simulasi jaringan Cisco.",
  },
  {
    year: "2025", icon: "🎓",
    title: "Meraih Sertifikat Kompetensi",
    desc: "Meraih sertifikat di bidang perlombaan teknopreneurship, web development, dan IoT.",
  },
  {
    year: "2026",
    icon: "🚀",
    title: "Membangun Portofolio Profesional",
    desc: "Menyusun portofolio interaktif berbasis React, Tailwind CSS, dan Framer Motion untuk menampilkan karya dan perjalanan belajar.",
  },
]

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 md:px-20 py-28 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,#22d3ee,transparent_30%)]"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_70%,#6366f1,transparent_32%)]"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-semibold mb-3">About Me</p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-4xl">
            Profil singkat Syamsul Hadi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <ProfileCard />

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-6 top-0 h-full w-1 rounded-full bg-cyan-400/30 hidden lg:block"></div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Project-Based IT Student
            </div>

            <h3 className="text-3xl md:text-4xl font-black leading-tight mb-6">
              Membangun solusi digital melalui project nyata.
            </h3>

            <p className="text-slate-400 leading-8 mb-6">
              Saya adalah Syamsul Hadi, mahasiswa yang memiliki ketertarikan pada
              pengembangan web, kecerdasan buatan, jaringan komputer, dan Internet of Things.
              Saya suka mempelajari teknologi melalui praktik langsung, eksperimen, dan
              pengembangan project nyata.
            </p>

            <p className="text-slate-400 leading-8 mb-8">
              Portofolio ini saya buat sebagai ruang untuk menampilkan proses belajar,
              project, sertifikat, dan perjalanan saya dalam mengembangkan kemampuan di bidang IT.
            </p>

            <div className="p-5 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 mb-8">
              <p className="text-cyan-100 italic leading-8">
                “Belajar bukan tentang menjadi yang paling hebat, tetapi tentang
                terus berkembang melalui proses dan project nyata.”
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/Syamsulhad1"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/syamsul-hadi-95b35837b"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-cyan-400/60 text-cyan-300 font-bold hover:bg-cyan-400/10 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-cyan-300">7+</p>
                <p className="text-slate-400 mt-1">Project Utama</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="p-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-cyan-300">18+</p>
                <p className="text-slate-400 mt-1">Sertifikat</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-cyan-400 font-semibold mb-3">Learning Journey</p>
          <h3 className="text-4xl font-black">Perjalanan Belajar</h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-400/20 rounded-full hidden md:block"></div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative md:pl-20"
              >
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-cyan-400 text-slate-950 text-2xl font-black items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.45)]">
                  {item.icon}
                </div>

                <div className="p-6 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)] transition">
                  <span className="text-cyan-300 font-bold">
                    {item.year}
                  </span>

                  <h4 className="text-2xl font-bold mt-2 mb-3">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 leading-7">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About