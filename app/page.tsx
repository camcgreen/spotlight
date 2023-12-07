import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'

export default async function Home() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (!session) {
    return redirect('/auth')
  }

  return (
    <div>
      {session ? (
        <div>
          <h1>Display projects here.</h1>
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
