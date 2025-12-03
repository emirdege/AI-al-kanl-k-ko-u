import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { habitId, completed } = await request.json()
    const today = new Date().toISOString().split('T')[0]

    await prisma.habitEntry.upsert({
      where: {
        habitId_date: {
          habitId,
          date: today,
        },
      },
      update: { completed },
      create: {
        habitId,
        date: today,
        completed,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error toggling habit:', error)
    return NextResponse.json(
      { error: 'Failed to toggle habit' },
      { status: 500 }
    )
  }
}
