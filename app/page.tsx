import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect('/auth')
  }

  return (
    <div className='p-10'>
      <h1>Hello from the index page, this is a public route</h1>
      {session ? (
        <div>
          <h1>You are logged in.</h1>
          <LogOutButton />
        </div>
      ) : (
        <div>
          <h1>Please log in to see something special</h1>
        </div>
      )}
    </div>
  )
}
