'use client'
import { useEffect } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { PhoneModel } from '@/app/components/models/phone'
import { TabletModel } from '@/app/components/models/tablet'
import { LaptopModel } from '@/app/components/models/laptop'

type SceneProps = {
  device: 'iPhone' | 'iPad' | 'MacBook'
}

function Scene({ device }: SceneProps) {
  const { gl } = useThree()
  const form = document.getElementById('toolbar') as HTMLFormElement
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
  return (
    <div className='w-full md:w-9/12 rounded-xl h-screen-middle-sm lg:h-screen-middle bg-dark-sky'>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Environment preset='city' />
        <Scene device={device} />
        <CameraControls minDistance={3} maxDistance={15} />
      </Canvas>
    </div>
  )
}

export default SceneEditor
