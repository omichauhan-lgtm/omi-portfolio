import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import GradientIcon from './ui/GradientIcon'

const Contact = () => {
    return (
        <section id="contact" className="py-20 mb-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-spotify-dark to-black rounded-2xl p-12 text-center border border-white/5"
            >
                <h2 className="text-4xl font-bold mb-4">Let's Create Something Amazing</h2>
                <p className="text-spotify-grey text-xl mb-8 max-w-2xl mx-auto">
                    I'm currently open to new opportunities in Full Stack Development and Data Analysis.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a
                        href="mailto:omichauhan427@gmail.com"
                        className="flex items-center gap-2 bg-spotify-green text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform"
                    >
                        <GradientIcon icon={Mail} preset="luxury-gold" size={20} className="text-black" />
                        <span className="text-black">Say Hello</span>
                    </a>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/omichauhan-lgtm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                        >
                            <GradientIcon icon={Github} preset="luxury-gold" size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/omichauhan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                        >
                            <GradientIcon icon={Linkedin} preset="luxury-gold" size={24} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
