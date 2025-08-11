import React from 'react';

interface SkillPillProps {
    skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
    return (
        <div className="flex items-center rounded-full bg-emerald-50 dark:bg-green-400/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-700 dark:text-green-300 ring-1 ring-inset ring-emerald-600/20 dark:ring-0">
            {skill}
        </div>
    );
};

export default SkillPill;