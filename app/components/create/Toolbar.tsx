'use client'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'

const Toolbar = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const field = e.target.id
    setSharedScene({ ...sharedScene, [field]: e.target.value })
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // need to create an endpoint for updating the scene
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='title'
        placeholder={sharedScene.title}
        onChange={handleChange}
      />
      <input
        type='text'
        id='backgroundColor'
        placeholder={sharedScene.backgroundColor}
        onChange={handleChange}
      />
    </form>
  )
}

export default Toolbar
