import { Suspense } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import Loading from '@/app/components/dashboard/Loading'
import SceneContainer from './components/dashboard/SceneContainer'

export const metadata = {
  title: 'Spotlight - Dashboard',
  description: 'Your recent projects.',
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/auth')
  }

  return (
    <main className='px-10 py-5 md:px-20 md:py-10 lg:px-40 lg:py-20 flex-grow'>
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
            <SceneContainer userId={session.user.id} />
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
