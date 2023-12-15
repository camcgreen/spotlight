'use client'
import Link from 'next/link'
import { SceneType } from '@/schema/SceneSchema'
import ButtonNew from './ButtonNew'

export default async function SceneList({
  scenes,
  userId,
}: {
  userId: string
  scenes: SceneType[]
}) {
  return (
    <ul className='grid gap-4 grid-cols-2 lg:grid-cols-3 auto-rows-fr '>
      <ButtonNew userId={userId} />
      {scenes.map((scene: SceneType) => (
        <Link href={`/create/${scene.id}`}>
          <li key={scene.id} className='cursor-pointer'>
            <img
              src='/images/splash-min.jpg'
              className='rounded-xl'
              alt={scene.title}
            />
            <p>{scene.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
