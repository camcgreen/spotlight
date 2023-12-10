import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'
import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import { z } from 'zod'

async function fetchScenes(userId: string): Promise<SceneType[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const endpoint = `${URL_BASE}/api/scenes?userId=${userId}`
  const res = await fetch(endpoint, { next: { revalidate: 10 } })
  const data = await res.json()

  const result = SceneSchema.array().safeParse(data)

  if (result.success) {
    return result.data
  } else {
    console.error('Data validation error:', result.error)
    // toast appear saying that there was an error
    return []
  }
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/auth')
  }

  return (
    <div>
      {session ? (
        <div>
          <h1>Display projects here.</h1>
          <Suspense fallback={<Loading />}>
            <SceneList userId={session.user.id} />
          </Suspense>
          <LogOutButton />
        </div>
      ) : (
        <div>
          <h1>Please log in to get started.</h1>
        </div>
      )}
    </div>
  )
}

async function SceneList({ userId }: { userId: string }) {
  const scenes: SceneType[] = await fetchScenes(userId)

  return scenes.length > 0 ? (
    <ul>
      {scenes.map((scene: SceneType) => (
        <li key={scene.id}>
          <p>{scene.title}</p>
          <p>{scene.device}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No scenes found</p>
  )
}

function Loading() {
  return <div>Loading...</div>
}
