'use client'
import { Mesh } from 'three'
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, MeshProps } from '@react-three/fiber'
import { CameraControls, Environment } from '@react-three/drei'
import { PhoneModel } from '@/app/components/models/phone'

function Box(props: MeshProps) {
  const meshRef = useRef<Mesh>(null)
  const form = document.getElementById('toolbar') as HTMLFormElement
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.set(
        parseFloat(
          (form.elements.namedItem('positionX') as HTMLInputElement).value
        ),
        parseFloat(
          (form.elements.namedItem('positionY') as HTMLInputElement).value
        ),
        parseFloat(
          (form.elements.namedItem('positionZ') as HTMLInputElement).value
        )
      )
      meshRef.current.rotation.set(
        parseFloat(
          (form.elements.namedItem('rotationX') as HTMLInputElement).value
        ),
        parseFloat(
          (form.elements.namedItem('rotationY') as HTMLInputElement).value
        ),
        parseFloat(
          (form.elements.namedItem('rotationZ') as HTMLInputElement).value
        )
      )
    }
  })
  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='lightgrey' />
    </mesh>
  )
}

const SceneEditor = () => {
  useEffect(() => {}, [])
  return (
    <div className='w-full md:w-9/12 rounded-xl h-screen-middle-sm lg:h-screen-middle bg-dark-sky'>
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Environment preset='city' />
        {/* <Box position={[0, 0, 0]} /> */}
        <PhoneModel scale={[0.1, 0.1, 0.1]} />
        <CameraControls
        // ref={cameraControlsRef}
        // minDistance={minDistance}
        // enabled={enabled}
        // verticalDragToForward={verticalDragToForward}
        // dollyToCursor={dollyToCursor}
        // infinityDolly={infinityDolly}
        />
      </Canvas>
    </div>
  )
}

export default SceneEditor
