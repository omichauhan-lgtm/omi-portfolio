import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Projects</h2>
                <a href="https://github.com/omichauhan-lgtm" className="text-sm text-spotify-grey hover:text-white font-bold uppercase tracking-widest hover:underline">
                    See All
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
