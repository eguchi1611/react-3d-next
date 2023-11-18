"use client"

import React, { RefObject } from "react"
import { Canvas } from "@react-three/fiber"
import { Scene, SceneHandler } from "./scene"
import buildings from "./buildings.json"

type BoxT = { x: number; y: number; angle: number }

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <a
        href="https://pmnd.rs/"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}>😄 —</div>
      <div style={{ position: "absolute", bottom: 40, right: 40, fontSize: "13px" }}>
        30/10/2022
      </div>
    </div>
  )
}

export default function Home() {
  const socketRef = React.useRef<WebSocket>()
  const [boxes, setBoxes] = React.useState<{ [index: string]: BoxT }>({})
  const sceneRef = React.useRef<SceneHandler>()
  React.useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:9001/socket")
    socketRef.current.onmessage = function (msg) {
      const payload = JSON.parse(msg.data)
      const { id, x, y, angle } = payload
      setBoxes((boxes) => {
        const b = { ...boxes }
        b[id] = { x, y, angle }
        return b
      })
      console.log(payload, id, x, y, angle)
    }
    socketRef.current.onopen = function () {
      console.log("Connected")
    }
    socketRef.current.onclose = function () {
      console.log("closed")
    }
    return () => {
      if (socketRef.current == null) {
        return
      }
      socketRef.current.close()
    }
  }, [])
  return (
    <div className="main-canvas">
      <div className="nav">
        <h1 className="label" />
        <div />
        <div />
        <div />
        <div />
        <a
          onClick={() => {
            sceneRef.current?.resetCamera()
          }}
        >
          <div className="button">ALL</div>
        </a>
      </div>
      <Canvas shadows camera={{ fov: 55, near: 0.1, far: 1000 }} style={{ borderRadius: 20 }}>
        <Scene ref={sceneRef} {...buildings} />
        <axesHelper args={[50]} />
      </Canvas>
      {/* <Overlay /> */}
    </div>
  )
}
