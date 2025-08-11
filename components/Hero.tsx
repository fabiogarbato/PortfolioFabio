

import React from 'react';
import HeroIllustration from './HeroIllustration';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { texts } = useLanguage();
    const { personalInfo } = texts;
    
    return (
        <section id="inicio" className="flex items-center pt-40 pb-20">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <p className="text-lg text-slate-700 dark:text-gray-300">{personalInfo.greeting}</p>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white my-2 tracking-tighter">{personalInfo.name}</h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-green-400">{personalInfo.title}</h2>
                        <p className="mt-4 text-slate-500 dark:text-gray-400">{personalInfo.yearsOfExperience}</p>
                        <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
                            {personalInfo.socials.map(social => {
                                const isWhatsApp = social.name === 'WhatsApp';
                                return (
                                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group">
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isWhatsApp ? 'bg-[#25D366] text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400 dark:group-hover:bg-white/10 dark:group-hover:text-white group-hover:bg-slate-300 group-hover:text-slate-800'} group-hover:scale-110`}>
                                            {social.icon}
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center items-center h-[500px]">
                        <HeroIllustration />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;