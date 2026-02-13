import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getRoomById } from '../data/riddles'
import { useUnlockedRooms } from '../hooks/useUnlockedRooms'

export default function Room() {
  const { monthId } = useParams()
  const navigate = useNavigate()
  const room = getRoomById(monthId)
  const { isUnlocked, unlock } = useUnlockedRooms()
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [showHint, setShowHint] = useState(false)

  const unlocked = isUnlocked(room?.id)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!room) return
    const normalized = answer.trim().toLowerCase()
    if (normalized === room.answer.toLowerCase()) {
      unlock(room.id)
      setError('')
      setAnswer('')
    } else {
      setError('Not quite! Try again or ask for a hint.')
    }
  }

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-400">Room not found.</p>
        <button onClick={() => navigate('/rooms')} className="ml-4 underline">
          Back to rooms
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-orange-300 to-purple-400 px-4 py-12 md:py-20">
      <div className="max-w-xl mx-auto">
        <motion.button
          onClick={() => navigate('/rooms')}
          className="text-stone-400 hover:text-amber-200 text-sm mb-8 flex items-center gap-1"
          whileHover={{ x: -4 }}
        >
          ← Back to rooms
        </motion.button>

        <motion.div
          key={room.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-stone-900/50 backdrop-blur border border-stone-700/50 p-8"
        >
          <h1 className="font-display text-3xl text-white">{room.title}</h1>
          <p className="text-amber-200/90 mt-1">{room.subtitle}</p>

          <AnimatePresence mode="wait">
            {unlocked ? (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <p className="text-stone-200 text-lg">
                  You unlocked this room! 🎉 Here&apos;s to month {room.month} and
                  many more.
                </p>
                <p className="text-stone-400 mt-4 italic">
                  &ldquo;{room.riddle}&rdquo;
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <p className="text-stone-300 text-lg mb-4">Riddle:</p>
                <p className="text-amber-100/90 text-xl italic mb-6">
                  &ldquo;{room.riddle}&rdquo;
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value)
                      setError('')
                    }}
                    placeholder="Your answer..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-800/80 border border-stone-600 text-white placeholder-stone-500 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 outline-none"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-amber-300/90 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Unlock
                    </motion.button>
                    <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className="px-4 py-2 rounded-full border border-stone-600 text-stone-400 hover:text-stone-200 text-sm"
                    >
                      {showHint ? 'Hide hint' : 'Show hint'}
                    </button>
                  </div>
                  {showHint && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-stone-500 text-sm italic"
                    >
                      {room.hint}
                    </motion.p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
