import React, { createContext, useState, useContext } from 'react';

const translations = {
    es: {
        // Navigation
        nav_home: 'INICIO',
        nav_institutional: 'INSTITUCIONAL',
        nav_authorities: 'AUTORIDADES',
        nav_admission: 'ADMISIÓN',
        nav_research: 'INVESTIGACIÓN',
        nav_calls: 'CONVOCATORIAS',
        nav_news: 'NOTICIAS',
        nav_contact: 'CONTACTO',

        // Header
        top_intranet: 'Intranet y Correo',
        top_library: 'Biblioteca',
        top_transparency: 'Transparencia',
        search_placeholder: 'Buscar en UNFAY...',
        ley_text: 'LEY N.º 32090',

        // Home
        hero_tag_inst: 'Institucional',
        hero_title_1: 'UNFAY: Nueva era de educación superior en la frontera',
        hero_tag_res: 'Investigación',
        hero_title_2: 'Impulsando el desarrollo científico en Puno',
        hero_tag_cul: 'Cultura',
        hero_title_3: 'Excelencia académica con identidad regional',
        section_news: 'Actualidad Universitaria',
        read_more: 'LEER MÁS',

        // Footer
        footer_contact: 'Contacto Institucional',
        footer_links: 'Enlaces de Interés',
        footer_platforms: 'Plataformas',
        footer_follow: 'Síguenos',
        footer_rights: 'Todos los derechos reservados.',
        footer_dev: 'Desarrollado para la frontera.',

        // General
        download: 'Descargar',
        view_bio: 'VER TRAYECTORIA',
        back_home: 'VOLVER AL INICIO',
        description: 'Descripción',
        process: 'Proceso',
        date: 'Fecha',

        // Pages
        page_institutional_title: 'Institucional',
        page_authorities_title: 'Comisión Organizadora',
        page_calls_title: 'Convocatorias 2026',
        page_research_title: 'Investigación',
        page_transparency_title: 'Transparencia Universitaria',
        page_contact_title: 'Contáctanos',

        // Institutional Content
        inst_history_title: 'Reseña Histórica',
        inst_mission_title: 'Misión',
        inst_vision_title: 'Visión',
        inst_commitment: 'Compromiso con el desarrollo de la frontera sur',

        // Authorities Content
        auth_pres: 'Presidente de la Comisión Organizadora',
        auth_vpa: 'Vicepresidenta Académica',
        auth_vpi: 'Vicepresidente de Investigación'
    },
    en: {
        // Navigation
        nav_home: 'HOME',
        nav_institutional: 'INSTITUTIONAL',
        nav_authorities: 'AUTHORITIES',
        nav_admission: 'ADMISSION',
        nav_research: 'RESEARCH',
        nav_calls: 'CALLS',
        nav_news: 'NEWS',
        nav_contact: 'CONTACT',

        // Header
        top_intranet: 'Intranet & Email',
        top_library: 'Library',
        top_transparency: 'Transparency',
        search_placeholder: 'Search UNFAY...',
        ley_text: 'LAW N.º 32090',

        // Home
        hero_tag_inst: 'Institutional',
        hero_title_1: 'UNFAY: A new era of higher education at the border',
        hero_tag_res: 'Research',
        hero_title_2: 'Driving scientific development in Puno',
        hero_tag_cul: 'Culture',
        hero_title_3: 'Academic excellence with regional identity',
        section_news: 'University News',
        read_more: 'READ MORE',

        // Footer
        footer_contact: 'Institutional Contact',
        footer_links: 'Links of Interest',
        footer_platforms: 'Platforms',
        footer_follow: 'Follow Us',
        footer_rights: 'All rights reserved.',
        footer_dev: 'Developed for the border.',

        // General
        download: 'Download',
        view_bio: 'VIEW BIO',
        back_home: 'BACK TO HOME',
        description: 'Description',
        process: 'Process',
        date: 'Date',

        // Pages
        page_institutional_title: 'Institutional',
        page_authorities_title: 'Organizing Commission',
        page_calls_title: 'Job Calls 2026',
        page_research_title: 'Research',
        page_transparency_title: 'University Transparency',
        page_contact_title: 'Contact Us',

        // Institutional Content
        inst_history_title: 'Historical Background',
        inst_mission_title: 'Mission',
        inst_vision_title: 'Vision',
        inst_commitment: 'Commitment to the development of the southern border',

        // Authorities Content
        auth_pres: 'President of the Organizing Commission',
        auth_vpa: 'Academic Vice President',
        auth_vpi: 'Research Vice President'
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
