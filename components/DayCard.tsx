type DayCardProps = {
  day: {
    date: string
    displayDate: string
    completed: number
    total: number
  }
}

export function DayCard({ day }: DayCardProps) {
  const percentage = day.total > 0 ? (day.completed / day.total) * 100 : 0
  const isToday = day.date === new Date().toISOString().split('T')[0]

  return (
    <div
      className={`bg-white rounded-lg shadow p-4 ${
        isToday ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
          {day.displayDate}
          {isToday && <span className="ml-2 text-xs text-blue-500">(Bugün)</span>}
        </span>
        <span className="text-sm text-gray-600">
          {day.completed}/{day.total}
        </span>
      </div>
      <div className="bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all ${
            percentage === 100
              ? 'bg-green-500'
              : percentage >= 50
              ? 'bg-blue-500'
              : percentage > 0
              ? 'bg-yellow-500'
              : 'bg-gray-300'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
