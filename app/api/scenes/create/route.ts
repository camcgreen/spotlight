import { NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

// make sure user authenticated
// get user id from session

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const { title } = body
  console.log(title)

  try {
    const scene = await prisma.scene.create({
      data: {
        title: title,
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
