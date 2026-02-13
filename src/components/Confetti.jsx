import { useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const COLORS = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43']

function seed(i) {
  const x = Math.sin(i * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export function Confetti({ onComplete, duration = 2.5 }) {
  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), (duration + 0.5) * 1000)
    return () => clearTimeout(t)
  }, [duration, onComplete])

  const count = 50
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        color: COLORS[i % COLORS.length],
        size: 6 + seed(i) * 8,
        delay: seed(i + 1) * 0.3,
        duration: duration * (0.7 + seed(i + 2) * 0.6),
        angle: seed(i + 3) * 360,
        distance: 80 + seed(i + 4) * 120,
        rotation: seed(i + 5) * 720,
      })),
    [duration]
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            left: '50%',
            top: '50%',
            originX: 'center',
            originY: 'center',
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
            y: Math.sin((p.angle * Math.PI) / 180) * p.distance + 100,
            opacity: 0,
            rotate: p.rotation,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}
