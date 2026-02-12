export const ROOMS = [
  {
    id: 'month1',
    month: 1,
    title: 'August 2025',
    subtitle: 'Walk 500 Miles to You',
    riddle: 'In which SRK movie does he famously spread his arms wide and say "I love you, Simran"?',
    answer: 'ddlj',
    hint: 'The train scene... the mustard fields... the most iconic Bollywood romance',
    srkQuote: 'Bade bade deshon mein aisi choti choti baatein hoti rehti hain',
    adminAnswer: 'DDLJ (Dilwale Dulhania Le Jayenge)'
  },
  {
    id: 'month2',
    month: 2,
    title: 'September 2025',
    subtitle: 'Santa Clause Barbara Brought You to Me',
    riddle: 'What does SRK famously say happens when you truly love someone, according to Kuch Kuch Hota Hai?',
    answer: 'duniya',
    hint: 'Think about how the whole world changes for you',
    srkQuote: 'Pyaar dosti hai... Love is friendship',
    adminAnswer: 'duniya (Full quote: Pyaar kiya to darna kya / Puri duniya badal jaati hai)'
  },
  {
    id: 'month3',
    month: 3,
    title: 'October 2025',
    subtitle: 'Mountains and Valleys, and Oceans Apart',
    riddle: "In which SRK movie does he travel across Europe searching for his lost love's engagement ring?",
    answer: 'harry',
    hint: "He's a tour guide, she's looking for her ring. Mini trails and big adventures!",
    srkQuote: 'Safar khoobsurat hai manzil se bhi',
    adminAnswer: 'Harry (Jab Harry Met Sejal - accept either "harry" or "sejal")'
  },
  {
    id: 'month4',
    month: 4,
    title: 'November 2025',
    subtitle: 'Delhi ke Dillwale',
    riddle: "What is the name of SRK's character in Chak De India who coaches the Indian women's hockey team?",
    answer: 'kabir',
    hint: 'His full name is Kabir Khan',
    srkQuote: 'Sattar minute. Bahatar minute tumhare paas hain. Mujhe sirf is baare mein socho',
    adminAnswer: 'Kabir (Kabir Khan from Chak De India)'
  },
  {
    id: 'month5',
    month: 5,
    title: 'December 2025',
    subtitle: 'Living a Week-Long Dream',
    riddle: 'Which SRK spy movie brought him back to action cinema after a long break in 2023?',
    answer: 'pathaan',
    hint: 'He plays a RAW agent alongside Deepika Padukone',
    srkQuote: 'Jhooti kasam khuda ki, desh se zyada kuch nahi',
    adminAnswer: 'Pathaan'
  },
  {
    id: 'month6',
    month: 6,
    title: 'January 2026',
    subtitle: 'Being Part of the Family',
    riddle: "What word does SRK repeat three times in the famous DDLJ scene where he convinces Simran's father to let her go?",
    answer: 'jaa',
    hint: 'He tells Simran to leave and live her life',
    srkQuote: 'Ja Simran ja, jee le apni zindagi',
    adminAnswer: 'Jaa (from "Ja Simran ja, jee le apni zindagi")'
  }
]

export function getRoomById(id) {
  return ROOMS.find(r => r.id === id)
}
