'use client'

import { useState, useEffect } from 'react'
import { HabitCard } from '@/components/HabitCard'

type Habit = {
  id: number
  name: string
  completed: boolean
}

export default function TodayPage() {
  const [habits, setHabits] = useState<Habit[]>([])
  const [loading, setLoading] = useState(true)

  const today = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const completedCount = habits.filter((h) => h.completed).length

  useEffect(() => {
    fetchHabits()
  }, [])

  async function fetchHabits() {
    try {
      const res = await fetch('/api/habits/today')
      const data = await res.json()
      setHabits(data)
    } catch (error) {
      console.error('Failed to fetch habits:', error)
    } finally {
      setLoading(false)
    }
  }

  async function toggleHabit(habitId: number, completed: boolean) {
    // Optimistic update
    setHabits((prev) =>
      prev.map((h) => (h.id === habitId ? { ...h, completed } : h))
    )

    try {
      await fetch('/api/habits/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ habitId, completed }),
      })
    } catch (error) {
      console.error('Failed to toggle habit:', error)
      // Revert on error
      setHabits((prev) =>
        prev.map((h) => (h.id === habitId ? { ...h, completed: !completed } : h))
      )
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Alışkanlıklar yükleniyor...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Bugün</h1>
        <p className="text-gray-600">{today}</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <p className="text-lg">
          <span className="font-semibold text-blue-600">{completedCount}</span>
          <span className="text-gray-600">/{habits.length} alışkanlık tamamlandı</span>
        </p>
        <div className="mt-2 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{
              width: `${habits.length > 0 ? (completedCount / habits.length) * 100 : 0}%`,
            }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={(completed) => toggleHabit(habit.id, completed)}
          />
        ))}
      </div>
    </div>
  )
}
