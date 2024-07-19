"use client"

import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

useGLTF.preload("/robot_playground.glb"); // Preloading helps in optimizing the loading performance when the model is actually used. 

const Model = () => {
    const group = useRef(null); // : A reference to a group object in Three.js, allowing you to manipulate it directly.
    const { nodes, materials, animations, scene } = useGLTF("/robot_playground.glb"); // Loads the GLTF model and returns its components(nodes, materials, animations, scene).
    const { actions, clips } = useAnimations(animations, scene); // Extracts animations and actions from the loaded GLTF model.
    const scroll = useScroll(); // Provides the current scroll position

    useEffect(() => {
        console.log(actions)
        //@ts-ignore
        actions["Experiment"].play().paused = true
    }, []);

    // useFrame: Runs on every frame ====> Updates the animation time based on the scroll position. The scroll.offset value is mapped to the animation duration, making the animation progress in sync with the scroll.
    useFrame(
        () =>
        //@ts-ignore
        (actions["Experiment"].time =
            //@ts-ignore
            (actions["Experiment"].getClip().duration * scroll.offset) / 1)
    );

    return (
        <group ref={group}> // Group multiple 3D objects together for collective transformations
            <primitive object={scene} /> // Inserts the entire scene object from the GLTF model into the Three.js scene.
        </group>
    )
}

export default Model
