'use client'

import { useState, useEffect } from 'react'
import { DayCard } from '@/components/DayCard'
import { FeedbackSection } from '@/components/FeedbackSection'

type DayData = {
  date: string
  displayDate: string
  completed: number
  total: number
}

export default function HistoryPage() {
  const [days, setDays] = useState<DayData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHistory()
  }, [])

  async function fetchHistory() {
    try {
      const res = await fetch('/api/habits/history')
      const data = await res.json()
      setDays(data)
    } catch (error) {
      console.error('Failed to fetch history:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Geçmiş yükleniyor...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Geçmiş</h1>
        <p className="text-gray-600">Son 7 günün</p>
      </div>

      <div className="space-y-3 mb-8">
        {days.map((day) => (
          <DayCard key={day.date} day={day} />
        ))}
      </div>

      <FeedbackSection />
    </div>
  )
}
