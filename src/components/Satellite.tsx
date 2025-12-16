import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Satellite = () => {
    const ref = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (!ref.current) return

        // Orbit animation
        const time = state.clock.getElapsedTime()
        ref.current.rotation.y = time * 0.2 // Slow orbit spin
        ref.current.position.y = Math.sin(time * 0.5) * 0.5 // Floating effect
    })

    return (
        <group ref={ref} position={[5, 3, -5]} rotation={[0.5, 0.5, 0]}>
            {/* Main body */}
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#88aaff" metalness={0.8} roughness={0.2} />
            </mesh>

            {/* Solar Panels */}
            <mesh position={[1.2, 0, 0]}>
                <boxGeometry args={[1.5, 0.1, 0.5]} />
                <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.1} />
            </mesh>
            <mesh position={[-1.2, 0, 0]}>
                <boxGeometry args={[1.5, 0.1, 0.5]} />
                <meshStandardMaterial color="#111111" metalness={0.5} roughness={0.1} />
            </mesh>

            {/* Antenna */}
            <mesh position={[0, 0.6, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 1]} />
                <meshStandardMaterial color="#cccccc" />
            </mesh>
            <mesh position={[0, 1.1, 0]}>
                <sphereGeometry args={[0.2]} />
                <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
            </mesh>
        </group>
    )
}
