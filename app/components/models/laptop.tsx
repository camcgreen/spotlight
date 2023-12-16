import * as THREE from 'three'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    base: THREE.Mesh
    base_bottom: THREE.Mesh
    base_frame: THREE.Mesh
    base_inside: THREE.Mesh
    base_outside: THREE.Mesh
    base_side_left: THREE.Mesh
    base_side_right: THREE.Mesh
    camera: THREE.Mesh
    camera_glass: THREE.Mesh
    Capsule: THREE.Mesh
    input: THREE.Mesh
    keyboard_base: THREE.Mesh
    keyboard_buttons_1: THREE.Mesh
    keyboard_buttons_2: THREE.Mesh
    keyboard_buttons_3: THREE.Mesh
    logo: THREE.Mesh
    logo_top: THREE.Mesh
    screen: THREE.Mesh
    screen_base_1: THREE.Mesh
    screen_base_2: THREE.Mesh
    touchpad: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
    ['Mat.2']: THREE.MeshStandardMaterial
    ['default.006']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
    ['Mat.4']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
  }
}

export function LaptopModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/macbook.glb') as GLTFResult
  const form = document.getElementById('toolbar') as HTMLFormElement
  const groupRef = useRef<THREE.Group>(null)
  let imageLink = (form.elements.namedItem('imageLink') as HTMLInputElement)
    .value
  if (!imageLink) imageLink = '/images/black.jpg'
  let texture = useTexture(imageLink)
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
        position={[0, -10.184, -10.9]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_bottom.geometry}
          material={materials['default']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[167, 1.8, 123]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_frame.geometry}
          material={materials['default']}
          scale={[167, 0.8, 123]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_inside.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_outside.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_side_left.geometry}
          material={materials['Mat.2']}
          scale={[0.985, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.base_side_right.geometry}
          material={materials['Mat.2']}
          scale={[0.954, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera.geometry}
          material={materials['default.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.camera_glass.geometry}
          material={materials['Material.003']}
          scale={[1, 0.1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Capsule.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.input.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_base.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo.geometry}
          material={materials['Material.009']}
          scale={[1, 0.001, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logo_top.geometry}
          material={materials['Material.009']}
          scale={[1, 0.001, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials['Material.004']}
          scale={[1.005, 0, 1.005]}
          position={[0, -4, 0]}
        >
          {texture ? (
            <meshStandardMaterial attach='material' map={texture} />
          ) : (
            <meshStandardMaterial attach='material' color='#232323' />
          )}
        </mesh>
        <group scale={10}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.screen_base_1.geometry}
            material={materials['default']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.screen_base_2.geometry}
            material={materials['Material.007']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.touchpad.geometry}
          material={materials['default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_buttons_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_buttons_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.keyboard_buttons_3.geometry}
          material={materials['Mat.4']}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/macbook.glb')
