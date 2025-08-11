import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const { texts } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 py-8 text-center text-sm text-slate-500">
            <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
                <p>{texts.footer.developedBy}</p>
                <p className="mt-1">{texts.footer.copyright.replace('{year}', currentYear.toString())}</p>
            </div>
        </footer>
    );
};

export default Footer;
