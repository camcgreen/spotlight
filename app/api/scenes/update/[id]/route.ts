import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

export async function PUT(req: NextRequest) {
  const sceneId = req.url.split('/update/')[1]
  const body = await req.json()
  const {
    title,
    device,
    imageLink,
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    backgroundColor,
    userId,
  } = body

  try {
    const updateScene = await prisma.scene.update({
      where: {
        id: sceneId,
      },
      data: {
        title: title,
        device: device,
        imageLink: imageLink && imageLink,
        positionX: positionX,
        positionY: positionY,
        positionZ: positionZ,
        rotationX: rotationX,
        rotationY: rotationY,
        rotationZ: rotationZ,
        backgroundColor: backgroundColor,
        userId: userId,
      },
    })
    return NextResponse.json(updateScene, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error updating scene' },
      { status: 500 }
    )
  }
}
