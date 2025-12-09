import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, GraduationCap, Code2, Database, Brain, Terminal } from 'lucide-react'

const About = () => {
    const skills = [
        { name: "Full Stack SaaS", icon: <Code2 size={16} />, level: "Expert" },
        { name: "Generative AI (LLMs)", icon: <Brain size={16} />, level: "Advanced" },
        { name: "Python & Data Science", icon: <Database size={16} />, level: "Expert" },
        { name: "FastAPI & React", icon: <Terminal size={16} />, level: "Advanced" },
        { name: "SQL & ETL Pipelines", icon: <Database size={16} />, level: "Expert" },
        { name: "C++ & Algorithms", icon: <Code2 size={16} />, level: "Intermediate" },
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
                <div className="bg-spotify-dark rounded-xl p-8 mb-12 border border-white/5">
                    <p className="text-spotify-grey text-lg leading-relaxed mb-6">
                        I am a passionate <span className="text-white font-medium">Python Developer</span> and <span className="text-white font-medium">Data Analyst</span> focused on building intelligent software solutions. With a strong foundation in <span className="text-white font-medium">Full Stack Development</span> and <span className="text-white font-medium">Generative AI</span>, I bridge the gap between complex data and actionable business insights.
                    </p>
                    <p className="text-spotify-grey text-lg leading-relaxed">
                        My goal is to build scalable SaaS platforms that solve real-world problems. From predicting credit risk using ML to visualizing automotive market trends, I love turning raw data into products.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">

                    {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                            <Briefcase className="text-spotify-green" /> Experience
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
                                    <li>Developed <strong>Python automation scripts</strong> to streamline data processing, significantly reducing manual analysis time.</li>
                                    <li>Performed <strong>quality validation</strong> on large datasets to ensure accuracy for strategic decision-making.</li>
                                    <li>Designed <strong>KPI dashboards</strong> (Power BI) to monitor performance metrics and automated monthly reporting.</li>
                                    <li>Implemented <strong>K-Means Clustering</strong> to segment customers, enhancing targeted marketing efficiency.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative mb-12"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-spotify-green rounded-full border-4 border-spotify-black" />

                                <h4 className="text-xl font-bold text-white">Software Engineer Virtual Experience</h4>
                                <h5 className="text-lg text-spotify-green mb-2">Electronic Arts</h5>

                                <div className="flex flex-col gap-1 text-sm text-spotify-grey mb-4">
                                    <span className="flex items-center gap-2"><Calendar size={14} /> December 2025</span>
                                    <span className="flex items-center gap-2"><MapPin size={14} /> Forage (Virtual)</span>
                                </div>

                                <ul className="list-disc list-inside text-spotify-grey space-y-2 text-sm">
                                    <li>Optimized <strong>C++ codebase</strong> by identifying and patching defects, enhancing overall game stability and code quality.</li>
                                    <li>Proposed a new feature for the <strong>EA Sports College Football</strong> with a comprehensive design document.</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[41px] top-0 w-5 h-5 bg-spotify-green rounded-full border-4 border-spotify-black" />

                                <h4 className="text-xl font-bold text-white">Quantitative Research Virtual Experience</h4>
                                <h5 className="text-lg text-spotify-green mb-2">JPMorgan Chase & Co.</h5>

                                <div className="flex flex-col gap-1 text-sm text-spotify-grey mb-4">
                                    <span className="flex items-center gap-2"><Calendar size={14} /> November 2025</span>
                                    <span className="flex items-center gap-2"><MapPin size={14} /> Forage (Virtual)</span>
                                </div>

                                <ul className="list-disc list-inside text-spotify-grey space-y-2 text-sm">
                                    <li>Analyzed a loan book using <strong>quantitative methods</strong> and verified data accuracy.</li>
                                    <li>Implemented <strong>dynamic programming</strong> solutions to predict default probabilities effectively.</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Education & Skills */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <GraduationCap className="text-spotify-green" /> Education
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
                                    <h4 className="text-lg font-bold text-white">Higher Secondary (Class XII)</h4>
                                    <h5 className="text-spotify-green">TSBIE</h5>
                                    <div className="flex justify-between items-center mt-1 text-sm text-spotify-grey">
                                        <span>2022</span>
                                        <span>96%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-white">
                                <Terminal className="text-spotify-green" /> Technical Arsenal
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
                            <Briefcase className="text-spotify-green" /> Leadership
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
                            <GraduationCap className="text-spotify-green" /> Certifications
                        </h3>
                        {/* <div className="bg-spotify-dark p-6 rounded-xl border border-white/5 hover:border-spotify-green/50 transition-colors mb-6">
                            <h4 className="text-lg font-bold text-white">JPMorgan Chase</h4>
                            <h5 className="text-spotify-green">Forage Virtual Internship</h5>
                            <p className="text-spotify-grey text-sm mt-2">
                                Gained practical experience in software engineering tasks and financial technology.
                            </p>
                        </div> */}
                    </div>
                </div>

            </motion.div>
        </section>
    )
}

export default About
