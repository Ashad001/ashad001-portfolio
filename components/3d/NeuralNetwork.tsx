"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Line } from "@react-three/drei"
import * as random from "maath/random"

// Separate the 3D scene component
function Scene(props: any) {
  const pointsRef = useRef<any>()
  const count = 200
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sphere = random.inSphere(positions, { radius: 1.5 }) as Float32Array
    return sphere
  }, [])

  const connections = useMemo(() => {
    const connections = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (Math.random() > 0.95) {
          connections.push([i, j])
        }
      }
    }
    return connections
  }, [])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 10
      pointsRef.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#88ccff" size={0.02} sizeAttenuation={true} depthWrite={false} />
      </Points>
      {connections.map(([start, end], idx) => (
        <Line
          key={idx}
          points={[
            [positions[start * 3], positions[start * 3 + 1], positions[start * 3 + 2]],
            [positions[end * 3], positions[end * 3 + 1], positions[end * 3 + 2]],
          ]}
          color="#88ccff"
          lineWidth={0.5}
          transparent
          opacity={0.5}
        />
      ))}
    </group>
  )
}

// Main component that includes the Canvas
export function NeuralNetwork() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  )
}