import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-white/10 shadow-md dark:shadow-none">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold text-emerald-600 dark:text-green-400">{experience.role}</h3>
                    <p className="text-md font-semibold text-slate-900 dark:text-slate-300">{experience.company}</p>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 text-right shrink-0 ml-4">{experience.period}</div>
            </div>
            <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-400">
                {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;