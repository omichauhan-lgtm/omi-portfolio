import { ReactNode } from 'react'

interface SectionProps {
    children: ReactNode
    position: [number, number, number]
}

export const Section = ({ children, position }: SectionProps) => {
    return (
        <group position={position}>
            {children}
        </group>
    )
}
