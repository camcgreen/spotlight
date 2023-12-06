import { NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

// make sure user authenticated
// get user id from session

export async function GET(req: Request) {
  const sceneId = req.url.split('/scenes/')[1]
  console.log(sceneId) // this will be whatever comes after the /api/scenes/

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
