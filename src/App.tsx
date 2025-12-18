import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './components/LoadingScreen'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Scene } from './components/Scene'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500) // Show loading screen for 2.5 seconds

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingScreen />}
            </AnimatePresence>

            {/* 3D Background - Disabled for stability, replaced with gradient */}
            <div className="fixed inset-0 z-0 bg-spotify-black bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-spotify-dark via-spotify-black to-spotify-black">
                {/* <Scene /> */}
            </div>

            {/* 2D Overlay Content */}
            {!isLoading && (
                <Layout>
                    <Hero />
                    <Projects />
                    <About />
                    <Contact />
                    <Navbar />
                </Layout>
            )}
        </>
    )
}

export default App
