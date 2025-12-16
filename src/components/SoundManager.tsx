import { useEffect, useRef } from 'react'

export const SoundManager = () => {
    const audioContext = useRef<AudioContext | null>(null)
    const oscillator = useRef<OscillatorNode | null>(null)
    const gainNode = useRef<GainNode | null>(null)
    const isPlaying = useRef(false)

    useEffect(() => {
        const initAudio = () => {
            if (isPlaying.current) return

            try {
                const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
                if (!AudioContextClass) {
                    console.warn("AudioContext not supported in this browser.")
                    return
                }

                audioContext.current = new AudioContextClass()

                // Create a low drone
                oscillator.current = audioContext.current.createOscillator()
                gainNode.current = audioContext.current.createGain()
            } catch (error) {
                console.error("Failed to initialize audio context:", error)
                return // Exit if initialization fails
            }

            oscillator.current.type = 'sine'
            oscillator.current.frequency.setValueAtTime(50, audioContext.current.currentTime) // 50Hz drone

            const filter = audioContext.current.createBiquadFilter()
            filter.type = 'lowpass'
            filter.frequency.setValueAtTime(200, audioContext.current.currentTime)

            // Connect: Osc -> Filter -> Gain -> Dest
            oscillator.current.connect(filter)
            filter.connect(gainNode.current)
            gainNode.current.connect(audioContext.current.destination)

            gainNode.current.gain.setValueAtTime(0, audioContext.current.currentTime)
            gainNode.current.gain.linearRampToValueAtTime(0.05, audioContext.current.currentTime + 2) // Fade in

            oscillator.current.start()
            isPlaying.current = true
        }

        const handleInteract = () => {
            initAudio()
            window.removeEventListener('click', handleInteract)
        }

        window.addEventListener('click', handleInteract)

        return () => {
            // Cleanup
            if (oscillator.current) {
                oscillator.current.stop()
                oscillator.current.disconnect()
            }
            if (audioContext.current) {
                audioContext.current.close()
            }
            window.removeEventListener('click', handleInteract)
        }
    }, [])

    return null
}
