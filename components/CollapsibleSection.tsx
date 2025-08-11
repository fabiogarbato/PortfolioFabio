

import React, { useState } from 'react';

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

interface CollapsibleSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    initialOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, children, initialOpen = true }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    return (
        <section id={id} className="scroll-mt-20">
            <div 
                className="flex justify-between items-center cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
            >
                <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    {title}
                </h2>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-green-400`}>
                    <ChevronDownIcon />
                </div>
            </div>
            <div
                id={`${id}-content`}
                className="grid transition-all duration-500 ease-in-out"
                style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                }}
            >
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default CollapsibleSection;