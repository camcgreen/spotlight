'use client'
import { useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { PhoneModel } from '@/app/components/models/phone'
import { TabletModel } from '@/app/components/models/tablet'
import { LaptopModel } from '@/app/components/models/laptop'

type SceneProps = {
  device: 'iPhone' | 'iPad' | 'MacBook'
}

function Scene({
  device,
  setGl,
}: SceneProps & { setGl: (gl: THREE.WebGLRenderer) => void }) {
  const { gl } = useThree()
  const form = document.getElementById('toolbar') as HTMLFormElement

  // Pass the gl context up to the parent component
  useEffect(() => {
    setGl(gl)
  }, [gl, setGl])

  useFrame(() => {
    const color = (
      form.elements.namedItem('backgroundColor') as HTMLInputElement
    ).value
    gl.setClearColor(color)
  })
  switch (device) {
    case 'iPhone':
      return <PhoneModel scale={[0.1, 0.1, 0.1]} />
    case 'iPad':
      return <TabletModel scale={[0.02, 0.02, 0.02]} />
    case 'MacBook':
      return <LaptopModel scale={[0.15, 0.15, 0.15]} />
  }
}

function SceneEditor({ device }: SceneProps) {
  const [gl, setGl] = useState<THREE.WebGLRenderer | null>(null)
  const captureScreenshot = () => {
    if (gl) {
      const screenshot = gl.domElement.toDataURL()
      const link = document.createElement('a')
      link.href = screenshot
      link.download = 'screenshot.png'
      link.click()
    }
  }
  return (
    // <div className='relative w-full md:w-9/12 h-screen-middle'>
    <div className='relative w-full lg:w-9/12 h-screen-middle-sm lg:h-screen-middle'>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 7], fov: 50 }}
        className='rounded-xl'
      >
        <ambientLight />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Environment preset='city' />
        <Scene device={device} setGl={setGl} />
        <CameraControls minDistance={2} maxDistance={15} />
      </Canvas>
      <button
        onClick={captureScreenshot}
        className='bg-black hover:bg-gray-900 transition-colors text-white p-4 flex justify-center items-center rounded-lg lg:mb-0 absolute bottom-4 right-4'
      >
        <img src='/images/download.svg' alt='Download image' />
      </button>
    </div>
  )
}

export default SceneEditor
