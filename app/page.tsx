import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'
import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import SceneList from '@/app/components/dashboard/SceneList'
import ButtonNew from '@/app/components/dashboard/ButtonNew'
import { z } from 'zod'

async function fetchScenes(userId: string): Promise<SceneType[]> {
  // await new Promise((resolve) => setTimeout(resolve, 3000))
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

  // const scenes: SceneType[] = await fetchScenes(userId)
  const scenes: SceneType[] = [
    // {
    //   id: 'wefqwfqw',
    //   title: 'My first scene',
    //   device: 'iPhone',
    //   imageLink: null,
    //   backgroundColor: '#FFFFFF',
    //   positionX: 0,
    //   positionY: 0,
    //   positionZ: 0,
    //   rotationX: 0,
    //   rotationY: 0,
    //   rotationZ: 0,
    //   userId: 'qwdwefewfwe',
    // },
    // {
    //   id: 'wefqwfqw',
    //   title: 'My second scene',
    //   device: 'MacBook',
    //   imageLink: null,
    //   backgroundColor: '#FFFFFF',
    //   positionX: 0,
    //   positionY: 0,
    //   positionZ: 0,
    //   rotationX: 0,
    //   rotationY: 0,
    //   rotationZ: 0,
    //   userId: 'qwdwefewfwe',
    // },
    // {
    //   id: 'wefqwfqw',
    //   title: 'My third scene',
    //   device: 'iPad',
    //   imageLink: null,
    //   backgroundColor: '#FFFFFF',
    //   positionX: 0,
    //   positionY: 0,
    //   positionZ: 0,
    //   rotationX: 0,
    //   rotationY: 0,
    //   rotationZ: 0,
    //   userId: 'qwdwefewfwe',
    // },
    {
      id: 'wefqwfqw',
      title: 'My fourth scene',
      device: 'iPhone',
      imageLink: null,
      backgroundColor: '#FFFFFF',
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      userId: 'qwdwefewfwe',
    },
  ]

  if (!session) {
    return redirect('/auth')
  }

  return (
    <main className='px-10 py-5 md:px-20 md:py-10 lg:px-40 lg:py-20 h-full flex-grow'>
      {session ? (
        <section>
          <div className='flex items-center mb-4'>
            <img
              src={session.user.image}
              alt='User profile image'
              className='rounded-full w-8 md:w-10 lg:w-12 mr-4'
            />
            {/* <LogOutButton /> */}
          </div>
          <h1 className='font-medium text-2xl lg:text-4xl tracking-tighter'>
            My projects.
          </h1>
          <h4 className='text-black text-opacity-80 mb-8'>
            Your recently saved projects.
          </h4>
          <Suspense fallback={<Loading />}>
            <SceneList scenes={scenes} userId={session.user.id} />
          </Suspense>
        </section>
      ) : (
        <div>
          <h1>Please log in to get started.</h1>
        </div>
      )}
    </main>
  )
}

function Loading() {
  return <div>Loading...</div>
}
