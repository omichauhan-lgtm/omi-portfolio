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

            {/* Animated Logo / Profile Photo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative z-10 mb-8 group"
            >
                <div className="relative w-40 h-40 md:w-56 md:h-56">
                    {/* Glowing Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-spotify-green to-blue-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 animate-pulse" />

                    {/* Glass Container */}
                    <div className="relative w-full h-full rounded-full border-2 border-white/20 bg-black/30 backdrop-blur-md overflow-hidden shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Omi Chauhan"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        />
                    </div>

                    {/* Orbiting Decor */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-full border border-spotify-green/30 border-dashed"
                    />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-10 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] uppercase">
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
