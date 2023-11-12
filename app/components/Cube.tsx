/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/cube.glb --transform --types --keepmeshes 
Files: ./public/cube.glb [616.38KB] > cube-transformed.glb [637.75KB] (-3%)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    building: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/cube-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.building.geometry} material={nodes.building.material} />
    </group>
  )
}

useGLTF.preload('/cube-transformed.glb')
