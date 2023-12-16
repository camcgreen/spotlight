import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    base_1: THREE.Mesh
    base_2: THREE.Mesh
    base_frame_1: THREE.Mesh
    base_frame_2: THREE.Mesh
    bottom_1: THREE.Mesh
    bottom_2: THREE.Mesh
    bottom_3: THREE.Mesh
    buttons: THREE.Mesh
    camera_base: THREE.Mesh
    camera_frame: THREE.Mesh
    camera_glass: THREE.Mesh
    camera_inside: THREE.Mesh
    camera_inside001: THREE.Mesh
    camera_outside: THREE.Mesh
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cylinder2_1002: THREE.Mesh
    Disc001: THREE.Mesh
    Disc003: THREE.Mesh
    Extrude002: THREE.Mesh
    Extrude_1002: THREE.Mesh
    Pakrovimo_portas_1001: THREE.Mesh
    screen: THREE.Mesh
    ['screen-frame']: THREE.Mesh
    Sensor002: THREE.Mesh
    sim_card001: THREE.Mesh
    Sweep002: THREE.Mesh
  }
  materials: {
    ['Mat.013']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Mat.6_2_1.001']: THREE.MeshStandardMaterial
    ['Mat.012']: THREE.MeshStandardMaterial
    ['Mat.011']: THREE.MeshStandardMaterial
    ['Mat.010']: THREE.MeshStandardMaterial
    ['Mat.6_1.003']: THREE.MeshStandardMaterial
    ['Mat.008']: THREE.MeshStandardMaterial
    ['default.001']: THREE.MeshStandardMaterial
    ['Mat.007']: THREE.MeshStandardMaterial
    ['Mat.6_2.002']: THREE.MeshStandardMaterial
    ['Mat.027']: THREE.MeshStandardMaterial
    ['Mat.004']: THREE.MeshStandardMaterial
    ['Mat.003']: THREE.MeshStandardMaterial
    ['Mat.6_2.003']: THREE.MeshStandardMaterial
    ['Mat.002']: THREE.MeshStandardMaterial
  }
}

export function PhoneModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/iphone.glb') as GLTFResult
  const form = document.getElementById('toolbar') as HTMLFormElement
  const groupRef = useRef<THREE.Group>(null)
  const imageLink = (form.elements.namedItem('imageLink') as HTMLInputElement)
    .value
  let texture
  if (imageLink) {
    console.log(imageLink)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    texture = useTexture(imageLink)
  }
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.set(
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
      groupRef.current.rotation.set(
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
    <group {...props} dispose={null} ref={groupRef}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.109}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_1.geometry}
          material={materials['Mat.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons.geometry}
          material={materials['Mat.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_base.geometry}
          material={materials['Material.001']}
          position={[0, -9.997, 0]}
          scale={[1, 0.001, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_frame.geometry}
          material={materials['Mat.6_1.003']}
          scale={[1.205, 0.598, 1.205]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_glass.geometry}
          material={materials['Mat.008']}
          position={[-0.103, 0, -0.154]}
          scale={[1.193, 0.775, 1.193]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_inside.geometry}
          material={materials['default.001']}
          scale={[1.031, 1, 1.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_inside001.geometry}
          material={materials['default.001']}
          scale={[1.031, 1, 1.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_outside.geometry}
          material={materials['Mat.007']}
          scale={[1.193, 0.775, 1.193]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Mat.6_2.002']}
          position={[-15.7, 10.533, -190.778]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.805}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0, 0, 1.885]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={9.18}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder2_1002.geometry}
          material={materials['Mat.008']}
          scale={0.924}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Disc001.geometry}
          material={materials['Mat.027']}
          scale={0.924}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Disc003.geometry}
          material={materials['Mat.004']}
          position={[0, -0.079, 0]}
          scale={0.928}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude002.geometry}
          material={materials['Mat.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1002.geometry}
          material={materials['Mat.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pakrovimo_portas_1001.geometry}
          material={materials['default.001']}
          position={[-2.976, 1.888, 185.887]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          scale={[1.001, 1, 1.001]}
        >
          {texture ? (
            <meshStandardMaterial attach='material' map={texture} />
          ) : (
            <meshStandardMaterial attach='material' color='#232323' />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['screen-frame'].geometry}
          material={materials['Mat.6_2.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sensor002.geometry}
          material={materials['default.001']}
          scale={[1, 0.496, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.sim_card001.geometry}
          material={materials['Mat.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sweep002.geometry}
          material={materials['Mat.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_frame_1.geometry}
          material={materials['Mat.6_2_1.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_frame_2.geometry}
          material={materials['Mat.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottom_1.geometry}
          material={materials['Mat.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottom_2.geometry}
          material={materials['Mat.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bottom_3.geometry}
          material={materials['Mat.011']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/iphone.glb')
