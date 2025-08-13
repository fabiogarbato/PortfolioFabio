import React from 'react';
import { SoftSkill } from '../types';

interface SoftSkillCardProps {
    skill: SoftSkill;
}

const SoftSkillCard: React.FC<SoftSkillCardProps> = ({ skill }) => {
    return (
        <div className="p-6 rounded-lg bg-white dark:bg-slate-800/50 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-white/10 shadow-md dark:shadow-none text-center h-full flex flex-col items-center justify-start transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-md dark:hover:ring-green-400/50">
            <div className="mb-4 text-emerald-600 dark:text-green-400">
                {skill.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200">{skill.title}</h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">{skill.description}</p>
        </div>
    );
};

export default SoftSkillCard;
