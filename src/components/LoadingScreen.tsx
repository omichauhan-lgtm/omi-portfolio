import { motion } from 'framer-motion'

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-spotify-black selection:bg-spotify-green selection:text-black"
        >
            <div className="relative overflow-hidden">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold font-orbitron text-white tracking-widest uppercase"
                >
                    Omii Chauhan
                </motion.h1>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-spotify-green"
                />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-4 text-spotify-grey font-light tracking-[0.5em] text-sm uppercase"
            >
                Portfolio Loading
            </motion.p>
        </motion.div>
    )
}

export default LoadingScreen
