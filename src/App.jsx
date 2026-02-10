import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Landing from './pages/Landing'
import Rooms from './pages/Rooms'
import Room from './pages/Room'
import MemoryViewer from './pages/MemoryViewer'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  return (
    <div className="min-h-screen bg-sunset-sky text-stone-100">
      <MusicPlayer />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:monthId" element={<Room />} />
          <Route path="/rooms/:monthId/memories" element={<MemoryViewer />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
