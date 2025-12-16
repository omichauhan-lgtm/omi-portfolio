import { Html } from '@react-three/drei'
import { profile } from '../data/profile'
import { Code2, Brain, Database, Terminal, Cpu, Cloud, GitBranch, Shield, Zap, Target, BookOpen, Briefcase, GraduationCap, MapPin } from 'lucide-react'

// Icon Mapping
const IconMap: any = { Code2, Brain, Database, Terminal, Cpu, Cloud, GitBranch, Shield, Zap, Target, BookOpen }

const GradientText = ({ children }: { children: React.ReactNode }) => (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
        {children}
    </span>
)

export const ProfileIntro = () => {
    return (
        <group>
            <Html transform center position={[0, 0, 0]} className="w-[1200px] select-none pointer-events-none">
                <div className="flex flex-col items-center text-center font-sans w-full mx-auto">
                    <div className="w-full max-w-5xl bg-black/70 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10 shadow-2xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />
                        <h2 className="text-6xl font-black mb-8 text-white tracking-widest uppercase flex justify-center items-center gap-6">
                            <GradientText>01.</GradientText> About Me
                        </h2>
                        <p className="text-2xl text-gray-300 leading-relaxed font-light mb-10 text-center max-w-3xl mx-auto">
                            {profile.bio.intro}
                        </p>
                        <div className="flex justify-center gap-6">
                            <div className="inline-flex items-center gap-3 bg-white/5 py-3 px-6 rounded-full border border-white/10">
                                <GraduationCap className="text-green-400" size={24} />
                                <span className="text-white text-lg font-medium">NIT Warangal</span>
                            </div>
                            <div className="inline-flex items-center gap-3 bg-white/5 py-3 px-6 rounded-full border border-white/10">
                                <MapPin className="text-blue-400" size={24} />
                                <span className="text-white text-lg font-medium">India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </group>
    )
}

export const ProfileExperience = () => {
    return (
        <group>
            <Html transform center position={[0, 0, 0]} className="w-[1200px] select-none pointer-events-none">
                <div className="grid grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-start">
                    {/* Exp */}
                    <div className="flex flex-col gap-6 w-full">
                        <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-4 text-center border-b border-white/10 pb-4">
                            <GradientText>02.</GradientText> Experience
                        </h2>
                        {profile.experience.map((exp, i) => (
                            <div key={i} className="bg-gradient-to-br from-white/5 to-black/40 p-8 rounded-3xl border border-white/5 w-full text-left relative">
                                <div className="absolute -left-3 top-8 w-6 h-6 bg-green-500 rounded-full border-4 border-black box-content" />
                                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                <div className="text-green-400 font-mono mb-2">{exp.company}</div>
                                <ul className="space-y-2">
                                    {exp.details.map((d, j) => (
                                        <li key={j} className="text-gray-400 flex items-start gap-2">
                                            <span className="text-green-500 mt-1.5">•</span>
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Leadership */}
                    <div className="flex flex-col gap-8 w-full">
                        <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-6 text-center border-b border-white/10 pb-4">
                            <GradientText>03.</GradientText> Leadership
                        </h2>
                        {profile.leadership.map((role, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 text-left relative overflow-hidden">
                                <Zap className="absolute top-4 right-4 text-yellow-500/20" size={64} />
                                <h3 className="text-xl font-bold text-white mb-1 relative z-10">{role.role}</h3>
                                <p className="text-gray-300 text-sm relative z-10">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Html>
        </group>
    )
}

export const ProfileProjects = () => {
    return (
        <group>
            <Html transform center position={[0, 0, 0]} className="w-[1200px] select-none pointer-events-none">
                <div className="w-full max-w-7xl mx-auto bg-black/60 backdrop-blur-md p-12 rounded-[3rem] border border-white/10 relative">
                    <h2 className="text-5xl font-black text-white tracking-widest uppercase mb-12 text-center">
                        <GradientText>05.</GradientText> Selected Projects & Interests
                    </h2>

                    <div className="grid grid-cols-2 gap-8 mb-12">
                        {/* Hardcoded Projects from Resume */}
                        {[
                            { title: "AutoSight SaaS", desc: "AI-Powered Automotive Market Analysis.", stack: "Full Stack" },
                            { title: "Credit Risk Intelligence", desc: "Automated Credit Risk Assessment.", stack: "Data Science" },
                            { title: "Gridiron Tactics Engine", desc: "C++ Console Strategy Game.", stack: "Game Dev" }
                        ].map((proj, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 text-left hover:border-green-500/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/20">{proj.stack}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{proj.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 border-t border-white/10 pt-8">
                        {/* Hardcoded Interests from Resume */}
                        {["Full Stack Development", "Generative AI", "Data Science", "SaaS Building", "Game Development", "Quality Engineering", "Automation"].map((interest, i) => (
                            <span key={i} className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-gray-300 text-sm">
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 opacity-50 text-center">
                    <div className="flex gap-4 justify-center mb-4">
                        <a href="mailto:omichauhan427@gmail.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors">
                            <Briefcase size={20} className="text-white" />
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest">Constructed by OMI • 2025</p>
                </div>
            </Html>
        </group>
    )
}

// Deprecated Monolithic Component (Kept as backup or empty)
export const Profile3D = () => { return null }
