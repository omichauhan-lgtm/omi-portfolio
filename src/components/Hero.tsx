import { motion } from 'framer-motion'

/**
 * Hero Component
 * Displays the main introduction, animated logo, and professional headline.
 * Includes a scroll indicator to guide users to the next section.
 */
const Hero = () => {
    return (
        <div className="h-[90vh] flex flex-col items-center justify-center relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-spotify-dark/50 to-spotify-black z-0 pointer-events-none" />

            {/* Animated Logo */}
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="z-10 mb-8"
            >
                <div className="relative group cursor-default">
                    {/* Ring Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-purple-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

                    {/* Main Circle */}
                    <div className="w-32 h-32 md:w-40 md:h-40 border-[1px] border-white/20 rounded-full flex items-center justify-center relative backdrop-blur-sm bg-black/30 shadow-2xl transition-transform duration-700 group-hover:scale-105">
                        {/* Text Logo */}
                        <span className="text-6xl md:text-7xl font-thin tracking-tighter bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-700 bg-clip-text text-transparent select-none" style={{ fontFamily: '"Outfit", sans-serif' }}>
                            Ø
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-10 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-blue to-white drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                    Omii Chauhan
                </h1>
                <p className="text-xl md:text-2xl text-spotify-grey font-light tracking-wide">
                    AI & Data Engineer <span className="text-spotify-green mx-2">|</span> Python, SQL, C++
                </p>
                <p className="text-lg md:text-xl text-spotify-grey/80 font-light tracking-wide mt-2">
                    Building Scalable ML Systems & Financial Analytics
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 z-10"
            >
                <div className="w-6 h-10 border-2 border-spotify-grey rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
