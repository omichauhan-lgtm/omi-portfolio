import { Home, User, Code, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const navItems = [
        { icon: <Home size={24} />, label: 'Home', href: '#' },
        { icon: <Code size={24} />, label: 'Projects', href: '#projects' },
        { icon: <User size={24} />, label: 'About', href: '#about' },
        { icon: <Mail size={24} />, label: 'Contact', href: 'mailto:omichauhan427@gmail.com' },
    ]

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center gap-2 bg-spotify-light/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-2xl"
            >
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="p-3 text-spotify-grey hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 group relative"
                        title={item.label}
                    >
                        {item.icon}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-spotify-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-white/10">
                            {item.label}
                        </span>
                    </a>
                ))}
            </motion.div>
        </div>
    )
}

export default Navbar
