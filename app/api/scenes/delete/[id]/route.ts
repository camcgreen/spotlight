import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/app/utils/db'

export async function DELETE(req: NextRequest) {
  const sceneId = req.url.split('/delete/')[1]

  try {
    const deletedScene = await prisma.scene.delete({
      where: {
        id: sceneId,
      },
    })
    return NextResponse.json(deletedScene, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: 'Error deleting scene' },
      { status: 500 }
    )
  }
}
