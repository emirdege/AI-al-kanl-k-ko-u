import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const today = new Date().toISOString().split('T')[0]

    const habits = await prisma.habit.findMany({
      where: { userId: 1 },
      include: {
        entries: {
          where: { date: today },
        },
      },
    })

    const result = habits.map((habit) => ({
      id: habit.id,
      name: habit.name,
      completed: habit.entries[0]?.completed ?? false,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error fetching habits:', error)
    return NextResponse.json(
      { error: 'Failed to fetch habits' },
      { status: 500 }
    )
  }
}
