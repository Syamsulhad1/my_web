import { motion } from "framer-motion"

function ProfileCard() {
  return (
    <div className="relative flex justify-center items-center min-h-[560px]">
      <div className="absolute w-[430px] h-[430px] rounded-full bg-cyan-400/10 blur-3xl"></div>

      <motion.div
        initial={{
          opacity: 0,
          y: -260,
          rotate: -14,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: [10, -7, 4, -2, 0],
          scale: 1,
        }}
        whileHover={{
          y: -12,
          rotate: 2,
          scale: 1.035,
        }}
        viewport={{ once: true }}
        transition={{
          opacity: { duration: 0.3 },
          y: { type: "spring", stiffness: 85, damping: 9, delay: 0.2 },
          rotate: { duration: 2.1, delay: 0.6, ease: "easeInOut" },
          scale: { duration: 0.5 },
        }}
        className="relative w-[360px] rounded-[2rem] p-4 bg-white/10 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_55px_rgba(34,211,238,0.2)] cursor-pointer"
      >
        <motion.div
          animate={{ rotate: [0, 1.2, -1.2, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="rounded-[1.5rem] overflow-hidden border border-white/10">
            <img
              src="/profile/id-card.png"
              alt="Syamsul Hadi"
              className="w-full object-cover select-none"
            />
          </div>

          <div className="absolute -top-5 -right-5 px-5 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-black shadow-[0_0_25px_rgba(34,211,238,0.45)]">
            Profile
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProfileCard