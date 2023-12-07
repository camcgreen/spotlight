import { NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

export async function GET(req: Request) {
  const sceneId = req.url.split('/scenes/')[1]

  try {
    const scene = await prisma.scene.findUnique({
      where: {
        id: sceneId,
      },
    })
    return NextResponse.json(scene, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error retrieving scenes' },
      { status: 500 }
    )
  }
}
