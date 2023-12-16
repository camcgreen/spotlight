'use client'
import { useEffect, useState } from 'react'
import Toolbar from '@/app/components/create/Toolbar'
import Scene from '@/app/components/create/Scene'
import { SceneType } from '@/schema/SceneSchema'

const Editor = ({ scene }: { scene: SceneType }) => {
  const [sharedScene, setSharedScene] = useState<SceneType>(scene)
  return (
    <div className='flex flex-col md:flex-row mx-4 p-4 lg:mx-8 lg:p-8 bg-white rounded-xl'>
      <Toolbar sharedScene={sharedScene} setSharedScene={setSharedScene} />
      <Scene device={sharedScene.device} />
    </div>
  )
}

export default Editor
