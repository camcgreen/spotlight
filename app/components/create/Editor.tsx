'use client'
import { useEffect, useState } from 'react'
import Toolbar from '@/app/components/create/Toolbar'
import Scene from '@/app/components/create/Scene'
import { SceneType } from '@/schema/SceneSchema'

const Editor = ({ scene }: { scene: SceneType }) => {
  const [sharedScene, setSharedScene] = useState<SceneType>(scene)
  return (
    <div className='flex h-screen'>
      <Toolbar sharedScene={sharedScene} setSharedScene={setSharedScene} />
      <Scene />
    </div>
  )
}

export default Editor
