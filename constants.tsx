

import React from 'react';
import { PortfolioContent } from './types';

export const MailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export const PhoneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export const MapPinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
    </svg>
);

export const GithubIcon = (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" strokeWidth="0" className="w-6 h-6">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
);

export const LinkedinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
    </svg>
);

export const WhatsAppIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
       <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.613-1.476l-6.167 1.687a.75.75 0 01-.947-.947zM6.509 19.344a10.38 10.38 0 005.394 1.476 10.38 10.38 0 0010.386-10.385c.002-5.728-4.658-10.386-10.386-10.386-5.727 0-10.385 4.658-10.385 10.386 0 2.023.582 3.961 1.66 5.728l-1.134 4.135 4.27-1.156z"></path>
    </svg>
);

const ptData: PortfolioContent = {
    personalInfo: {
        greeting: "Olá 👋, eu sou",
        name: "Fábio Garbato",
        title: "Desenvolvedor Full Stack",
        location: "Curitiba - PR, Brazil",
        email: "fabiogarbato3006@gmail.com",
        phone: "(41) 98737-2059",
        whatsapp: "5541987372059",
        summary: "Desenvolvedor com experiência em HTML5, C#, .NET, MS-SQL Server, CSS3, JavaScript (ES6+), Delphi, Python, React.js, VueJS, Bootstrap, Node.js, PostgreSQL, MySQL e APIs REST JSON. Experiência em Scrum, testes unitários, Git (Gitea) e GitHub para controle de código e versionamento de projetos, bem como desenvolvimento de e-commerce (B2B, B2C) com Magento.",
        yearsOfExperience: "+4 Anos de Experiência",
        socials: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/f%C3%A1bio-garbato-046316196', icon: LinkedinIcon },
            { name: 'GitHub', url: 'https://github.com/fabiogarbato', icon: GithubIcon },
            { name: 'WhatsApp', url: 'https://wa.me/5541987372059', icon: WhatsAppIcon }
        ],
        contactTitle: "Vamos Conversar?",
        contactSubtitle: "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente ou apenas quer dizer oi, não hesite em me contatar.",
        contactButton: "Mande um e-mail",
    },
    navLinks: {
        home: "INÍCIO",
        about: "SOBRE MIM",
        experience: "EXPERIÊNCIA",
        projects: "PROJETOS",
        education: "EDUCAÇÃO",
        skills: "SKILLS",
        contact: "CONTATO",
        resume: "CURRÍCULO"
    },
    experience: [
        {
            company: "CCM do Brasil",
            role: "FullStack Software Developer",
            period: "Junho 2024 - Atualmente",
            description: [
                "Desenvolvimento de aplicações web usando React, Bootstrap, Node.js, JavaScript, HTML e CSS.",
                "Integração com Firebase para autenticação e banco de dados em tempo real, além do desenvolvimento de APIs REST.",
                "Implementação de programação concorrente para otimização de processos e melhoria de performance de aplicações."
            ]
        },
        {
            company: "MPS Informática",
            role: "FullStack Developer",
            period: "Janeiro 2024 - Agosto 2024",
            description: [
                "Desenvolvimento de aplicações web com HTML5, CSS3, Node.js, React, Bootstrap e Vue.js.",
                "Manutenção de sistemas legados existentes com Delphi 7/XE.",
                "Colaboração com equipes multidisciplinares, utilizando a metodologia SCRUM.",
                "Desenvolvimento de scripts Python para extração de dados.",
                "Desenvolvimento de APIs REST utilizando C# e .NET."
            ]
        },
        {
            company: "MPS Informática",
            role: "Desenvolvedor Júnior",
            period: "Agosto 2022 - Dezembro 2023",
            description: [
                "Manutenção de sistemas legados existentes com Delphi 7/XE.",
                "Desenvolvimento e manutenção de APIs REST utilizando C# e .NET.",
                "Colaboração com equipes multidisciplinares, utilizando a metodologia SCRUM.",
                "Criação de Procedures, Triggers e Views em banco de dados MS-SQL Server.",
                "Desenvolvimento de queries complexas para dar suporte a clientes em banco de dados MS-SQL Server.",
                "Testes Unitários."
            ]
        },
        {
            company: "MPS Informática",
            role: "Estagiário - Desenvolvedor",
            period: "Outubro 2021 - Julho 2022",
            description: [
                "Manutenção de sistemas legados existentes com Delphi 7/XE.",
                "Desenvolvimento e manutenção de APIs REST utilizando C# e .NET."
            ]
        }
    ],
    education: [
        {
            institution: "Universidade Positivo",
            degree: "Bacharelado em Ciência da Computação",
            period: "2020 - 2023"
        },
        {
            institution: "Colégio Objetivo Penha",
            degree: "Ensino Médio",
            period: ""
        }
    ],
    skills: [
        {
            title: "Linguagens de Programação",
            skills: ["Python", "Javascript (ES6+)", "Delphi 7/XE/10", "C#", "HTML5", "CSS3"]
        },
        {
            title: "Frameworks & Bibliotecas",
            skills: ["React", "Node.js", "VueJS", "Express", "Bootstrap", "Flask", ".NET 5.0/8.0", "Sequelize"]
        },
        {
            title: "Bancos de Dados",
            skills: ["PostgreSQL", "MySQL", "SQL", "MongoDB", "Firebase"]
        },
        {
            title: "Ferramentas",
            skills: ["GitHub", "Gitea", "Tortoise SVN"]
        },
        {
            title: "Metodologias",
            skills: ["Testes Unitários", "Metodologia SCRUM"]
        },
        {
            title: "Cloud (AWS)",
            skills: ["S3Client", "Gerenciamento de Bucket e Objeto", "Configuração de Permissão", "Versionamento", "Integração Lambda", "CloudFront"]
        }
    ],
    projects: [
        {
            title: "Site Restaurante Miyō",
            description: "Desenvolvimento de um site moderno e responsivo para o Restaurante Miyō, substituindo a versão antiga. Foco na experiência do usuário, apresentando um cardápio digital interativo.",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            link: "https://restaurante-miyo-culin-ria-japonesa-694424017368.us-west1.run.app/#cardapio",
            linkText: "Ver Projeto"
        },
        {
            title: "Gerenciador de Tarefas Colaborativo",
            description: "Uma aplicação de gerenciamento de tarefas que permite a colaboração em tempo real, construída com React e Firebase para sincronização de dados.",
            tech: ["React", "Firebase", "Tailwind CSS"],
            link: "https://gerenciador-de-tarefas-colaborativo-984102563447.us-west1.run.app",
            linkText: "Ver Projeto"
        },
        {
            title: "Logo de Criptomoedas em Tempo Real",
            description: "Um gerador de logos para criptomoedas que utiliza IA para criar imagens únicas baseadas em nomes de tokens. Construído com Gemini API.",
            tech: ["React", "Gemini API", "Tailwind CSS"],
            link: "https://cat-logo-de-criptomoedas-em-tempo-real-761735705150.us-west1.run.app",
            linkText: "Ver Projeto"
        }
    ],
    footer: {
        developedBy: "Desenvolvido por Fábio Garbato",
        copyright: "© {year} Copyright. Todos os direitos reservados."
    }
};

