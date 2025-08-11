


import React from 'react';
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

const App: React.FC = () => {
    const { texts } = useLanguage();
    const { personalInfo, experience, education, skills, projects, navLinks } = texts;

    return (
        <div className="relative text-slate-700 dark:text-slate-300 overflow-x-hidden">
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10">
                <Hero />

                <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 pb-24 space-y-16">
                    <FadeIn>
                        <CollapsibleSection id="sobre" title={navLinks.about}>
                             <p className="pt-4 text-slate-700 dark:text-slate-400 max-w-3xl leading-relaxed">{personalInfo.summary}</p>
                        </CollapsibleSection>
                    </FadeIn>

                    <FadeIn>
                        <CollapsibleSection id="experience" title={navLinks.experience} initialOpen={false}>
                            <div className="space-y-8 pt-4">
                                {experience.map((exp, index) => (
                                    <FadeIn key={index} delay={index * 100}>
                                        <ExperienceCard experience={exp} />
                                    </FadeIn>
                                ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>
                    
                    <FadeIn>
                        <CollapsibleSection id="projetos" title={navLinks.projects} initialOpen={false}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                               {projects.map((proj, index) => (
                                   <FadeIn key={index} delay={index * 100}>
                                       <ProjectCard project={proj} />
                                   </FadeIn>
                               ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>
                    
                     <FadeIn>
                        <CollapsibleSection id="education" title={navLinks.education} initialOpen={false}>
                            <div className="pt-4">
                                {education.map((edu: EducationType, index: number) => (
                                   <FadeIn key={index} delay={index * 100}>
                                       <div className="mb-6 p-4 rounded-lg bg-white dark:bg-slate-800/50 ring-1 ring-slate-900/10 dark:ring-white/10 shadow-md dark:shadow-none">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-bold text-slate-900 dark:text-slate-200">{edu.institution}</h3>
                                                    <p className="text-slate-700 dark:text-slate-400">{edu.degree}</p>
                                                </div>
                                                {edu.period && <p className="text-xs font-mono text-slate-500 dark:text-slate-400 text-right shrink-0 ml-4">{edu.period}</p>}
                                            </div>
                                        </div>
                                   </FadeIn>
                                ))}
                            </div>
                        </CollapsibleSection>
                    </FadeIn>

                    <FadeIn>
                        <CollapsibleSection id="skills" title={navLinks.skills} initialOpen={false}>
                            <div className="space-y-6 pt-4">
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
                    
                    <section id="contato" className="scroll-mt-20 text-center">
                         <FadeIn>
                             <div className="mb-6 justify-center">
                                 <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white">{personalInfo.contactTitle}</h2>
                            </div>
                            <p className="text-slate-700 dark:text-slate-400 mb-8 max-w-xl mx-auto">{personalInfo.contactSubtitle}</p>
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