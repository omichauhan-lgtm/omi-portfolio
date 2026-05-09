import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Code2, Database, Brain, Terminal, Shield, Target, Zap, BookOpen, Cloud, Cpu, GitBranch, Server } from 'lucide-react'
import GradientIcon from './ui/GradientIcon'
import { profile } from '../data/profile'

/**
 * About Component
 * Showcases the user's bio, skills, experience, and certifications dynamically from profile.ts.
 */
const About = () => {
    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-spotify-green">02.</span> About Me
                </h2>

                {/* Bio */}
                <p className="text-spotify-grey text-lg leading-relaxed mb-6">
                    {profile.bio.intro}
                </p>
                <p className="text-spotify-grey text-lg leading-relaxed mb-6">
                    {profile.bio.education}
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Briefcase} preset="spotify-green" /> Experience
                        </h3>
                        <div className="relative border-l-2 border-spotify-light ml-3 pl-8 pb-2">
                            {profile.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative mb-12"
                                >
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-spotify-green rounded-full border-4 border-spotify-black" />

                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <h5 className="text-lg text-spotify-green mb-2">{exp.company}</h5>

                                    <div className="flex flex-col gap-1 text-sm text-spotify-grey mb-4">
                                        <span className="flex items-center gap-2"><Calendar size={14} /> {exp.period}</span>
                                        <span className="flex items-center gap-2"><MapPin size={14} /> {exp.location}</span>
                                    </div>

                                    <ul className="list-disc list-inside text-spotify-grey space-y-2 text-sm">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx} dangerouslySetInnerHTML={{ __html: detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Skills */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GradientIcon icon={GraduationCap} preset="spotify-green" /> Education
                            </h3>
                            <div className="bg-spotify-dark p-6 rounded-xl border border-white/5 space-y-4">
                                {profile.education.map((edu, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                        <h5 className="text-spotify-green">{edu.institution}</h5>
                                        <div className="flex justify-between items-center mt-1 text-sm text-spotify-grey">
                                            <span>{edu.year}</span>
                                            <span>{edu.details}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GradientIcon icon={Terminal} preset="spotify-green" /> Technical Arsenal
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {profile.skills.map((skill, index) => {
                                    // Map string icon names to Lucide components if needed, or just use a generic icon.
                                    // For simplicity, we use the Database icon as fallback, but ideally map them.
                                    return (
                                        <div key={index} className="bg-spotify-dark p-3 rounded-lg border border-white/5 flex items-center gap-2 hover:bg-white/5 transition-colors">
                                            <span className="text-spotify-green"><GradientIcon icon={Terminal} preset={skill.preset as any || "spotify-green"} size={16} /></span>
                                            <span className="text-sm text-white/90">{skill.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership & Cognitive */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Briefcase} preset="luxury-gold" /> Leadership
                        </h3>
                        <div className="space-y-6">
                            {profile.leadership.map((lead, index) => (
                                <div key={index} className="bg-spotify-dark p-6 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors">
                                    <h4 className="text-lg font-bold text-white">{lead.role}</h4>
                                    <h5 className="text-spotify-green">{lead.org}</h5>
                                    <p className="text-spotify-grey text-sm mt-2">{lead.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Brain} preset="neon-purple" /> Cognitive Profile
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {profile.cognitive.map((trait, index) => (
                                <div key={index} className="bg-spotify-dark p-4 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors flex items-start gap-4">
                                    <div className="mt-1 text-spotify-green p-2 bg-white/5 rounded-lg">
                                        <GradientIcon icon={Brain} preset={trait.preset as any || "neon-purple"} size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{trait.name}</h4>
                                        <p className="text-spotify-grey text-sm leading-relaxed">{trait.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GradientIcon icon={GraduationCap} preset="spotify-green" /> Certifications
                            </h3>
                            <div className="space-y-4">
                                {profile.certifications.map((cert, index) => (
                                    <div key={index} className="bg-spotify-dark p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/10 p-2 rounded-lg text-2xl">{cert.icon}</div>
                                            <div>
                                                <h4 className="text-white font-bold group-hover:text-spotify-green transition-colors">{cert.name}</h4>
                                                <p className="text-spotify-grey text-sm">{cert.issuer} • {cert.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default About
