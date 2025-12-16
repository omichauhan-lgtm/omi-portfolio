import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'
import { damp, damp3 } from 'maath/easing'

export const CameraRig = () => {
    const { camera, gl } = useThree()
    const isDragging = useRef(false)
    const previousMouse = useRef({ x: 0, y: 0 })
    const velocity = useRef({ x: 0, y: 0 })
    const targetPosition = useRef(new Vector3(0, 0, 10))

    // Event listeners attached to the canvas element
    useFrame((_state, delta) => {
        // Apply velocity to target
        targetPosition.current.x -= velocity.current.x * delta * 50
        targetPosition.current.y += velocity.current.y * delta * 50 // Invert Y for natural feel?

        // Damp velocity
        damp(velocity.current, 'x', 0, 0.1, delta)
        damp(velocity.current, 'y', 0, 0.1, delta)

        // Smoothly move camera to target
        damp3(camera.position, targetPosition.current, 0.2, delta)

        // Tilt camera slightly based on velocity for dynamic feel
        damp(camera.rotation, 'y', -velocity.current.x * 0.5, 0.2, delta)
        damp(camera.rotation, 'x', velocity.current.y * 0.5, 0.2, delta)
    })

    const onPointerDown = (e: PointerEvent) => {
        isDragging.current = true
        previousMouse.current = { x: e.clientX, y: e.clientY }
        // Change cursor
        gl.domElement.style.cursor = 'grabbing'
    }

    const onPointerUp = () => {
        isDragging.current = false
        gl.domElement.style.cursor = 'grab'
    }

    const onPointerMove = (e: PointerEvent) => {
        if (!isDragging.current) return

        const deltaX = (e.clientX - previousMouse.current.x) / window.innerHeight
        const deltaY = (e.clientY - previousMouse.current.y) / window.innerHeight

        velocity.current.x = deltaX
        velocity.current.y = deltaY

        previousMouse.current = { x: e.clientX, y: e.clientY }
    }

    // Bind events - simpler to do this in a useEffect or on the Canvas parent
    // But R3F components don't easily bind to window/canvas unless we use useThree().gl.domElement
    // We'll attach to gl.domElement in a useEffect


    useEffect(() => {
        const canvas = gl.domElement
        canvas.addEventListener('pointerdown', onPointerDown)
        window.addEventListener('pointerup', onPointerUp)
        window.addEventListener('pointermove', onPointerMove)

        canvas.style.cursor = 'grab'

        return () => {
            canvas.removeEventListener('pointerdown', onPointerDown)
            window.removeEventListener('pointerup', onPointerUp)
            window.removeEventListener('pointermove', onPointerMove)
        }
    }, [gl])

    return null
}
