import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Landing from './pages/Landing'
import Rooms from './pages/Rooms'
import Room from './pages/Room'
import MemoryViewer from './pages/MemoryViewer'
import Admin from './pages/Admin'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-orange-300 to-purple-400 text-stone-100">
      <MusicPlayer />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:monthId" element={<Room />} />
          <Route path="/rooms/:monthId/memories" element={<MemoryViewer />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
