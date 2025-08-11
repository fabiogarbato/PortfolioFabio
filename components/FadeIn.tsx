import React from 'react';
import { useInView } from '../hooks/useInView';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // in ms
}

const FadeIn: React.FC<FadeInProps> = ({ children, className = '', delay = 0 }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
