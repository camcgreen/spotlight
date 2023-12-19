import SceneList from './SceneList'
import { URL_BASE } from '@/app/utils/macros'
import { SceneType, SceneSchema } from '@/schema/SceneSchema'

async function fetchScenes(userId: string): Promise<SceneType[]> {
  // await new Promise((resolve) => setTimeout(resolve, 1500))
  const endpoint = `${URL_BASE}/api/scenes?userId=${userId}`
  const res = await fetch(endpoint)
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

export async function SceneContainer({ userId }: { userId: string }) {
  const scenes: SceneType[] = await fetchScenes(userId)
  return <SceneList scenes={scenes} userId={userId} />
}

export default SceneContainer
