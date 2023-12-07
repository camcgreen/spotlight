import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

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
