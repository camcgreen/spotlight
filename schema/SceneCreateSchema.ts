import { SceneType } from './SceneSchema'

export type CreateSceneProps = {
  id: string
}

export type SharedSceneProps = {
  sharedScene: SceneType
  setSharedScene: (scene: SceneType) => void
}
