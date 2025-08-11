

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);


const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage, texts } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { href: '#inicio', label: texts.navLinks.home },
        { href: '#sobre', label: texts.navLinks.about },
        { href: '#experience', label: texts.navLinks.experience },
        { href: '#projetos', label: texts.navLinks.projects },
        { href: '#contato', label: texts.navLinks.contact },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-[#0D1117]/80 border-b border-slate-200 dark:border-slate-300/10">
                <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                    <div className="flex justify-between items-center h-20">
                        <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="text-xl font-bold text-slate-900 dark:text-white transition-transform hover:scale-105">
                            &lt;FábioGarbato/&gt; <span className="font-medium text-slate-500 dark:text-slate-400">{language.toUpperCase()}</span>
                        </a>
                        
                        <nav className="hidden md:flex items-center space-x-4">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{link.label}</a>
                            ))}
                             <button onClick={toggleTheme} className="text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors">
                                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            </button>
                             <button onClick={toggleLanguage} className="text-sm font-bold w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors">
                                {language === 'pt' ? 'EN' : 'PT'}
                            </button>
                            <a href="/Resume.pdf" download={`FabioGarbato_Resume_${language.toUpperCase()}.pdf`} className="px-4 py-2 text-sm font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors">
                                {texts.navLinks.resume}
                            </a>
                        </nav>

                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                aria-label="Abrir menu"
                                className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div 
                className={`md:hidden fixed inset-0 bg-white dark:bg-[#0D1117] z-[60] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <button 
                        onClick={() => setIsMenuOpen(false)} 
                        aria-label="Fechar menu" 
                        className="absolute top-6 right-6 p-2 rounded-md text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav className="flex flex-col space-y-6 text-center">
                        {navLinks.map(link => (
                           <a key={link.href} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="block text-center text-3xl font-bold py-4 text-slate-900 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-white transition-colors">
                               {link.label}
                           </a>
                        ))}
                         <a 
                            href="/CV_Fabio_EN.pdf" 
                            download={`FabioGarbato_Resume_${language.toUpperCase()}.pdf`} 
                            className="mt-8 inline-block px-8 py-4 text-xl font-bold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105"
                        >
                            {texts.navLinks.resume}
                        </a>
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button onClick={toggleTheme} className="text-xl font-bold w-16 h-16 mx-auto flex items-center justify-center rounded-full text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors">
                                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                            </button>
                            <button onClick={toggleLanguage} className="text-xl font-bold w-16 h-16 mx-auto flex items-center justify-center rounded-full text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors">
                                {language === 'pt' ? 'EN' : 'PT'}
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;