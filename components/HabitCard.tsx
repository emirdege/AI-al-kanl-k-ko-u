'use client'

type HabitCardProps = {
  habit: {
    id: number
    name: string
    completed: boolean
  }
  onToggle: (completed: boolean) => void
}

export function HabitCard({ habit, onToggle }: HabitCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex items-center justify-between transition ${
        habit.completed ? 'border-l-4 border-green-500' : ''
      }`}
    >
      <span
        className={`text-lg ${
          habit.completed ? 'text-gray-500 line-through' : 'text-gray-900'
        }`}
      >
        {habit.name}
      </span>
      <button
        onClick={() => onToggle(!habit.completed)}
        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition ${
          habit.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {habit.completed && (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
