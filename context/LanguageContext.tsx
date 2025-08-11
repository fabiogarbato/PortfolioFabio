
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { ALL_PORTFOLIO_DATA } from '../constants';
import { PortfolioContent } from '../types';

type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    texts: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('pt');

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
    };
    
    const texts = useMemo(() => ALL_PORTFOLIO_DATA[language], [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
