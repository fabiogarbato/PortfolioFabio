import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <div className="group relative h-full rounded-xl overflow-hidden bg-white dark:bg-slate-800/60 dark:backdrop-blur-md ring-1 ring-slate-200 dark:ring-white/10 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-green-400/5 hover:-translate-y-1">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6 pt-7 flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-black text-emerald-500/10 dark:text-green-400/10 group-hover:text-emerald-500/20 dark:group-hover:text-green-400/20 transition-colors duration-500 select-none leading-none">
                    {String(index + 1).padStart(2, '0')}
                </span>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 dark:hover:text-green-400 hover:bg-emerald-50 dark:hover:bg-green-400/10 transition-all duration-300"
                        aria-label={`Open ${project.title}`}
                    >
                        <ExternalLinkIcon />
                    </a>
                )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-green-400 transition-colors duration-300 mb-3">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-5">
                {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                {project.tech.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 dark:bg-green-400/10 dark:text-green-400 ring-1 ring-emerald-200/50 dark:ring-green-400/20"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;
