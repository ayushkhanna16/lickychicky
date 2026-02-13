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
  }
]

export function getRoomById(id) {
  return ROOMS.find(r => r.id === id)
}
