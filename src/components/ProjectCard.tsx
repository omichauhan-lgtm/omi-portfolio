import { motion } from 'framer-motion'
import { Github, ExternalLink, Play } from 'lucide-react'
import { Project } from '../data/projects'
import GradientIcon from './ui/GradientIcon'

interface ProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-spotify-dark rounded-md p-4 hover:bg-spotify-light transition-colors duration-300 group relative"
        >
            {/* Image Container */}
            <div className="relative aspect-video mb-4 overflow-hidden rounded-md shadow-lg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-spotify-green text-black rounded-full p-4 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                        <Play fill="currentColor" className="ml-1" />
                    </motion.a>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-1 truncate">{project.title}</h3>
            <p className="text-spotify-grey text-sm line-clamp-2 mb-4 h-10">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80">
                        {tech}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80">
                        +{project.tech.length - 3}
                    </span>
                )}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-spotify-grey hover:text-white transition-colors flex items-center gap-1 text-sm"
                >
                    <GradientIcon icon={Github} preset="spotify-green" size={16} /> Code
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-spotify-grey hover:text-white transition-colors flex items-center gap-1 text-sm"
                    >
                        <GradientIcon icon={ExternalLink} preset="cyber-cyan" size={16} /> Demo
                    </a>
                )}
            </div>
        </motion.div>
    )
}

export default ProjectCard
