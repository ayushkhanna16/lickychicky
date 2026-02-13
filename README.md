# Anniversary Website — 6 Months of Love

A romantic anniversary site with a Bollywood-style intro, six locked “month” rooms, and a beach/sunset aesthetic. Each room unlocks after solving a riddle.

## Tech stack

- **React** + **Vite**
- **Framer Motion** — animations
- **Tailwind CSS** — styling
- **React Router** — navigation

## Project structure

```
anniversary-website/
├── public/
│   ├── favicon.svg
│   └── music/
│       └── ambient.mp3   ← add your background music here
├── src/
│   ├── components/
│   │   └── MusicPlayer.jsx
│   ├── data/
│   │   └── riddles.js    ← room config & riddle answers
│   ├── hooks/
│   │   └── useUnlockedRooms.js
│   ├── pages/
│   │   ├── Landing.jsx   ← cinematic intro
│   │   ├── Rooms.jsx     ← 6 month rooms grid
│   │   └── Room.jsx      ← riddle unlock page
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Setup

1. **Install dependencies**

   ```bash
   cd anniversary-website
   npm install
   ```

2. **Optional: background music**  
   Place an MP3 file at `public/music/ambient.mp3`. If the file is missing, the music player still appears but playback will not start until you add a file.

3. **Run locally**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

## Features

- **Landing** — Bollywood-style intro with letterbox bars, warm typography, and “Enter the rooms” CTA
- **Rooms** — Grid of 6 month rooms; locked state shown with lock icon; unlocked rooms are highlighted
- **Riddles** — Each room has a riddle; correct answer (case-insensitive) unlocks the room; hint available
- **Persistence** — Unlocked rooms are stored in `localStorage`
- **Music player** — Fixed bottom-right: play/pause and expandable volume; uses `public/music/ambient.mp3`
- **Design** — Beach/sunset gradients, Playfair Display & Cormorant Garamond, warm ambers and stone
- **Responsive** — Layout and typography scale for mobile and desktop

## Customization

- **Riddles & answers** — Edit `src/data/riddles.js` (answer, hint, subtitle, etc.).
- **Colors & fonts** — Adjust `tailwind.config.js` and `src/index.css` (e.g. `sunset`, `beach`, `font-display`).
