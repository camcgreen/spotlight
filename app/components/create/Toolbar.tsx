'use client'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import { useRouter } from 'next/navigation'
import { URL_BASE } from '@/app/utils/macros'
import { SceneSchema, SceneType } from '@/schema/SceneSchema'
import { SharedSceneProps } from '@/schema/SceneCreateSchema'
import { RANGE_STEP } from '@/app/utils/macros'
import Upload from './Upload'

const Toolbar = ({ sharedScene, setSharedScene }: SharedSceneProps) => {
  const router = useRouter()
  const [showUpload, setShowUpload] = useState<boolean>(false)
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
      console.error('Scene update error:', result.error)
      return null
    }
  }

  async function deleteScene(sceneId: string): Promise<SceneType | null> {
    const endpoint = `${URL_BASE}/api/scenes/delete/${sceneId}`
    const res = await fetch(endpoint, { method: 'DELETE' })
    console.log(res)
    const data = await res.json()
    const result = SceneSchema.safeParse(data)
    if (result.success) {
      return result.data
    } else {
      console.error('Scene delete error:', result.error)
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
    // console.log(sharedScene)
    const updatedScene: SceneType | null = await updateScene(sharedScene.id)
    console.log('show toast notif: scene succesfully updated', updatedScene)
  }

  return (
    <div
      className='w-full lg:w-3/12 lg:h-screen-middle flex mr-8 mb-8 md:mb-0 select-none'
      style={{ overflowY: 'auto' }}
      id='toolbar-container'
    >
      <form onSubmit={handleSubmit} className='w-full' id='toolbar'>
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
            className='text-xs md:text-base cursor-pointer'
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
            className='w-full hidden'
          />
          <button
            className='text-xs md:text-sm p-2 lg:px-4 lg:py-2 flex justify-center items-center rounded-lg border border-black hover:border-gray-500 hover:text-gray-500 transition-colors'
            onClick={() => setShowUpload(true)}
          >
            Choose image
          </button>
        </div>
        <div className='border-solid border-0 border-b border-gray-300 pb-4 mb-4'>
          <p className='text-xs md:text-base mb-2 text-gray-700'>
            Background Colour
          </p>
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
          <p className='text-xs md:text-base mb-2 text-gray-700'>Position</p>
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
          <p className='text-xs md:text-base mb-2 text-gray-700'>Rotation</p>
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
        <div className='flex mb-4'>
          <input
            type='submit'
            value='Save Project'
            className='text-xs md:text-sm bg-black hover:bg-gray-900 transition-colors text-white p-4 mr-4 rounded-lg cursor-pointer'
          />
          <button
            className='bg-red-500 hover:bg-red-600 p-4 rounded-lg cursor-pointer'
            onClick={async (e) => {
              e.preventDefault()
              const confirmed = confirm(
                'Are you sure you want to delete this project?'
              )
              if (confirmed) {
                await deleteScene(sharedScene.id)
                router.push('/')
              } else return
            }}
          >
            <img className='h-4' src='/images/trash.svg' alt='Delete project' />
          </button>
        </div>
      </form>
      <Upload
        visible={showUpload}
        setShowUpload={setShowUpload}
        setSharedScene={setSharedScene}
        device={sharedScene.device}
      />
    </div>
  )
}

export default Toolbar
