import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const mascotStates = [
  {
    image: "/mascot/1.png",
    message: "Halo! Selamat datang di portofolio Syamsul 👋",
  },
  {
    image: "/mascot/2.png",
    message: "Yuk lihat project-project kerenku 🚀",
  },
  {
    image: "/mascot/3.png",
    message: "Mode belajar aktif! Kita bahas skill dulu 🤓",
  },
  {
    image: "/mascot/4.png",
    message: "Mantap! Kamu ada di jalur yang benar 👍",
  },
  {
    image: "/mascot/5.png",
    message: "Aku siap bantu jelaskan portofolio ini 😎",
  },
  {
    image: "/mascot/6.png",
    message: "Bagian ini cocok untuk recruiter lihat 👀",
  },
  {
    image: "/mascot/7.png",
    message: "Arahkan perhatianmu ke tombol itu 👉",
  },
  {
    image: "/mascot/8.png",
    message: "Terima kasih sudah berkunjung! 👋",
  },
]

function Mascot() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(3)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % mascotStates.length)
  }

  const currentMascot = mascotStates[index]

  return (
    <div className="relative w-[430px] h-[520px] hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMascot.message}
          initial={{ opacity: 0, x: 20, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, y: -8, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="absolute top-[220px] left-[-170px] z-30 w-72 px-5 py-4 rounded-2xl bg-slate-950/90 border border-cyan-400/50 text-white shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-xl"
        >
          <p className="font-semibold leading-7">
            {currentMascot.message}
          </p>

          <div className="absolute right-[-9px] bottom-8 w-5 h-5 bg-slate-950 rotate-45 border-r border-b border-cyan-400/50"></div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[290px] cursor-pointer"
      >
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-80 h-20 rounded-full bg-cyan-400/25 blur-2xl"></div>

        <AnimatePresence mode="wait">
          <motion.img
            key={currentMascot.image}
            src={currentMascot.image}
            alt="Mascot"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 w-full select-none pointer-events-none drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]"
          />
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

export default Mascot