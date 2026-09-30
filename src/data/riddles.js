export const ROOMS = [
  {
    id: 'month1',
    month: 1,
    title: 'August 2025',
    subtitle: 'Walk 500 Miles With You',
    riddle: 'Who was the opponent when I said I love you at the 49ers game?',
    answer: 'broncos',
    hint: 'An AFC West team the 49ers faced.',
    srkQuote: '',
    adminAnswer: 'Broncos'
  },
  {
    id: 'month2',
    month: 2,
    title: 'September 2025',
    subtitle: 'Santa Clause Barbara Brought You to Me',
    riddle: 'Who swam farther in Santa Barbara - You or Me?',
    answer: 'me',
    hint: 'Think about who did more laps or distance in the water.',
    srkQuote: '',
    adminAnswer: 'Me'
  },
  {
    id: 'month3',
    month: 3,
    title: 'October 2025',
    subtitle: 'Mountains and Valleys, and Oceans Apart',
    riddle: 'What did we do in the Park on your last day in the US?',
    answer: 'talk',
    hint: 'We sat and shared words.',
    srkQuote: '',
    adminAnswer: 'Talk'
  },
  {
    id: 'month4',
    month: 4,
    title: 'November 2025',
    subtitle: 'Delhi ke Dillwale',
    riddle: 'Which cycle does Nagendra ride? JK. Where did we drink coffee in our 15 minute meetup?',
    answer: 'paul',
    hint: 'A French bakery/café name.',
    srkQuote: '',
    adminAnswer: 'PAUL'
  },
  {
    id: 'month5',
    month: 5,
    title: 'December 2025',
    subtitle: 'Living the Dream, for a Week',
    riddle: "What was your first meal in the US upon landing?",
    answer: 'taco bell',
    hint: 'A fast-food chain known for tacos and burritos.',
    srkQuote: '',
    adminAnswer: 'Taco Bell'
  },
  {
    id: 'month6',
    month: 6,
    title: 'January 2026',
    subtitle: 'Being Part of the Family',
    riddle: "What's our favorite convertible?",
    answer: 'mustang',
    hint: 'An American muscle car, often with a galloping horse logo.',
    srkQuote: '',
    adminAnswer: 'Mustang'
  },
  {
    id: 'month7',
    month: 7,
    title: 'February 2026',
    subtitle: 'Nourishing Body and Soul',
    riddle: 'What healthy meal delivery service did we use during our detox?',
    answer: 'sakara',
    hint: 'A plant-based, organic meal delivery brand.',
    srkQuote: '',
    adminAnswer: 'Sakara'
  },
  {
    id: 'month8',
    month: 8,
    title: 'March 2026',
    subtitle: 'Under One Roof',
    riddle: 'What was the first meal you cooked for me when we lived together?',
    answer: 'kala chana',
    hint: 'A traditional Indian black chickpea dish.',
    srkQuote: '',
    adminAnswer: 'Kala Chana'
  },
  {
    id: 'month9',
    month: 9,
    title: 'April 2026',
    subtitle: 'New Beginnings, New Path',
    riddle: 'Where did the man go?',
    answer: 'jai ho',
    hint: 'An Oscar-winning Bollywood song title.',
    srkQuote: '',
    adminAnswer: 'Jai Ho'
  },
  {
    id: 'month10',
    month: 10,
    title: 'May 2026',
    subtitle: 'Tropical Paradise Together',
    riddle: 'Where did we go where I say we went to heart rock?',
    answer: 'arch rock',
    hint: 'A natural rock formation in Hawaii.',
    srkQuote: '',
    adminAnswer: 'Arch Rock'
  },
  {
    id: 'month11',
    month: 11,
    title: 'June 2026',
    subtitle: 'Chase-ing Love and Dreams',
    riddle: 'Chase-ing Who?',
    answer: 'diljeet',
    hint: 'A Bollywood star we were celebrating.',
    srkQuote: '',
    adminAnswer: 'Diljeet'
  },
  {
    id: 'month12',
    month: 12,
    title: 'July 2026',
    subtitle: 'Singing into Another Year',
    riddle: 'What was the song I first sang for you?',
    answer: 'you are my soniya',
    hint: 'A classic romantic song.',
    srkQuote: '',
    adminAnswer: 'You Are My Soniya'
  },
  {
    id: 'month13',
    month: 13,
    title: 'August 2026',
    subtitle: 'A Year of Forever',
    riddle: 'What were the couple sitting next to us at our anniversary dinner?',
    answer: 'gay',
    hint: 'A descriptor for the couple we met.',
    srkQuote: '',
    adminAnswer: 'Gay'
  }
]

export function getRoomById(id) {
  return ROOMS.find(r => r.id === id)
}
