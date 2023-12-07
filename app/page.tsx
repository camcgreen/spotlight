import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'

export default async function Home() {
  const session = await getServerSession(authOptions)
  // console.log(session)

  if (!session) {
    return redirect('/auth')
  }

  // const endpoint = `http://localhost:3000/api/scenes?userId=${session.user.id}`
  const endpoint = `https://getspotlight.vercel.app/api/scenes?userId=${session.user.id}`
  const res = await fetch(endpoint)
  const scenes = await res.json()
  console.log('endpoint:', endpoint)
  console.log('scenes', scenes)

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
