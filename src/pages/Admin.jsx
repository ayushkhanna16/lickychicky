import { useState } from 'react'
import { motion } from 'framer-motion'
import { ROOMS } from '../data/riddles'
import { useUnlockedRooms } from '../hooks/useUnlockedRooms'
import { useNavigate } from 'react-router-dom'

export default function Admin() {
  const navigate = useNavigate()
  const { unlocked, unlock, reset } = useUnlockedRooms()
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)

  const ADMIN_PASSWORD = 'pallavi2025' // Change this to your secret password

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Wrong password!')
    }
  }

  const unlockAll = () => {
    ROOMS.forEach(room => unlock(room.id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 flex items-center justify-center p-4">
        <motion.div
          className="bg-stone-800/50 backdrop-blur border border-stone-700 rounded-2xl p-8 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-display text-white mb-6">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-600 text-white placeholder-stone-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none"
              autoFocus
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display text-white">Admin Panel</h1>
          <button
            onClick={() => navigate('/')}
            className="text-stone-400 hover:text-white text-sm"
          >
            ← Back to site
          </button>
        </div>

        <div className="grid gap-6">
          {/* Controls */}
          <div className="bg-stone-800/50 backdrop-blur border border-stone-700 rounded-xl p-6">
            <h2 className="text-xl text-white mb-4">Controls</h2>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={unlockAll}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white"
              >
                Unlock All Months
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white"
              >
                Reset All Progress
              </button>
              <button
                onClick={() => setShowAnswers(!showAnswers)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
              >
                {showAnswers ? 'Hide Answers' : 'Show Answers'}
              </button>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-stone-800/50 backdrop-blur border border-stone-700 rounded-xl p-6">
            <h2 className="text-xl text-white mb-4">
              Progress: {unlocked.length}/6 months unlocked
            </h2>
            <div className="space-y-3">
              {ROOMS.map(room => (
                <div
                  key={room.id}
                  className={`p-4 rounded-lg border ${
                    unlocked.includes(room.id)
                      ? 'bg-green-900/20 border-green-700'
                      : 'bg-stone-900/50 border-stone-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-semibold">{room.title}</h3>
                      <p className="text-stone-400 text-sm">{room.subtitle}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        unlocked.includes(room.id)
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-stone-700 text-stone-400'
                      }`}
                    >
                      {unlocked.includes(room.id) ? 'Unlocked' : 'Locked'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Answer Key */}
          {showAnswers && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-amber-900/20 backdrop-blur border border-amber-700 rounded-xl p-6"
            >
              <h2 className="text-xl text-amber-200 mb-4">🔑 Answer Key</h2>
              <div className="space-y-4">
                {ROOMS.map(room => (
                  <div key={room.id} className="border-b border-amber-800/50 pb-4 last:border-0">
                    <h3 className="text-white font-semibold mb-1">{room.title}</h3>
                    <p className="text-stone-300 text-sm italic mb-2">&quot;{room.riddle}&quot;</p>
                    <div className="bg-stone-900/50 rounded p-3">
                      <p className="text-amber-200 font-mono">
                        Answer: <span className="font-bold">{room.answer}</span>
                      </p>
                      <p className="text-stone-400 text-sm mt-1">
                        Full answer: {room.adminAnswer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
