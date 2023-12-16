import SceneList from './SceneList'
import { URL_BASE } from '@/app/utils/macros'
import { SceneType, SceneSchema } from '@/schema/SceneSchema'

async function fetchScenes(userId: string): Promise<SceneType[]> {
  // await new Promise((resolve) => setTimeout(resolve, 100000000))
  await new Promise((resolve) => setTimeout(resolve, 1500))
  const endpoint = `${URL_BASE}/api/scenes?userId=${userId}`
  const res = await fetch(endpoint, { next: { revalidate: 10 } })
  const data = await res.json()

  const result = SceneSchema.array().safeParse(data)

  if (result.success) {
    return result.data
    // return []
  } else {
    console.error('Data validation error:', result.error)
    // toast appear saying that there was an error
    return []
  }
}

export async function SceneContainer({ userId }: { userId: string }) {
  const scenes: SceneType[] = await fetchScenes(userId)
  // const scenes: SceneType[] = [
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
  // {
  //   id: 'wefqwfqw',
  //   title: 'My fourth scene',
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
  // ]
  return <SceneList scenes={scenes} userId={userId} />
}

export default SceneContainer
