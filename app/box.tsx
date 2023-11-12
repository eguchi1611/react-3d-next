"use client"

import React, { useRef, useState } from "react"
import THREE from "three"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, ThreeElements } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

export function Box(
  props: ThreeElements["mesh"] & {
    size?: typeof THREE.BoxGeometry.arguments
    onClick: () => void
    object?: GLTF
    geometry?: any
  }
) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={(event) => props.onClick()}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      {!props.geometry && <boxGeometry args={props.size || [1, 1, 1]} />}
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  )
}
