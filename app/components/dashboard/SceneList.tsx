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
  if (scenes.length > 0) {
    return (
      <ul className='grid gap-4 grid-cols-2 lg:grid-cols-3 auto-rows-fr '>
        <ButtonNew userId={userId} />
        {scenes.map((scene: SceneType) => (
          <Link href={`/create/${scene.id}`} key={scene.id}>
            <li className='cursor-pointer hover:opacity-80 transition-opacity'>
              <img
                // src='/images/iphone.jpg'
                src={
                  scene.device === 'iPhone'
                    ? '/images/iphone.jpg'
                    : scene.device === 'iPad'
                    ? '/images/ipad.jpg'
                    : '/images/macbook.jpg'
                }
                className='rounded-xl'
                alt={scene.title}
              />
              <p>{scene.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    )
  } else {
    return (
      <ul>
        <ButtonNew userId={userId} empty={true} />
      </ul>
    )
  }
}
