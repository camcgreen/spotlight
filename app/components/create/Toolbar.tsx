'use client'
import { useCallback } from 'react'
import { debounce } from 'lodash'
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

  const debouncedHandleChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.preventDefault()
      const field = e.target.id
      const isPosRot = field.includes('position') || field.includes('rotation')
      //@ts-ignore
      setSharedScene((prevSharedScene) => ({
        ...prevSharedScene,
        [field]: isPosRot ? parseFloat(e.target.value) : e.target.value,
      }))
    }, 300),
    []
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(sharedScene)
    const updatedScene: SceneType | null = await updateScene(sharedScene.id)
    console.log('show toast notif: scene succesfully updated', updatedScene)
  }

  return (
    <div className='w-full md:w-3/12 flex justify-center items-center mr-8 select-none'>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col'
        id='toolbar'
      >
        <input
          type='text'
          id='title'
          name='title'
          minLength={1}
          maxLength={30}
          defaultValue={sharedScene.title}
          onChange={debouncedHandleChange}
        />
        <select
          name='device'
          id='device'
          onChange={debouncedHandleChange}
          value={sharedScene.device}
        >
          <option value='iPhone'>iPhone</option>
          <option value='iPad'>iPad</option>
          <option value='MacBook'>MacBook</option>
        </select>
        <input
          type='text'
          id='imageLink'
          name='imageLink'
          defaultValue={sharedScene.imageLink ? sharedScene.imageLink : ''}
          // placeholder={
          //   sharedScene.imageLink ? sharedScene.imageLink : 'Image Link'
          // }
          onChange={debouncedHandleChange}
        />
        <input
          type='color'
          name='backgroundColor'
          id='backgroundColor'
          defaultValue={sharedScene.backgroundColor}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='positionX'
          name='positionX'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.positionX}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='positionY'
          name='positionY'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.positionY}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='positionZ'
          name='positionZ'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.positionZ}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='rotationX'
          name='rotationX'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.rotationX}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='rotationY'
          name='rotationY'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.rotationY}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input
          type='range'
          id='rotationZ'
          name='rotationZ'
          min={-3.14}
          max={3.14}
          defaultValue={sharedScene.rotationZ}
          step={RANGE_STEP}
          onChange={debouncedHandleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Toolbar
