'use client'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'

const SceneEditor = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  // return <div>Scene Editor: {sharedScene.backgroundColor}</div>
  return (
    <ul>
      {Object.entries(sharedScene).map(([k, v], i) => (
        <li key={i}>{`${k}: ${v}`}</li>
      ))}
    </ul>
  )
}

export default SceneEditor
