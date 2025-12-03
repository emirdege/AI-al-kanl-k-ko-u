import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const habits = await prisma.habit.findMany({
      where: { userId: 1 },
    })

    const totalHabits = habits.length

    // Get last 7 days
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]

      const entries = await prisma.habitEntry.findMany({
        where: {
          date: dateStr,
          completed: true,
          habit: { userId: 1 },
        },
      })

      days.push({
        date: dateStr,
        displayDate: date.toLocaleDateString('tr-TR', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        }),
        completed: entries.length,
        total: totalHabits,
      })
    }

    return NextResponse.json(days)
  } catch (error) {
    console.error('Error fetching history:', error)
    return NextResponse.json(
      { error: 'Failed to fetch history' },
      { status: 500 }
    )
  }
}
