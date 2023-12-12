import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

export async function POST(req: NextRequest) {
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
    const scene = await prisma.scene.create({
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
    return NextResponse.json(scene, { status: 201 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error creating scene' },
      { status: 500 }
    )
  }
}