const enData: PortfolioContent = {
    personalInfo: {
        greeting: "Hello 👋, I am",
        name: "Fábio Garbato",
        title: "Full Stack Developer",
        location: "Curitiba - PR, Brazil",
        email: "fabiogarbato3006@gmail.com",
        phone: "+55 (41) 98737-2059",
        whatsapp: "5541987372059",
        summary: "Developer with experience in HTML5, C#, .NET, MS-SQL Server, CSS3, JavaScript (ES6+), Delphi, Python, React.js, VueJS, Bootstrap, Node.js, PostgreSQL, MySQL and JSON REST APIs. Experience in Scrum, unit testing, Git (Gitea) and GitHub for code control and project versioning, as well as e-commerce development (B2B, B2C) with Magento.",
        yearsOfExperience: "+4 Years of Experience",
        socials: [
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/f%C3%A1bio-garbato-046316196', icon: LinkedinIcon },
            { name: 'GitHub', url: 'https://github.com/fabiogarbato', icon: GithubIcon },
            { name: 'WhatsApp', url: 'https://wa.me/5541987372059', icon: WhatsAppIcon }
        ],
        contactTitle: "Let's Talk?",
        contactSubtitle: "I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hi, don't hesitate to contact me.",
        contactButton: "Send an email",
    },
    navLinks: {
        home: "HOME",
        about: "ABOUT ME",
        experience: "EXPERIENCE",
        projects: "PROJECTS",
        education: "EDUCATION",
        skills: "SKILLS",
        contact: "CONTACT",
        resume: "RESUME"
    },
    experience: [
        {
            company: "CCM do Brasil",
            role: "FullStack Software Developer",
            period: "June 2024 - Present",
            description: [
                "Development of web applications using React, Bootstrap, Node.js, JavaScript, HTML, and CSS.",
                "Integration with Firebase for authentication and real-time database, as well as development of REST APIs.",
                "Implementation of concurrent programming for process optimization and performance improvement of applications."
            ]
        },
        {
            company: "MPS Informática",
            role: "FullStack Developer",
            period: "Jan 2024 - Aug 2024",
            description: [
                "Development of web applications with HTML5, CSS3, Node.js, React, Bootstrap, and Vue.js.",
                "Maintenance of existing legacy systems with Delphi 7/XE.",
                "Collaboration with multidisciplinary teams, using the SCRUM methodology.",
                "Development of Python scripts for data extraction.",
                "Development of REST APIs using C# and .NET."
            ]
        },
        {
            company: "MPS Informática",
            role: "Junior Developer",
            period: "Aug 2022 - Dec 2023",
            description: [
                "Maintenance of existing legacy systems with Delphi 7/XE.",
                "Development and maintenance of REST APIs using C# and .NET.",
                "Collaboration with multidisciplinary teams, using the SCRUM methodology.",
                "Creation of Procedures, Triggers, and Views in MS-SQL Server database.",
                "Development of complex queries to support clients in MS-SQL Server database.",
                "Unit Testing."
            ]
        },
        {
            company: "MPS Informática",
            role: "Intern - Developer",
            period: "Oct 2021 - Jul 2022",
            description: [
                "Maintenance of existing legacy systems with Delphi 7/XE.",
                "Development and maintenance of REST APIs using C# and .NET."
            ]
        }
    ],
    education: [
        {
            institution: "Universidade Positivo",
            degree: "Bachelor's Degree in Computer Science",
            period: "2020 - 2023"
        },
        {
            institution: "Colégio Objetivo Penha",
            degree: "High School",
            period: ""
        }
    ],
    skills: [
        {
            title: "Programming Languages",
            skills: ["Python", "Javascript (ES6+)", "Delphi 7/XE/10", "C#", "HTML5", "CSS3"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React", "Node.js", "VueJS", "Express", "Bootstrap", "Flask", ".NET 5.0/8.0", "Sequelize"]
        },
        {
            title: "Databases",
            skills: ["PostgreSQL", "MySQL", "SQL", "MongoDB", "Firebase"]
        },
        {
            title: "Tools",
            skills: ["GitHub", "Gitea", "Tortoise SVN"]
        },
        {
            title: "Methodologies",
            skills: ["Unit Testing", "SCRUM Methodology"]
        },
        {
            title: "Cloud (AWS)",
            skills: ["S3Client", "Bucket & Object Management", "Permission Configuration", "Versioning", "Lambda Integration", "CloudFront"]
        }
    ],
    projects: [
        {
            title: "Miyō Restaurant Website",
            description: "Developed a modern and responsive website for Miyō Restaurant, replacing their old site. The focus was on user experience, featuring an interactive digital menu.",
            tech: ["React", "TypeScript", "Tailwind CSS"],
            link: "https://restaurante-miyo-culin-ria-japonesa-694424017368.us-west1.run.app/#cardapio",
            linkText: "View Project"
        },
        {
            title: "Collaborative Task Manager",
            description: "A task management application that allows real-time collaboration, built with React and Firebase for data synchronization.",
            tech: ["React", "Firebase", "Tailwind CSS"],
            link: "https://gerenciador-de-tarefas-colaborativo-984102563447.us-west1.run.app",
            linkText: "View Project"
        },
        {
            title: "Real-time Crypto Logo",
            description: "A logo generator for cryptocurrencies that uses AI to create unique images based on token names. Built with the Gemini API.",
            tech: ["React", "Gemini API", "Tailwind CSS"],
            link: "https://cat-logo-de-criptomoedas-em-tempo-real-761735705150.us-west1.run.app",
            linkText: "View Project"
        }
    ],
    footer: {
        developedBy: "Developed by Fábio Garbato",
        copyright: "© {year} Copyright. All Rights Reserved."
    }
};

export const ALL_PORTFOLIO_DATA = {
    pt: ptData,
    en: enData,
};