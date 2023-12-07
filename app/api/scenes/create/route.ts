import { NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

// get user id from session
// zod to validate incoming data

export async function POST(req: Request) {
  const body = await req.json()
  const { title, device, imageLink, position, rotation, backgroundColor } = body

  try {
    const scene = await prisma.scene.create({
      data: {
        title: title,
        device: device,
        imageLink: imageLink && imageLink,
        position: position,
        rotation: rotation,
        backgroundColor: backgroundColor,
        userId: 'clpsa44zn0000xpgigs2ipm0l', // Associate the scene with Cam (hard coded for now)
      },
    })
    return NextResponse.json(scene, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error creating scene' },
      { status: 500 }
    )
  }
}
