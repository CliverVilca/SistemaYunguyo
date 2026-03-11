import React, { createContext, useContext, useState, useEffect } from 'react';

// Diccionario Base Español
const esTranslations = {
    "nav_home": "INICIO",
    "nav_institutional": "INSTITUCIONAL",
    "nav_authorities": "AUTORIDADES",
    "nav_carreras": "CARRERAS",
    "nav_admission": "ADMISIÓN",
    "nav_research": "INVESTIGACIÓN",
    "nav_calls": "CONVOCATORIAS",
    "nav_news": "NOTICIAS",
    "nav_contact": "CONTACTO",
    "top_intranet": "Intranet y Correo",
    "top_library": "Biblioteca",
    "top_transparency": "Transparencia",
    "search_placeholder": "Buscar en UNFAY...",
    "ley_text": "LEY N.º 32090",
    "hero_tag_inst": "Institucional",
    "hero_title_1": "UNFAY: Nueva era de educación superior en la frontera",
    "hero_tag_res": "Investigación",
    "hero_title_2": "Impulsando el desarrollo científico en Puno",
    "hero_tag_cul": "Cultura",
    "hero_title_3": "Excelencia académica con identidad regional",
    "section_news": "Actualidad Universitaria",
    "read_more": "LEER MÁS",
    "footer_contact": "Contacto Institucional",
    "footer_links": "Enlaces de Interés",
    "footer_platforms": "Plataformas",
    "footer_follow": "Síguenos",
    "footer_rights": "Todos los derechos reservados.",
    "footer_dev": "Desarrollado para la frontera.",
    "page_institutional_title": "Información Institucional"
};

// Diccionario Aymara (Básico)
const ayTranslations = {
    ...esTranslations,
    "nav_home": "QALLTA",
    "nav_institutional": "YATIQAY Wasi",
    "nav_authorities": "JILAQA KAMACHI",
    "nav_carreras": "YATIQAÑANAKA",
    "nav_admission": "MANTAÑA",
    "nav_research": "THAQHAWI",
    "nav_calls": "JAQICHANAKA",
    "nav_news": "YATIYAWINAKA",
    "nav_contact": "JIKIQHATAÑA",
    "read_more": "JUK'AMP UÑJAÑA"
};

// Diccionario Quechua (Básico)
const quTranslations = {
    ...esTranslations,
    "nav_home": "QALLARIY",
    "nav_institutional": "HATUN YACHAY",
    "nav_authorities": "KAMACHIQKUNA",
    "nav_carreras": "YACHAYKUNA",
    "nav_admission": "YAYKUY",
    "nav_research": "MASKHAY",
    "nav_calls": "WAQYAYKUNA",
    "nav_news": "WILLAKUYKUNA",
    "nav_contact": "TUPANAKUY",
    "read_more": "ASTAWAN ÑAWIRIY"
};

// Diccionario Inglés
const enTranslations = {
    ...esTranslations,
    "nav_home": "HOME",
    "nav_institutional": "ABOUT US",
    "nav_authorities": "AUTHORITIES",
    "nav_carreras": "PROGRAMS",
    "nav_admission": "ADMISSIONS",
    "nav_research": "RESEARCH",
    "nav_calls": "CALLS",
    "nav_news": "NEWS",
    "nav_contact": "CONTACT",
    "top_intranet": "Intranet & Mail",
    "top_library": "Library",
    "top_transparency": "Transparency",
    "search_placeholder": "Search UNFAY...",
    "ley_text": "LAW N.º 32090",
    "hero_tag_inst": "Institutional",
    "hero_title_1": "UNFAY: A new era of higher education at the border",
    "read_more": "READ MORE",
    "footer_contact": "Institutional Contact",
    "footer_links": "Useful Links",
    "footer_platforms": "Platforms",
    "footer_follow": "Follow Us",
    "footer_rights": "All rights reserved."
};

const dictionaries = {
    es: esTranslations,
    ay: ayTranslations,
    qu: quTranslations,
    en: enTranslations
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Ya no usamos localStorage ni diccionarios extra. Directo a Español.
    const language = 'es';

    const t = (key) => {
        return esTranslations[key] || key;
    };

    const changeLanguage = () => { }; // No-op por si quedan llamadas residuales

    return (
        <LanguageContext.Provider value={{ t, language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
