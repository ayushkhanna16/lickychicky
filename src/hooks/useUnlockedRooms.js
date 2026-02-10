import { useState, useEffect } from 'react'

const STORAGE_KEY = 'anniversary-unlocked-rooms'

export function useUnlockedRooms() {
  const [unlocked, setUnlocked] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked))
  }, [unlocked])

  const unlock = (roomId) => {
    if (!unlocked.includes(roomId)) {
      setUnlocked((prev) => [...prev, roomId])
    }
  }

  const isUnlocked = (roomId) => unlocked.includes(roomId)

  return { unlocked, unlock, isUnlocked }
}
