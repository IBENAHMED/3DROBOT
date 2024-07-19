"use client"

import React, { Suspense } from 'react';
import { Canvas, useThree } from "@react-three/fiber"
import Model from './Model';
import { useProgress, Html, ScrollControls } from '@react-three/drei';

// function Loader() {
//     const { progress, active } = useProgress()
//     return <Html center>{progress.toFixed(1)} % loaded</Html>
// }

const Scene = () => {
    return (
        <Canvas> // Canvas it's container for 3D content Three.js scene, camera, renderer, and other
            <directionalLight position={[-5, -5, 5]} intensity={4} /> // Lighting
            {/* add your 3D modal */}
            {/* <Suspense fallback={<Loader />}> */}
            <ScrollControls damping={0.5} pages={4}> // damping mean Smoothness of Scrolling
                <Model />
            </ScrollControls>
            {/* </Suspense> */}
        </Canvas>
    )
}

export default Scene
