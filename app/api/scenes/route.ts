import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

// Returns an array of all scenes associates with user
// Array can be empty
// Otherwise error message with status 500
export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId') as string
  try {
    const scenes = await prisma.scene.findMany({
      where: {
        userId: userId,
      },
    })
    return NextResponse.json(scenes, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error retrieving scenes' },
      { status: 500 }
    )
  }
}
