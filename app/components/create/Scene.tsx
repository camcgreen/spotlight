'use client'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'

const SceneEditor = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  return <div>Scene Editor: {sharedScene.title}</div>
}

export default SceneEditor
