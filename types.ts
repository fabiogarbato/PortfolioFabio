import React from 'react';

export interface PersonalInfo {
    greeting: string;
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    yearsOfExperience: string;
    socials: SocialLink[];
    whatsapp: string;
    contactTitle: string;
    contactSubtitle: string;
    contactButton: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    linkText: string;
}

export interface NavLinks {
    home: string;
    about: string;
    experience: string;
    projects: string;
    education: string;
    skills: string;
    contact: string;
    resume: string;
}

export interface FooterText {
    developedBy: string;
    copyright: string;
}

export interface PortfolioContent {
    personalInfo: PersonalInfo;
    experience: Experience[];
    education: Education[];
    skills: SkillCategory[];
    projects: Project[];
    navLinks: NavLinks;
    footer: FooterText;
}