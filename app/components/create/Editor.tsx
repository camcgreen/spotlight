'use client'
import { useEffect, useState } from 'react'
import Toolbar from '@/app/components/create/Toolbar'
import Scene from '@/app/components/create/Scene'
import { SceneType } from '@/schema/SceneSchema'

const Editor = ({ scene }: { scene: SceneType }) => {
  const [sharedScene, setSharedScene] = useState<SceneType>(scene)
  return (
    // <div className='fixed flex w-screen h-screen-middle mt-24 m-24 bg-white'>
    <div className='flex flex-col md:flex-row'>
      <Toolbar sharedScene={sharedScene} setSharedScene={setSharedScene} />
      <Scene />
    </div>
  )
}

export default Editor
