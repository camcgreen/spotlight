'use client'
import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'
import { RANGE_STEP } from '@/app/utils/macros'

const Toolbar = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  async function updateScene(sceneId: string): Promise<SceneType | null> {
    const endpoint = `${URL_BASE}/api/scenes/update/${sceneId}`
    const res = await fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(sharedScene),
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
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    e.preventDefault()
    const field = e.target.id
    const isPosRot = field.includes('position') || field.includes('rotation')
    console.log(isPosRot)
    setSharedScene({
      ...sharedScene,
      [field]: isPosRot ? parseFloat(e.target.value) : e.target.value,
    })
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const updatedScene: SceneType | null = await updateScene(sharedScene.id)
    console.log('show toast notif: scene succesfully updated')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        id='title'
        name='title'
        minLength={1}
        maxLength={30}
        placeholder={sharedScene.title}
        onChange={handleChange}
      />
      <select name='device' id='device' onChange={handleChange}>
        <option value='iPhone'>iPhone</option>
        <option value='iPad'>iPad</option>
        <option value='MacBook'>MacBook</option>
      </select>
      <input
        type='text'
        id='imageLink'
        name='imageLink'
        placeholder={
          sharedScene.imageLink ? sharedScene.imageLink : 'Image Link'
        }
        onChange={handleChange}
      />
      <input
        type='color'
        id='backgroundColor'
        placeholder={sharedScene.backgroundColor}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionX'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionX}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionY'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionY}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='positionZ'
        name='position'
        min={-3.14}
        max={3.14}
        value={sharedScene.positionZ}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationX'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationX}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationY'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationY}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input
        type='range'
        id='rotationZ'
        name='rotation'
        min={-3.14}
        max={3.14}
        value={sharedScene.rotationZ}
        step={RANGE_STEP}
        onChange={handleChange}
      />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Toolbar
