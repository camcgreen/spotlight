import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import LogOutButton from '@/app/components/auth/LogOutButton'
import { URL_DEV, URL_PROD } from '@/app/utils/macros'

interface Scene {
  id: string
  title: string
  device: 'iPhone' | 'iPad' | 'MacBook'
  imageLink: string | null
  position: string
  rotation: string
  backgroundColor: string
  userId: string
}

export default async function Home() {
  const session = await getServerSession(authOptions)
  // console.log(session)

  if (!session) {
    return redirect('/auth')
  }

  // const endpoint = `http://localhost:3000/api/scenes?userId=${session.user.id}`
  // process.env.NODE_ENV !== 'production' && console.log('not production')
  // process.env.NODE_ENV == 'production' && console.log('is production')
  // console.log(URL_DEV)
  // console.log(URL_PROD)
  // const endpoint = `https://getspotlight.vercel.app/api/scenes?userId=${session.user.id}`
  // const endpoint = `${URL_DEV}/api/scenes?userId=${session.user.id}`
  const endpoint = `${URL_PROD}/api/scenes?userId=${session.user.id}`
  const res = await fetch(endpoint)
  const scenes: Scene[] = await res.json()
  console.log('endpoint:', endpoint)
  console.log('scenes', scenes)

  return (
    <div>
      {session ? (
        <div>
          <h1>Display projects here.</h1>
          {/* <h2>{process.env.NODE_ENV !== 'production' ? URL_DEV : URL_PROD}</h2> */}
          <ul>
            {scenes.map((scene: Scene) => (
              <li key={scene.id}>
                <p>{scene.title}</p>
                <p>{scene.device}</p>
              </li>
            ))}
          </ul>
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
