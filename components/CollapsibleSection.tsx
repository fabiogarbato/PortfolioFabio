



import React from 'react';

interface CollapsibleSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    initialOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="scroll-mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white mb-6">
                {title}
            </h2>
            {children}
        </section>
    );
};

export default CollapsibleSection;