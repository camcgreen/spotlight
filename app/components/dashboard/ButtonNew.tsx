'use client'
import { URL_BASE } from '@/app/utils/macros'
import { SceneType, SceneSchema, CreatedSceneType } from '@/schema/SceneSchema'
import { useRouter } from 'next/navigation'

const ButtonNew = ({
  userId,
  empty = false,
}: {
  userId: string
  empty?: boolean
}) => {
  const router = useRouter()
  async function createScene(): Promise<SceneType | null> {
    const endpoint = `${URL_BASE}/api/scenes/create`
    const defaultScene: CreatedSceneType = {
      title: 'New Scene',
      device: 'iPhone',
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      backgroundColor: '#eeffdd',
      userId: userId,
    }
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(defaultScene),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    const result = SceneSchema.safeParse(data)

    if (result.success) {
      return result.data
    } else {
      console.error('Data validation error:', result.error)
      return null
    }
  }
  async function handleClick() {
    const newScene: SceneType | null = await createScene()
    console.log(
      'show toast notif: scene succesfully created with id',
      newScene?.id
    )
    router.push('/create/' + newScene?.id)
  }
  return (
    <div className={empty ? '' : 'flex justify-center items-center'}>
      <button
        className='bg-black text-white hover:bg-gray-900 transition-colors text-3xl rounded-lg w-8 h-8 flex justify-center items-center font-extralight'
        onClick={handleClick}
      >
        +
      </button>
    </div>
  )
}

export default ButtonNew
