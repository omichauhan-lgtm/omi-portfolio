import { motion } from 'framer-motion'

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
                <div className="w-48 h-48 border-4 border-white rounded-full flex items-center justify-center relative group cursor-pointer">
                    <motion.span
                        className="text-9xl font-light text-white group-hover:text-tesla-red transition-colors duration-300"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Ø
                    </motion.span>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-tesla-red/20 blur-xl transition-all duration-300" />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="z-10 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                    Omii Chauhan
                </h1>
                <p className="text-xl md:text-2xl text-spotify-grey font-light tracking-wide">
                    Full Stack Developer <span className="text-spotify-green mx-2">•</span> SaaS Builder
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
