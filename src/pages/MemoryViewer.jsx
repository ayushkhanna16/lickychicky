import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getRoomById } from '../data/riddles'
import { getMemoriesForMonth, getMonthGradient } from '../data/memories'
import { useUnlockedRooms } from '../hooks/useUnlockedRooms'

function ShellPrev({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Previous"
    >
      <svg className="w-6 h-6 rotate-180" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 7 4 5 6c-1.5 2-2 4-2 6 0 3 2 6 5 8 2.5-1.5 5-4 6-7 1-2 1-4 0-6-1.5-2.5-3-4-5-5z" />
      </svg>
    </motion.button>
  )
}

function ShellNext({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Next"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.5 2 7 4 5 6c-1.5 2-2 4-2 6 0 3 2 6 5 8 2.5-1.5 5-4 6-7 1-2 1-4 0-6-1.5-2.5-3-4-5-5z" />
      </svg>
    </motion.button>
  )
}

function buildMemoryItems(monthId) {
  const { photos, videos, voiceNotes, texts } = getMemoriesForMonth(monthId)
  const items = []
  photos.forEach((p) => items.push({ type: 'photo', ...p }))
  videos.forEach((v) => items.push({ type: 'video', ...v }))
  voiceNotes.forEach((v) => items.push({ type: 'voice', ...v }))
  texts.forEach((t) => items.push({ type: 'text', ...t }))
  return items
}

export default function MemoryViewer() {
  const { monthId } = useParams()
  const navigate = useNavigate()
  const { isUnlocked } = useUnlockedRooms()
  const room = getRoomById(monthId)
  const items = buildMemoryItems(monthId || '')
  const [index, setIndex] = useState(0)
  const audioRef = useRef(null)

  if (room && !isUnlocked(room.id)) {
    navigate('/rooms', { replace: true })
    return null
  }

  const currentItem = items[index]
  const gradient = getMonthGradient(monthId || '')

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const goNext = () => setIndex((i) => (i + 1) % items.length)

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">Month not found.</p>
        <button onClick={() => navigate('/rooms')} className="ml-4 underline text-white">
          Back to months
        </button>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-8"
        style={{ background: gradient }}
      >
        <p className="text-white/90 text-lg">No memories here yet.</p>
        <motion.button
          onClick={() => navigate('/rooms')}
          className="mt-6 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          ← Back to month selection
        </motion.button>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: gradient }}
    >
      <audio
        ref={audioRef}
        className="hidden"
        onEnded={() => {}}
      />
      {/* Exit bar */}
      <div className="flex justify-between items-center p-4">
        <motion.button
          onClick={() => navigate('/rooms')}
          className="flex items-center gap-2 text-white/90 hover:text-white font-medium"
          whileHover={{ x: -4 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
          </svg>
          Month selection
        </motion.button>
        <span className="text-white/80 text-sm">
          {room.title} — {index + 1} / {items.length}
        </span>
      </div>

      {/* Content area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="flex items-center gap-4 md:gap-8 max-w-4xl w-full">
          <div className="flex-shrink-0">
            <ShellPrev onClick={goPrev} />
          </div>

          <div className="flex-1 min-w-0 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem?.id ?? index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="w-full max-w-lg"
              >
                {currentItem?.type === 'photo' && (
                  <PolaroidFrame
                    url={currentItem.url}
                    caption={currentItem.caption}
                  />
                )}
                {currentItem?.type === 'video' && (
                  <FilmStripFrame
                    url={currentItem.url}
                    caption={currentItem.caption}
                  />
                )}
                {currentItem?.type === 'voice' && (
                  <MessageBottle
                    url={currentItem.url}
                    caption={currentItem.caption}
                    audioRef={audioRef}
                    key={currentItem.id}
                  />
                )}
                {currentItem?.type === 'text' && (
                  <LetterCard text={currentItem.text} date={currentItem.date} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-shrink-0">
            <ShellNext onClick={goNext} />
          </div>
        </div>
      </div>
    </div>
  )
}

function PolaroidFrame({ url, caption }) {
  return (
    <motion.div
      className="bg-white p-3 pb-12 shadow-2xl rotate-[-1deg]"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
      whileHover={{ rotate: 0, scale: 1.02 }}
    >
      <div className="aspect-[3/4] bg-stone-200 overflow-hidden">
        <img
          src={url}
          alt={caption || 'Memory'}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://placehold.co/400x500/fecfef/9ca3af?text=Photo'
          }}
        />
      </div>
      <p className="text-center text-stone-600 font-handwriting text-lg mt-2 px-2">
        {caption || 'Our memory'}
      </p>
    </motion.div>
  )
}

function FilmStripFrame({ url, caption }) {
  return (
    <motion.div
      className="relative bg-stone-900 rounded-lg p-2 border-4 border-stone-700"
      style={{ boxShadow: 'inset 0 0 0 2px #444' }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex gap-1 mb-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-stone-600" />
        ))}
      </div>
      <div className="aspect-video bg-black rounded overflow-hidden">
        <video
          src={url}
          controls
          className="w-full h-full object-contain"
          poster=""
        >
          Your browser does not support video.
        </video>
      </div>
      <div className="flex gap-1 mt-1">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-stone-600" />
        ))}
      </div>
      {caption && (
        <p className="text-center text-white/90 text-sm mt-2 font-handwriting">
          {caption}
        </p>
      )}
    </motion.div>
  )
}

function MessageBottle({ url, caption, audioRef }) {
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = url || ''
    const onEnd = () => setPlaying(false)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    audio.addEventListener('ended', onEnd)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    return () => {
      audio.pause()
      audio.removeEventListener('ended', onEnd)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [url, audioRef])
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) audio.pause()
    else audio.play().catch(() => setPlaying(false))
  }
  return (
    <>
      <motion.button
        type="button"
        onClick={togglePlay}
        className="block mx-auto focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-24 h-32 mx-auto">
          <svg
            viewBox="0 0 80 120"
            className="w-full h-full drop-shadow-lg"
            fill="none"
            stroke="#87CEEB"
            strokeWidth="2"
          >
            <path d="M40 10 L40 95 Q40 110 25 110 L55 110 Q40 110 40 95 Z" fill="#b8e0f0" />
            <path d="M40 15 L40 25" stroke="#5a9fb8" strokeWidth="1.5" />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl">
            {playing ? '🔊' : '🎵'}
          </span>
        </div>
        <p className="text-white/95 mt-4 font-handwriting text-lg">
          {caption || 'Message in a bottle'}
        </p>
        <p className="text-white/70 text-sm mt-1">
          {playing ? 'Playing...' : 'Tap to play'}
        </p>
      </motion.button>
    </>
  )
}

function LetterCard({ text, date }) {
  return (
    <motion.div
      className="bg-amber-50/95 p-6 md:p-8 rounded-lg shadow-xl border-2 border-amber-200/80 max-w-md mx-auto font-handwriting"
      style={{
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-stone-700 text-xl md:text-2xl leading-relaxed whitespace-pre-wrap">
        {text}
      </p>
      <p className="text-amber-800/80 text-right mt-4 text-sm">{date}</p>
    </motion.div>
  )
}
