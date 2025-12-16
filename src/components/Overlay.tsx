import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Brain, Database, Terminal, Cpu, Cloud, Shield, GitBranch, Zap, Target, BookOpen } from 'lucide-react'
import GradientIcon from './ui/GradientIcon'
import { profile } from '../data/profile'

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
}

const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const iconMap: any = {
    Code2, Brain, Database, Terminal, Cpu, Cloud, Shield, GitBranch, Zap, Target, BookOpen
}

export const Overlay = () => {
    const [showProfile, setShowProfile] = useState(false)

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8">
            {/* Header */}
            <header className="flex justify-between items-start pointer-events-auto">
                <div onClick={() => setShowProfile(!showProfile)} className="cursor-pointer group">
                    <h1 className="text-4xl font-bold tracking-tighter mix-blend-difference text-white transition-colors group-hover:text-red-500" style={{ fontFamily: '"Outfit", sans-serif' }}>
                        OMI'S WORLD
                    </h1>
                    <p className="text-sm font-light tracking-widest text-white/50 mt-1">
                        CREATIVE TECHNOLOGIST
                    </p>
                </div>

                <nav className="flex gap-6 text-sm font-medium text-white/70">
                    <button onClick={() => setShowProfile(false)} className={`${!showProfile ? 'text-white' : 'hover:text-white'} transition-colors`}>WORK</button>
                    <button onClick={() => setShowProfile(true)} className={`${showProfile ? 'text-white' : 'hover:text-white'} transition-colors`}>PROFILE</button>
                    <a href="https://github.com/omichauhan-lgtm" target="_blank" className="hover:text-white transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/omichauhan/" target="_blank" className="hover:text-white transition-colors">LINKEDIN</a>
                    <a href="mailto:omichauhan427@gmail.com" className="hover:text-white transition-colors" title="omichauhan427@gmail.com">CONTACT</a>
                </nav>
            </header>

            {/* Profile Overlay */}
            <AnimatePresence>
                {showProfile && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={overlayVariants}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md z-20 overflow-y-auto pointer-events-auto p-8 md:p-20 text-white"
                    >
                        <motion.div variants={contentVariants} className="max-w-3xl mx-auto space-y-16">
                            <motion.section variants={contentVariants}>
                                <h2 className="text-3xl font-bold mb-6 text-red-500">01 / ABOUT</h2>
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <img
                                        src="/omi-portfolio/profile.jpg"
                                        alt="Omii Chauhan"
                                        className="w-32 h-32 rounded-full border-4 border-white/10 object-cover shadow-2xl"
                                    />
                                    <div>
                                        <p className="text-xl leading-relaxed text-gray-300">{profile.bio.intro}</p>
                                        <p className="text-xl leading-relaxed text-gray-300 mt-4">{profile.bio.education}</p>
                                    </div>
                                </div>
                            </motion.section>

                            <section>
                                <h2 className="text-3xl font-bold mb-8 text-red-500">02 / EXPERIENCE</h2>
                                <div className="space-y-12">
                                    {profile.experience.map((exp, i) => (
                                        <div key={i} className="border-l-2 border-white/10 pl-6">
                                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                                            <div className="text-red-400 font-mono mb-2">{exp.company} | {exp.period}</div>
                                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                                {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-8 text-red-500">03 / LEADERSHIP</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {profile.leadership.map((role, i) => (
                                        <div key={i} className="bg-white/5 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold mb-1">{role.role}</h3>
                                            <div className="text-sm text-gray-400 mb-3">{role.org}</div>
                                            <p className="text-gray-300 text-sm">{role.desc}</p>
                                        </div>
                                    ))}
                                </div>

                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-8 text-red-500">04 / PROJECTS</h2>
                                <div className="space-y-6">
                                    {(profile as any).projects?.map((proj: any, i: number) => (
                                        <div key={i} className="bg-white/5 p-6 rounded-lg border-l-4 border-red-500">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold">{proj.title}</h3>
                                                <span className="text-xs font-mono bg-red-500/20 text-red-300 px-2 py-1 rounded">{proj.stack}</span>
                                            </div>
                                            <p className="text-gray-300 text-sm">{proj.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-8 text-red-500">05 / SKILLS</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {(profile as any).skills?.map((skill: any, i: number) => {
                                        const Icon = iconMap[skill.icon] || Code2
                                        return (
                                            <div key={i} className="bg-white/5 p-4 rounded-lg flex flex-col items-center gap-2 hover:bg-white/10 transition-colors border border-white/5">
                                                <GradientIcon icon={Icon} preset={skill.preset} size={32} />
                                                <span className="font-bold text-sm text-center">{skill.name}</span>
                                                <span className="text-xs text-white/50">{skill.level}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold mb-8 text-red-500">06 / INTERESTS</h2>
                                <div className="flex flex-wrap gap-3">
                                    {(profile as any).interests?.map((tag: string, i: number) => (
                                        <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/5 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer / Controls Hint */}
            {
                !showProfile && (
                    <footer className="flex justify-between items-end">
                        <div className="text-xs text-white/30 max-w-[200px]">
                            SCROLL TO EXPLORE<br />
                            CLICK TO VISIT
                        </div>

                        <div className="text-right">
                            <div className="text-xs text-white/30">
                                BASED IN INDIA<br />
                                v2.0 SATELITE EDITION • © {new Date().getFullYear()}
                            </div>
                        </div>
                    </footer>
                )
            }
        </div >
    )
}
