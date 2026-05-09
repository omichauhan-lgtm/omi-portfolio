import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Code2, Database, Brain, Terminal, Shield, Target, Zap, BookOpen, Cloud, Cpu, GitBranch, Server } from 'lucide-react'
import GradientIcon from './ui/GradientIcon'

/**
 * About Component
 * Showcases the user's bio, skills, experience, and certifications.
 * Uses a grid layout to present information in structured blocks (Experience, Education, Leadership, Cognitive Profile).
 */
const About = () => {
    const skills = [
        { name: "Data & ML Pipelines", icon: <GradientIcon icon={Database} preset="cyber-cyan" size={16} />, level: "Expert" },
        { name: "Backend Infrastructure", icon: <GradientIcon icon={Terminal} preset="neon-purple" size={16} />, level: "Advanced" },
        { name: "Cloud & Docker", icon: <GradientIcon icon={Cloud} preset="sunset-orange" size={16} />, level: "Advanced" },
        { name: "FastAPI & Async", icon: <GradientIcon icon={Zap} preset="spotify-green" size={16} />, level: "Advanced" },
        { name: "C++ & Systems", icon: <GradientIcon icon={Cpu} preset="luxury-gold" size={16} />, level: "Intermediate" },
        { name: "Snowflake & dbt", icon: <GradientIcon icon={Database} preset="neon-purple" size={16} />, level: "Advanced" },
        { name: "TDD & QA", icon: <GradientIcon icon={Shield} preset="luxury-gold" size={16} />, level: "Advanced" },
        { name: "Git & DevOps", icon: <GradientIcon icon={GitBranch} preset="sunset-orange" size={16} />, level: "Advanced" },
    ]

    const traits = [
        { name: "Trust (Cautious)", desc: "Calculated evaluation of situations", icon: <GradientIcon icon={Shield} preset="luxury-gold" size={16} /> },
        { name: "Risk (Consistent)", desc: "Stable execution in high-stakes", icon: <GradientIcon icon={Zap} preset="sunset-orange" size={16} /> },
        { name: "Attention (High)", desc: "Deep focus & distraction resistance", icon: <GradientIcon icon={Target} preset="cyber-cyan" size={16} /> },
        { name: "Learning (Agile)", desc: "Rapid info absorption & retention", icon: <GradientIcon icon={BookOpen} preset="neon-purple" size={16} /> },
    ]

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
                    I am a systems-oriented <span className="text-white font-medium">Backend & Data Engineer</span>. I specialize in building robust data infrastructure, scalable ETL pipelines, and high-performance ML orchestration architectures.
                </p>
                <p className="text-spotify-grey text-lg leading-relaxed mb-6">
                    My background at <span className="text-spotify-green">NIT Warangal</span> is grounded in mathematical rigor, which I translate into production-grade systems capable of processing significant data volume asynchronously.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Briefcase} preset="spotify-green" /> Experience
                        </h3>
                        <div className="relative border-l-2 border-spotify-light ml-3 pl-8 pb-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative mb-12"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-spotify-green rounded-full border-4 border-spotify-black" />

                                <h4 className="text-xl font-bold text-white">Data Analyst Intern</h4>
                                <h5 className="text-lg text-spotify-green mb-2">Rajputana Vehicles Pvt. Ltd.</h5>

                                <div className="flex flex-col gap-1 text-sm text-spotify-grey mb-4">
                                    <span className="flex items-center gap-2"><Calendar size={14} /> May 2025 – June 2025</span>
                                    <span className="flex items-center gap-2"><MapPin size={14} /> Madhya Pradesh, India</span>
                                </div>

                                <ul className="list-disc list-inside text-spotify-grey space-y-2 text-sm">
                                    <li>Developed an automated <strong>ETL data pipeline</strong> using Python (Pandas) to process raw business data, eliminating 10+ hours/week of manual reporting.</li>
                                    <li>Implemented a <strong>K-Means clustering</strong> pipeline on 50k+ transaction records, improving campaign targeting precision by 15% compared to rule-based segmentation.</li>
                                    <li>Designed <strong>KPI dashboards</strong> using Power BI and Excel to visualize sales trends and inventory turnover for senior management.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Education & Skills */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GradientIcon icon={GraduationCap} preset="spotify-green" /> Education
                            </h3>
                            <div className="bg-spotify-dark p-6 rounded-xl border border-white/5 space-y-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white">B.Tech in Metallurgy and Material Sciences</h4>
                                    <h5 className="text-spotify-green">NIT Warangal</h5>
                                    <div className="flex justify-between items-center mt-1 text-sm text-spotify-grey">
                                        <span>2023 – 2027</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GradientIcon icon={Terminal} preset="spotify-green" /> Technical Arsenal
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {skills.map((skill, index) => (
                                    <div key={index} className="bg-spotify-dark p-3 rounded-lg border border-white/5 flex items-center gap-2 hover:bg-white/5 transition-colors">
                                        <span className="text-spotify-green">{skill.icon}</span>
                                        <span className="text-sm text-white/90">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership & Achievements */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Briefcase} preset="luxury-gold" /> Leadership
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-spotify-dark p-6 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors">
                                <h4 className="text-lg font-bold text-white">PR Team Head</h4>
                                <h5 className="text-spotify-green">Technozion (Technical Fest)</h5>
                                <p className="text-spotify-grey text-sm mt-2">
                                    Led the Public Relations team for one of South India's largest technical fests.
                                </p>
                            </div>
                            <div className="bg-spotify-dark p-6 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors">
                                <h4 className="text-lg font-bold text-white">Sponsorship Team Head</h4>
                                <h5 className="text-spotify-green">Springspree (Cultural Fest)</h5>
                                <p className="text-spotify-grey text-sm mt-2">
                                    Managed corporate sponsorships and partnerships for the annual cultural fest.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <GradientIcon icon={Brain} preset="neon-purple" /> Cognitive Profile
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {traits.map((trait, index) => (
                                <div key={index} className="bg-spotify-dark p-4 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors flex items-start gap-4">
                                    <div className="mt-1 text-spotify-green p-2 bg-white/5 rounded-lg">
                                        {trait.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{trait.name}</h4>
                                        <p className="text-spotify-grey text-sm leading-relaxed">
                                            {trait.desc}
                                        </p>
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
                                <div className="bg-spotify-dark p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg text-2xl">🎮</div>
                                        <div>
                                            <h4 className="text-white font-bold group-hover:text-spotify-green transition-colors">Software Engineering</h4>
                                            <p className="text-spotify-grey text-sm">Electronic Arts • 2025</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-spotify-dark p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg text-2xl">📈</div>
                                        <div>
                                            <h4 className="text-white font-bold group-hover:text-spotify-green transition-colors">Quantitative Research</h4>
                                            <p className="text-spotify-grey text-sm">JPMorgan Chase • 2025</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-spotify-dark p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg text-2xl">💎</div>
                                        <div>
                                            <h4 className="text-white font-bold group-hover:text-spotify-green transition-colors">SQL (Advanced)</h4>
                                            <p className="text-spotify-grey text-sm">HackerRank • Dec 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default About
