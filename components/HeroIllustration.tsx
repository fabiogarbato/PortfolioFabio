import React from 'react';
import { useTheme } from '../context/ThemeContext';
// The image is now referenced directly by its path in the src attribute.

const HeroIllustration: React.FC = () => {
    const { theme } = useTheme();
    const gradientId = "hero-gradient";

    return (
        <div className="relative w-full max-w-lg mx-auto h-full flex items-center justify-center">
            {/* Abstract background shape */}
            <svg viewBox="0 0 500 500" className="absolute w-full h-full opacity-10 dark:opacity-40" xmlns="http://www.w3.org/2000/svg">
                 <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="text-green-400" style={{stopColor: 'currentColor'}} />
                        <stop offset="100%" className="text-indigo-500" style={{stopColor: 'currentColor'}} />
                    </linearGradient>
                </defs>
                <path d="M433.5,297.5Q417,345,379.8,379.3Q342.5,413.5,296.3,428.3Q250,443,205.5,422Q161,401,118,382.5Q75,364,59.5,317.5Q44,271,52,221.5Q60,172,89.5,135.5Q119,99,165.5,84.5Q212,70,255,59Q298,48,340,71.5Q382,95,406,136.5Q430,178,440,212.8Q450,247.5,433.5,297.5Z" fill={`url(#${gradientId})`} transform="translate(0, 0) rotate(15 250 250)" />
            </svg>

            {/* Fábio's Photo */}
            <div className="relative z-10">
                <img
                    src="https://github.com/fabiogarbato.png"
                    alt="Foto de Fábio Garbato"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-offset-4 ring-offset-slate-100 dark:ring-offset-[#0D1117] ring-slate-200 dark:ring-white/10 shadow-2xl"
                />
            </div>
        </div>
    );
}


export default HeroIllustration;