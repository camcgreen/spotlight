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
    <div
      className='w-full lg:w-3/12 lg:h-screen-middle flex mr-8 mb-8 md:mb-0 select-none'
      style={{ overflowY: 'auto' }}
      id='toolbar-container'
    >
      <form
        onSubmit={handleSubmit}
        className='w-full'
        // className='w-full h-full flex flex-col overflow-auto'
        id='toolbar'
      >
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4 text-xl'>
          <input
            type='text'
            id='title'
            name='title'
            minLength={1}
            maxLength={30}
            defaultValue={sharedScene.title}
            onChange={debouncedHandleChange}
          />
        </div>
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4'>
          <select
            name='device'
            id='device'
            onChange={(e) => {
              //@ts-ignore
              setSharedScene((prevSharedScene) => ({
                ...prevSharedScene,
                device: e.target.value,
              }))
            }}
            value={sharedScene.device}
            className='cursor-pointer'
          >
            <option
              value=''
              disabled
              className='opacity-10'
              style={{ color: 'grey' }}
            >
              Device
            </option>
            <option value='iPhone'>iPhone</option>
            <option value='iPad'>iPad</option>
            <option value='MacBook'>MacBook</option>
          </select>
        </div>
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4'>
          <input
            type='text'
            id='imageLink'
            name='imageLink'
            defaultValue={sharedScene.imageLink ? sharedScene.imageLink : ''}
            onChange={debouncedHandleChange}
            className='w-full'
          />
        </div>
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4'>
          <p className='mb-2 text-gray-700'>Background Colour</p>
          <input
            type='color'
            name='backgroundColor'
            id='backgroundColor'
            defaultValue={sharedScene.backgroundColor}
            onChange={debouncedHandleChange}
            className='cursor-pointer'
          />
        </div>
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4 flex flex-col'>
          <p className='mb-2 text-gray-700'>Position</p>
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
        </div>
        <div className='mb-4 flex flex-col'>
          <p className='mb-2 text-gray-700'>Rotation</p>
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
        </div>
        <input
          type='submit'
          value='Submit'
          className='bg-black hover:bg-gray-900 transition-colors text-white p-4 mb-4 rounded-lg cursor-pointer'
        />
      </form>
    </div>
  )
}

export default Toolbar
