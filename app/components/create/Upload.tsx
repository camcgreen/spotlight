'use client'
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useEdgeStore } from '@/lib/edgestore'
import { SingleImageDropzone } from '@/app/components/common/SingleImageDropzone'
import { SceneType } from '@/schema/SceneSchema'

export default function Upload({
  visible,
  setShowUpload,
  setSharedScene,
  device,
}: {
  visible: boolean
  setShowUpload: Dispatch<SetStateAction<boolean>>
  setSharedScene: (scene: SceneType) => void
  device: string
}) {
  const [res, setRes] = useState<string>('')
  const [file, setFile] = useState<File>()
  const [progress, setProgress] = useState<number>(0)
  const { edgestore } = useEdgeStore()
  useEffect(() => {
    switch (device) {
      case 'iPhone':
        setRes('1170x2532 (19.5:9)')
        break
      case 'iPad':
        setRes('2360x1640 (23:16)')
        break
      case 'MacBook':
        setRes('2560x1600 (16:10)')
        break
      default:
        break
    }
  }, [device])
  return (
    <div
      className='fixed w-screen h-screen right-0 bottom-0 z-10 transition-opacity'
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      <div
        className='absolute w-full h-full right-0 bottom-0 bg-gray-500 bg-opacity-90'
        onClick={() => setShowUpload(false)}
      />
      <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 px-40 py-20 flex flex-col rounded-2xl bg-white'>
        <div className='mb-8'>
          <SingleImageDropzone
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 4, // 4MB
            }}
            value={file}
            onChange={(file) => {
              setFile(file)
            }}
          />
        </div>
        {file && (
          <div className='w-full h-2 mb-8 border rounded overflow-hidden'>
            <div
              className='h-full bg-black transition-all duration-150'
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {file && (
          <button
            className='bg-black hover:bg-gray-900 transition-colors text-white p-4 flex justify-center items-center rounded-lg'
            onClick={async () => {
              if (file) {
                const res = await edgestore.myPublicImages.upload({
                  file,
                  onProgressChange: (progress) => {
                    setProgress(progress)
                  },
                })
                const imageUrl = res.url
                const imageLinkInput = document.getElementById('imageLink')
                imageLinkInput?.setAttribute('value', imageUrl)
                //@ts-ignore
                setSharedScene((prevSharedScene) => ({
                  ...prevSharedScene,
                  imageLink: imageUrl,
                }))
                setShowUpload(false)
                setProgress(0)
              }
            }}
          >
            Confirm
          </button>
        )}
        {!file && (
          <h2 className='text-sm md:text-base lg:text-xl text-center'>
            Upload your image here.
          </h2>
        )}
        {!file && (
          <h3 className='text-xs lg:text-sm text-center text-opacity-50 text-black'>
            Recommended resolution: {res}.
          </h3>
        )}
      </div>
    </div>
  )
}
