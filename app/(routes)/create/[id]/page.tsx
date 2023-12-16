import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import { CreateSceneProps } from '@/schema/SceneCreateSchema'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/utils/auth'
import Header from '@/app/components/common/Header'
import Footer from '@/app/components/common/Footer'
import Editor from '@/app/components/create/Editor'
import SceneNotFound from '@/app/components/create/SceneNotFound'

export const metadata = {
  title: 'Spotlight - Create',
  description: 'Create your scene.',
}

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
    return <SceneNotFound />
  }
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <Editor scene={scene} />
      <Footer />
    </div>
  )
}

export default Create
