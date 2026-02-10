import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Placeholder – replace with your names and date
const NAMES = 'Your Name & Partner Name'
const ANNIVERSARY_DATE = 'Month Day, Year'

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🤍', '❤️', '💕']
const MUSIC_NOTES = ['♪', '♫', '♬', '♪', '♫', '♬', '♪', '♫']

const floatVariants = (delay = 0, yOffset = 0) => ({
  initial: { opacity: 0, y: 20 + yOffset },
  animate: {
    opacity: [0.4, 0.9, 0.4],
    y: [0, -20 - yOffset, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      delay,
    },
  },
})

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-beach-sunset relative overflow-hidden cinematic-frame">
      {/* Bollywood-style cinematic letterbox bars */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-16 bg-black/80 z-20"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 64, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-black/80 z-20"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 64, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Music notes – Bollywood entrance */}
      <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
        {MUSIC_NOTES.map((note, i) => (
          <motion.span
            key={`note-${i}`}
            className="absolute text-white/60 text-2xl md:text-4xl font-serif"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{
              opacity: [0, 0.7, 0.5],
              scale: [0, 1.2, 1],
              rotate: [-20, 5, -10],
            }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.15,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            {note}
          </motion.span>
        ))}
        {MUSIC_NOTES.slice(0, 4).map((note, i) => (
          <motion.span
            key={`note-b-${i}`}
            className="absolute text-white/40 text-xl md:text-3xl"
            style={{
              right: `${15 + i * 18}%`,
              bottom: `${20 + (i % 2) * 30}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0.3],
              scale: [0, 1, 1],
            }}
            transition={{
              duration: 1.8,
              delay: 1 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          >
            {note}
          </motion.span>
        ))}
      </div>

      {/* Floating heart particles */}
      <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
        {HEARTS.map((heart, i) => (
          <motion.span
            key={`heart-${i}`}
            className="absolute text-2xl md:text-4xl select-none"
            style={{
              left: `${5 + (i * 13) % 90}%`,
              top: `${10 + (i * 11) % 80}%`,
            }}
            variants={floatVariants(i * 0.3, i * 8)}
            initial="initial"
            animate="animate"
          >
            {heart}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Bollywood-style fade-in entrance */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white drop-shadow-lg mb-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              ❤️
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              6 Months of Us
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              ❤️
            </motion.span>
          </motion.h1>

          <motion.p
            className="font-cinematic text-white/95 text-lg md:text-xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            {NAMES}
          </motion.p>
          <motion.p
            className="font-cinematic text-white/80 text-base md:text-lg mt-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            {ANNIVERSARY_DATE}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/rooms')}
            className="px-10 py-4 rounded-full bg-white/95 hover:bg-white text-pink-600 font-display text-lg font-semibold shadow-xl border-2 border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Begin Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
