'use client'
import { useEffect, useState } from 'react'
import Toolbar from '@/app/components/create/Toolbar'
import Scene from '@/app/components/create/Scene'
import { SceneType } from '@/schema/SceneSchema'

const Editor = ({ scene }: { scene: SceneType }) => {
  const [sharedScene, setSharedScene] = useState<SceneType>(scene)
  useEffect(() => {
    console.log(sharedScene)
  }, [sharedScene])
  return (
    <div>
      <Toolbar sharedScene={sharedScene} setSharedScene={setSharedScene} />
      <Scene sharedScene={sharedScene} setSharedScene={setSharedScene} />
    </div>
  )
}

export default Editor
