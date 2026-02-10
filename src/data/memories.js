import messages from './messages.json'

export const getMemoriesForMonth = (monthId) => {
  const data = messages.months[monthId]
  if (!data) return { photos: [], videos: [], voiceNotes: [], texts: [] }
  return data
}

// Month-specific gradient backgrounds for memory viewer
export const MONTH_GRADIENTS = {
  'month-1': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a18cd1 100%)',
  'month-2': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'month-3': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'month-4': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'month-5': 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
  'month-6': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
}

export const getMonthGradient = (monthId) =>
  MONTH_GRADIENTS[monthId] || MONTH_GRADIENTS['month-1']
