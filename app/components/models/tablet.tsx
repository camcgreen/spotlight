import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh
    base_frame_1: THREE.Mesh
    base_frame_2: THREE.Mesh
    bottom_1: THREE.Mesh
    bottom_2: THREE.Mesh
    buttons: THREE.Mesh
    camera_frame: THREE.Mesh
    camera_glass: THREE.Mesh
    camera_inside: THREE.Mesh
    camera_outside: THREE.Mesh
    Extrude1: THREE.Mesh
    Extrude_2: THREE.Mesh
    magnetic_charger: THREE.Mesh
    screen: THREE.Mesh
    screen_base: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
    ['Mat.1']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Mat.5']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Mat.2']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Mat.2_1']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
  }
}

export function TabletModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/ipad.glb') as GLTFResult
  const form = document.getElementById('toolbar') as HTMLFormElement
  const groupRef = useRef<THREE.Group>(null)
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials['default']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <group position={[78.862, -1.748, -84.625]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottom_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bottom_2.geometry}
            material={materials['default']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buttons.geometry}
          material={materials['Mat.1']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_frame.geometry}
          material={materials['Mat.1']}
          position={[78.892, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_glass.geometry}
          material={materials['Mat.5']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_inside.geometry}
          material={materials['Material.001']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_outside.geometry}
          material={materials['Mat.2']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude1.geometry}
          material={materials['Material.003']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2.geometry}
          material={materials['default']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.magnetic_charger.geometry}
          material={materials['Mat.2_1']}
          position={[78.862, -1.748, -84.625]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen_base.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_frame_1.geometry}
          material={materials['Mat.1']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_frame_2.geometry}
          material={materials['Material.005']}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/ipad.glb')
