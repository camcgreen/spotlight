import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import SignInWithGitHub from '@/app/components/auth/SignInWithGitHub'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Spotlight - Sign in',
  description: 'Sign in to Spotlight',
}

export default async function AuthRoute() {
  const session = await getServerSession(authOptions)
  if (session) {
    return redirect('/')
  }
  return (
    <main className='flex flex-col justify-center lg:flex-row h-full'>
      <section className='w-full lg:w-5/12 flex justify-center'>
        <div className='h-full flex flex-col justify-center'>
          <h1 className='font-medium text-2xl lg:text-4xl tracking-tighter'>
            Welcome.
          </h1>
          <h4 className='text-black text-opacity-80 mb-8'>
            Sign in with GitHub to continue to Spotlight.
          </h4>
          <SignInWithGitHub />
        </div>
      </section>
      <section className='w-full lg:w-7/12 flex flex-col grow-1 items-center'>
        <img
          src='/images/iphone.jpg'
          alt='Hero image Spotlight'
          className='w-full h-0 md:w-full md:h-80 lg:h-full object-cover rounded-none lg:rounded-6xl lg:rounded-tr-none lg:rounded-br-none'
        />
      </section>
    </main>
  )
}
