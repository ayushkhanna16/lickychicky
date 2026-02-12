import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ROOMS } from '../data/riddles'
import { useUnlockedRooms } from '../hooks/useUnlockedRooms'
import { RiddleModal } from '../components/RiddleModal'

function LockIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  )
}

function ShellIcon() {
  return (
    <svg className="w-5 h-5 text-amber-200/70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.5 2 7 4 5 6c-1.5 2-2 4-2 6 0 3 2 6 5 8 2.5-1.5 5-4 6-7 1-2 1-4 0-6-1.5-2.5-3-4-5-5z" />
    </svg>
  )
}

function StarfishIcon() {
  return (
    <svg className="w-5 h-5 text-orange-300/70" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.5 4.5L18 8l-3.5 2.5L16 15l-4-2.5L8 15l1.5-4.5L6 8l4.5-1.5L12 2z" />
    </svg>
  )
}

export default function Rooms() {
  const navigate = useNavigate()
  const { isUnlocked, unlocked } = useUnlockedRooms()
  const [modalMonthId, setModalMonthId] = useState(null)

  const unlockedCount = unlocked.length

  const handleCardClick = (room) => {
    if (isUnlocked(room.id)) {
      navigate(`/rooms/${room.id}/memories`)
    } else {
      setModalMonthId(room.id)
    }
  }

  const handleModalUnlocked = (roomId) => {
    setModalMonthId(null)
    if (roomId) navigate(`/rooms/${roomId}/memories`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Progress bar */}
        <motion.header
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-display text-3xl md:text-4xl text-white font-semibold">
              Six Months
            </h1>
            <span className="text-amber-200/95 font-medium">
              {unlockedCount}/6 unlocked
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/20 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-pink-400"
              initial={{ width: 0 }}
              animate={{ width: `${(unlockedCount / 6) * 100}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </motion.header>

        {/* Month cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map((room, i) => {
            const unlocked = isUnlocked(room.id)
            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <motion.button
                  onClick={() => handleCardClick(room)}
                  className={`w-full rounded-2xl p-6 text-left border-2 transition-colors relative overflow-hidden ${
                    unlocked
                      ? 'bg-white/15 border-amber-300/60 shadow-lg shadow-amber-900/20'
                      : 'bg-stone-900/40 border-stone-600/60 hover:border-amber-400/50'
                  }`}
                  whileHover={{
                    y: -6,
                    boxShadow: unlocked
                      ? '0 20px 40px -12px rgba(251, 191, 36, 0.25)'
                      : '0 20px 40px -12px rgba(0,0,0,0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Beach decorations */}
                  <span className="absolute top-3 left-3 opacity-80">
                    <ShellIcon />
                  </span>
                  <span className="absolute top-3 right-3 opacity-80">
                    <StarfishIcon />
                  </span>
                  <span className="absolute bottom-3 left-4 opacity-60">
                    <StarfishIcon />
                  </span>
                  <span className="absolute bottom-3 right-4 opacity-60">
                    <ShellIcon />
                  </span>

                  {/* Lock or checkmark */}
                  <span
                    className={`absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full ${
                      unlocked ? 'bg-amber-400/30 text-amber-300' : 'text-stone-500'
                    }`}
                  >
                    {unlocked ? <CheckIcon /> : <LockIcon />}
                  </span>

                  <span className="font-display text-2xl text-white block mt-2">
                    {room.title}
                  </span>
                  <p className="text-stone-300 text-sm mt-1">{room.subtitle}</p>
                  <p className="text-stone-400 text-xs mt-4">
                    {unlocked ? 'View memories →' : 'Solve riddle to unlock'}
                  </p>
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white text-sm underline"
          >
            ← Back to home
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalMonthId && (
          <RiddleModal
            monthId={modalMonthId}
            onClose={() => setModalMonthId(null)}
            onUnlocked={handleModalUnlocked}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
