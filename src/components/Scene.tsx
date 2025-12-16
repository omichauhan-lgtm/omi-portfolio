import { Canvas } from '@react-three/fiber'
import { Environment, Stars, ScrollControls, Scroll } from '@react-three/drei'
import { Suspense } from 'react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SilverBall } from './SilverBall'
import { Section } from './Section'
import { Profile3D } from './Profile3D'
// import { Effects } from './Effects'

import { Satellite } from './Satellite'

export const Scene = () => {
    return (
        <Canvas
            className="absolute inset-0"
            camera={{ position: [0, 0, 10], fov: 45 }}
            dpr={[1, 2]}
        >
            <Suspense fallback={null}>
                <Environment preset="city" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <ScrollControls pages={8} damping={0.3} horizontal>
                    <Scroll>
                        {/* The Silver Ball Avatar */}
                        <SilverBall />

                        {/* The requested Satellite (Floating in space) */}
                        <Satellite />
                    </Scroll>

                    <Scroll>
                        {/* Projects Section - Linear Layout */}
                        {projects.map((project, index) => (
                            <Section key={project.id} position={[(index + 1) * 12 - 2, 0, -2]}>
                                <ProjectCard project={project} position={[0, 0, 0]} />
                            </Section>
                        ))}

                        {/* Unified Profile Dashboard */}
                        <Section position={[115, 0, 0]}>
                            <Profile3D />
                        </Section>
                    </Scroll>
                </ScrollControls>

                {/* <Effects /> */}
            </Suspense>
        </Canvas>
    )
}
