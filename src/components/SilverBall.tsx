import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export const SilverBall = () => {
    const scroll = useScroll()
    const ref = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (!ref.current) return

        // Calculate target position based on scroll
        const journeyLength = 135
        const startX = -5

        const targetX = startX + (scroll.offset * journeyLength)

        // Smooth follow for the ball
        ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, targetX, delta * 5)

        // Rolling animation (synced to position)
        // Circumference = 2 * PI * r (r=0.8) ~= 5
        ref.current.rotation.z = -ref.current.position.x / 0.8
        ref.current.rotation.x = -scroll.offset * Math.PI * 2 // Mild banking

        // Camera Follow with Lag
        const camTargetX = ref.current.position.x
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, camTargetX, delta * 2)
        state.camera.lookAt(camTargetX, 0, 0)
    })

    return (
        <mesh ref={ref} position={[-5, -1.5, 2]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
                color="#eeeeee"
                metalness={1}
                roughness={0.15}
            />
            {/* The Ball acts as a flashlight */}
            <pointLight distance={15} intensity={5} color="white" />
        </mesh>
    )
}
