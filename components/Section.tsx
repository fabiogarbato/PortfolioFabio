
import React from 'react';

interface SectionProps {
    id: string;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children }) => {
    return (
        <section id={id} className="mb-12 scroll-mt-24">
            <div className="flex items-center mb-6">
                <div className="text-teal-400 mr-4">{icon}</div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-200">{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default Section;