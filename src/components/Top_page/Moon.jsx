import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei';

const Moon = () => {

    const ref = useRef()
    const gltf = useGLTF('./models/scene.gltf');

    useFrame(()=>{
        ref.current.rotation.x += 0.005;
    });

    return (
        <mesh ref={ref} scale={[4,4,4]}>
            <primitive object={gltf.scene} />
        </mesh>
    )

}

export default Moon
