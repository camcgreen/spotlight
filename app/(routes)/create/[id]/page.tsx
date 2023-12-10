import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import { CreateSceneProps } from '@/schema/SceneCreateSchema'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import Editor from '@/app/components/create/Editor'

async function fetchScene(sceneId: string): Promise<SceneType | null> {
  const endpoint = `${URL_BASE}/api/scenes/${sceneId}`
  const res = await fetch(endpoint, { next: { revalidate: 10 } })
  const data = await res.json()

  const result = SceneSchema.safeParse(data)

  if (result.success) {
    return result.data
  } else {
    console.error('Data validation error:', result.error)
    return null
  }
}

async function Create({ params }: { params: CreateSceneProps }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect('/auth')
  }
  const scene: SceneType | null = await fetchScene(params.id)
  if (!scene) {
    return <p>The scene does not exist.</p>
  }
  return (
    <div>
      <Editor scene={scene} />
    </div>
  )
}

export default Create
