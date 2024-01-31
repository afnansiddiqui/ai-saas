'use client';

import { AppContext } from '@/app/context/IsPlayingContext';
import { OrbitControls, SpotLight, useAnimations, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three';

const Torch = ({ vec = new Vector3(), ...props }) => {
    const light = useRef<THREE.SpotLight>(null)
    return (
        <SpotLight ref={light}
            castShadow
            penumbra={1}
            distance={10}
            angle={0.35}
            attenuation={5}
            anglePower={4}
            intensity={3}
            {...props}
        />
    )
}


const Head = () => {
    const model = useGLTF("/head.glb")
    const animation = useAnimations(model.animations, model.scene)
    const action = animation.actions.Animation
    const { isPlaying, setIsPlaying } = useContext(AppContext)

    useEffect(() => {
        if (isPlaying) {

            action?.play();
        } else {
            action?.fadeOut(0.5)
            setTimeout(() => {

                action?.stop();

            }, 500)
        }
    }, [isPlaying, action])
    return (
        <>
            <primitive object={model.scene} scale={4} rotation-z={0.2} />
            {/* <Torch position={[3,2,2]}/> */}
        </>
    )
}


const ChatBotCanvas = () => {
    return (
        <Canvas>
            <OrbitControls
                enableZoom={false}
                enableDamping
                maxPolarAngle={2}
                minAzimuthAngle={-Math.PI * 0.5}
                maxAzimuthAngle={Math.PI * 0.5}
            />
            <ambientLight
            // intensity={0.015}
            />
            <Head />
        </Canvas>
    )
}

export default ChatBotCanvas