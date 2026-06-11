import { motion } from "framer-motion"

const contacts = [
  {
    icon: "📧",
    title: "Email",
    subtitle: "syamsulhadi1225@gmail.com",
    link: "mailto:syamsulhadi1225@gmail.com",
    color: "bg-cyan-400 text-slate-950",
  },
  {
    icon: "💼",
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    link: "https://www.linkedin.com/in/syamsul-hadi-95b35837b",
    color: "border border-cyan-400/50 text-cyan-300",
  },
  {
    icon: "🐙",
    title: "GitHub",
    subtitle: "View my repositories",
    link: "https://github.com/Syamsulhad1",
    color: "border border-cyan-400/50 text-cyan-300",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    subtitle: "Let's have a conversation",
    link: "https://wa.me/+6282297922544",
    color: "border border-cyan-400/50 text-cyan-300",
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-20 py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_30%,#22d3ee,transparent_35%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 font-semibold mb-3">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Mari Terhubung
          </h2>

          <p className="text-slate-400 leading-8 max-w-2xl mx-auto">
            Tertarik berdiskusi tentang teknologi, kolaborasi project,
            atau sekadar bertukar ide? Saya selalu terbuka untuk
            kesempatan belajar dan berkembang.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`p-6 rounded-3xl bg-white/10 backdrop-blur-xl hover:shadow-[0_0_35px_rgba(34,211,238,0.15)] transition ${item.color}`}
            >
              <div className="flex items-center gap-5">
                <div className="text-4xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-80 mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-slate-500">
            © 2026 Syamsul Hadi
          </p>

          <p className="text-slate-600 mt-2">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact