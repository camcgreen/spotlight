import { NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

// make sure user authenticated
// get user id from session

export async function GET(req: Request) {
  try {
    const scenes = await prisma.scene.findMany({
      where: {
        userId: 'clpsa44zn0000xpgigs2ipm0l',
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
