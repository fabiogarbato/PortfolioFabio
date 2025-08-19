
import React, { useRef, useState, useEffect, useCallback } from 'react';
import ExperienceCard from './components/ExperienceCard';
import SkillPill from './components/SkillPill';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { useLanguage } from './context/LanguageContext';
import { Education as EducationType } from './types';
import Footer from './components/Footer';
import FadeIn from './components/FadeIn';
import CollapsibleSection from './components/CollapsibleSection';
import SoftSkillCard from './components/SoftSkillCard';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const App: React.FC = () => {
    const { texts } = useLanguage();
    const { personalInfo, experience, education, skills, projects, navLinks, softSkillsTitle, softSkills } = texts;

    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScrollButtons = useCallback(() => {
        const el = carouselRef.current;
        if (el) {
            const tolerance = 2;
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setCanScrollLeft(scrollLeft > tolerance);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance);
        }
    }, []);

    useEffect(() => {
        const el = carouselRef.current;
        if (el) {
            checkScrollButtons();
            el.addEventListener('scroll', checkScrollButtons, { passive: true });
            window.addEventListener('resize', checkScrollButtons);

            const mutationObserver = new MutationObserver(checkScrollButtons);
            mutationObserver.observe(el, { childList: true });

            return () => {
                el.removeEventListener('scroll', checkScrollButtons);
                window.removeEventListener('resize', checkScrollButtons);
                mutationObserver.disconnect();
            };
        }
    }, [checkScrollButtons, projects]);

    const handleScroll = (direction: 'left' | 'right') => {
        const el = carouselRef.current;
        if (el) {
            const scrollAmount = el.clientWidth;
            el.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };


    return (
        <div className="relative overflow-x-hidden">
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10">
                <Hero />

                <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 pb-24 space-y-16">
                    <FadeIn>
                        <CollapsibleSection id="sobre" title={navLinks.about}>
                             <p className="dark:text-slate-400 max-w-3xl leading-relaxed">{personalInfo.summary}</p>
                        </CollapsibleSection>
                    </FadeIn>

                    <FadeIn>
                        <CollapsibleSection id="experience" title={navLinks.experience}>
                            <div className="space-y-8">
                                {experience.map((exp, index) => (
                                    <FadeIn key={index} delay={index * 100}>
                                        <ExperienceCard experience={exp} />
                                    </FadeIn>
                                ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>
                    
                    <FadeIn>
                        <CollapsibleSection id="projetos" title={navLinks.projects}>
                            <div className="relative group">
                                <div
                                    ref={carouselRef}
                                    className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar -mx-3"
                                >
                                   {projects.map((proj, index) => (
                                       <div key={index} className="snap-start flex-shrink-0 w-full md:w-1/2 px-3">
                                           <FadeIn delay={index * 100}>
                                                <div className="h-full">
                                                    <ProjectCard project={proj} />
                                                </div>
                                           </FadeIn>
                                       </div>
                                   ))}
                                </div>

                                <button
                                    onClick={() => handleScroll('left')}
                                    disabled={!canScrollLeft}
                                    aria-label="Previous project"
                                    className="flex absolute top-1/2 left-2 md:left-0 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 shadow-md ring-1 ring-slate-900/10 dark:ring-white/10 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed hover:scale-110 hover:bg-white dark:hover:bg-slate-900"
                                >
                                    <ChevronLeftIcon />
                                </button>
                                <button
                                    onClick={() => handleScroll('right')}
                                    disabled={!canScrollRight}
                                    aria-label="Next project"
                                    className="flex absolute top-1/2 right-2 md:right-0 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 items-center justify-center rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 shadow-md ring-1 ring-slate-900/10 dark:ring-white/10 transition-all duration-300 disabled:opacity-0 disabled:cursor-not-allowed hover:scale-110 hover:bg-white dark:hover:bg-slate-900"
                                >
                                    <ChevronRightIcon />
                                </button>
                            </div>
                        </CollapsibleSection>
                    </FadeIn>
                    
                     <FadeIn>
                        <CollapsibleSection id="education" title={navLinks.education}>
                            <div>
                                {education.map((edu: EducationType, index: number) => (
                                   <FadeIn key={index} delay={index * 100}>
                                       <div className="mb-6 p-4 rounded-lg bg-white dark:bg-slate-800/50 dark:backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-white/10 shadow-md dark:shadow-none">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-slate-900 dark:text-slate-200">{edu.institution}</h3>
                                                    <p className="text-slate-700 dark:text-slate-400">{edu.degree}</p>
                                                </div>
                                                {edu.period && <p className="text-xs font-mono text-slate-600 dark:text-slate-400 text-right shrink-0 ml-4">{edu.period}</p>}
                                            </div>
                                        </div>
                                   </FadeIn>
                                ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>

                    <FadeIn>
                        <CollapsibleSection id="skills" title={navLinks.skills}>
                            <div className="space-y-6">
                                {skills.map((category, index) => (
                                    <FadeIn key={index} delay={index * 50}>
                                        <div>
                                            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">{category.title}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <SkillPill key={skillIndex} skill={skill} />
                                                ))}
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>

                    <FadeIn>
                        <CollapsibleSection id="soft-skills" title={softSkillsTitle}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                               {softSkills.map((skill, index) => (
                                   <FadeIn key={index} delay={index * 100}>
                                       <SoftSkillCard skill={skill} />
                                   </FadeIn>
                               ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>
                    
                    <section id="contato" className="scroll-mt-20 text-center">
                         <FadeIn>
                             <div className="mb-6 justify-center">
                                 <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white">{personalInfo.contactTitle}</h2>
                            </div>
                            <p className="dark:text-slate-400 mb-8 max-w-xl mx-auto">{personalInfo.contactSubtitle}</p>
                            <div className="flex items-center justify-center space-x-6">
                                {personalInfo.socials.map(social => {
                                    const isWhatsApp = social.name === 'WhatsApp';
                                    return (
                                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group">
                                             <div className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${isWhatsApp ? 'bg-[#25D366] text-white' : 'bg-slate-200 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400 dark:group-hover:bg-white/10 dark:group-hover:text-white group-hover:bg-slate-300 group-hover:text-slate-800'} group-hover:scale-110`}>
                                                <div className="transform scale-125">
                                                    {social.icon}
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                         </FadeIn>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;