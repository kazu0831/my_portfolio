import { Canvas } from '@react-three/fiber'
import React from 'react'
import Moon from './Moon'

function Objects() {
  return (
    <Canvas>
        <ambientLight intensity={3.5} />
        <pointLight position={[10, 10, 10]} />
        <Moon />
    </Canvas>
  )
}

export default Objects
