'use client'

import { useState } from 'react'

export function FeedbackSection() {
  const [feedback, setFeedback] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function getFeedback() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/feedback', { method: 'POST' })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get feedback')
      }

      setFeedback(data.feedback)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">AI Geri Bildirimi</h2>

      {!feedback && !loading && !error && (
        <div className="text-center py-4">
          <p className="text-gray-600 mb-4">
            Alışkanlık ilerlemeniz hakkında kişiselleştirilmiş geri bildirim alın
          </p>
          <button
            onClick={getFeedback}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            AI Geri Bildirimi Al
          </button>
        </div>
      )}

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="mt-2 text-gray-600">Alışkanlıklarınız analiz ediliyor...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">
          <p className="font-medium">Hata</p>
          <p className="text-sm">{error}</p>
          <button
            onClick={getFeedback}
            className="mt-3 text-sm text-red-600 underline"
          >
            Tekrar dene
          </button>
        </div>
      )}

      {feedback && (
        <div>
          <div className="prose prose-sm max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg whitespace-pre-wrap">
              {feedback}
            </div>
          </div>
          <button
            onClick={getFeedback}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            Yeni geri bildirim al
          </button>
        </div>
      )}
    </div>
  )
}
