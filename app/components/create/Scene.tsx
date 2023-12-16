'use client'
import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { PhoneModel } from '@/app/components/models/phone'
import { TabletModel } from '@/app/components/models/tablet'
import { LaptopModel } from '@/app/components/models/laptop'

function Scene({ device }: { device: 'iPhone' | 'iPad' | 'MacBook' }) {
  switch (device) {
    case 'iPhone':
      return <PhoneModel scale={[0.1, 0.1, 0.1]} />
    case 'iPad':
      return <TabletModel scale={[0.02, 0.02, 0.02]} />
    case 'MacBook':
      return <LaptopModel scale={[0.15, 0.15, 0.15]} />
  }
}

function SceneEditor({ device }: { device: 'iPhone' | 'iPad' | 'MacBook' }) {
  useEffect(() => {}, [])
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
