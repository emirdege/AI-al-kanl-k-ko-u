import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { callOpenRouter, type ChatMessage } from '@/lib/openrouter'

export async function POST() {
  try {
    // Get all habits
    const habits = await prisma.habit.findMany({
      where: { userId: 1 },
    })

    // Get last 7 days of data
    const habitData: Record<string, { completed: number; total: number }> = {}

    for (const habit of habits) {
      let completedDays = 0

      for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dateStr = date.toISOString().split('T')[0]

        const entry = await prisma.habitEntry.findUnique({
          where: {
            habitId_date: {
              habitId: habit.id,
              date: dateStr,
            },
          },
        })

        if (entry?.completed) {
          completedDays++
        }
      }

      habitData[habit.name] = {
        completed: completedDays,
        total: 7,
      }
    }

    // Build prompt
    const summary = Object.entries(habitData)
      .map(([name, data]) => `- ${name}: ${data.completed}/${data.total} gün`)
      .join('\n')

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content:
          'Sen yardımsever bir alışkanlık koçusun. Kısa ve uygulanabilir geri bildirimler ver. Yanıtlarını 150 kelimeyi geçme. Türkçe yanıt ver.',
      },
      {
        role: 'user',
        content: `İşte son 7 günlük alışkanlık tamamlama durumum:\n\n${summary}\n\nLütfen bana:\n1. Kısa bir motivasyon mesajı (2-3 cümle)\n2. Gelişim için somut bir öneri\n\nver.`,
      },
    ]

    const aiResponse = await callOpenRouter(messages)

    return NextResponse.json({ feedback: aiResponse })
  } catch (error) {
    console.error('Error generating feedback:', error)

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      { error: `Failed to generate feedback: ${errorMessage}` },
      { status: 500 }
    )
  }
}
