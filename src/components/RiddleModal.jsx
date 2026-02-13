import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRoomById } from '../data/riddles'
import { useUnlockedRooms } from '../hooks/useUnlockedRooms'
import { Confetti } from './Confetti'
import { getSRKQuote } from '../data/srkQuotes'

export function RiddleModal({ monthId, onClose, onUnlocked }) {
  const room = getRoomById(monthId)
  const { unlock, isUnlocked } = useUnlockedRooms()
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [shake, setShake] = useState(0)
  const modalRef = useRef(null)

  if (!room) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const normalized = answer.trim().toLowerCase()
    if (normalized === room.answer.toLowerCase()) {
      unlock(room.id)
      setShowConfetti(true)
      setShowSuccess(true)
      setError('')
    } else {
      setError('Not quite! Try again.')
      setShake((s) => s + 1)
    }
  }

  const handleConfettiComplete = () => {
    setShowConfetti(false)
  }

  const handleCloseAfterSuccess = () => {
    setShowSuccess(false)
    onUnlocked?.(room.id)
    onClose()
  }

  return (
    <>
      <AnimatePresence>
        {showConfetti && (
          <Confetti onComplete={handleConfettiComplete} duration={2.2} />
        )}
      </AnimatePresence>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.target === e.currentTarget && !showSuccess && onClose()}
      >
        <motion.div
          ref={modalRef}
          key={shake}
          className="bg-stone-900/95 backdrop-blur border border-stone-600 rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8"
          initial={{ scale: 0.9, opacity: 0, x: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            x: shake > 0 ? [0, -12, 12, -12, 12, 0] : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
            x: shake > 0 ? { duration: 0.45 } : {},
          }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <AnimatePresence mode="wait">
            {showSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <p className="text-2xl mb-4">🎉 Unlocked!</p>
                {(() => {
                  const srkQuote = getSRKQuote(room.id)
                  if (srkQuote) {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6"
                      >
                        <div className="relative rounded-xl overflow-hidden border-2 border-amber-400/30 shadow-xl max-w-full">
                          <img
                            src={srkQuote.imageUrl}
                            alt={`SRK Quote from ${srkQuote.movie}`}
                            className="w-full h-auto object-cover max-h-96"
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.style.display = 'none'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4 md:p-6">
                            <p className="text-amber-200/95 text-base md:text-lg italic font-cinematic leading-relaxed mb-2">
                              &ldquo;{srkQuote.quote}&rdquo;
                            </p>
                            <p className="text-amber-300/80 text-xs md:text-sm">
                              — {srkQuote.movie}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  }
                  return null
                })()}
                <motion.button
                  onClick={handleCloseAfterSuccess}
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View memories
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="riddle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-display text-xl text-white">
                    {room.title} — {room.subtitle}
                  </h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-stone-500 hover:text-white p-1"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </div>
                <p className="text-amber-100/90 text-lg italic mb-6">
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
                    className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-600 text-white placeholder-stone-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-amber-300 text-sm"
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
      </motion.div>
    </>
  )
}
