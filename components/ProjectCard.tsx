


import React from 'react';
import { Project } from '../types';
import SkillPill from './SkillPill';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
    <div className="p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-white/10 h-full flex flex-col shadow-md dark:shadow-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-md dark:hover:ring-green-400/50">
        <h3 className="text-xl font-bold text-emerald-600 dark:text-green-400">{project.title}</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-400 flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((skill, index) => <SkillPill key={index} skill={skill} />)}
        </div>
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-bold text-slate-900 hover:text-emerald-600 dark:text-white dark:hover:text-green-400 transition-colors">
                {project.linkText} &rarr;
            </a>
        )}
    </div>
);

export default ProjectCard;