import { useState, useEffect } from 'react'

const STORAGE_KEY = 'unlocked-months'

export function useUnlockedRooms() {
  const [unlocked, setUnlocked] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
  }, [unlocked])

  const unlock = (monthId) => {
    setUnlocked(prev => prev.includes(monthId) ? prev : [...prev, monthId])
  }

  const isUnlocked = (monthId) => unlocked.includes(monthId)

  const reset = () => {
    setUnlocked([])
    localStorage.removeItem(STORAGE_KEY)
  }

  return { unlocked, unlock, isUnlocked, reset }
}
