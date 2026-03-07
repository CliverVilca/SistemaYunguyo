import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Noticias = () => {
    const { t, language } = useLanguage();
    const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);

    const todasLasNoticias = [
        {
            id: 1,
            tag: t('hero_tag_inst').toUpperCase(),
            titulo: t('hero_title_1'),
            fecha: language === 'es' ? "06 de Marzo, 2026" : "March 06, 2026",
            imagen: "/hero.png",
            resumen: language === 'es' ? "Iniciamos las actividades académicas con un enfoque en la excelencia." : "We begin academic activities with a focus on excellence.",
            contenido: language === 'es' ?
                "La UNFAY marca un hito histórico. Con el objetivo de brindar educación de calidad en una zona estratégica, se han iniciado las gestiones necesarias. El campus contará con infraestructura moderna equipada con laboratorios de última generación." :
                "UNFAY marks a historic milestone. Aiming to provide quality education in a strategic zone, the necessary steps have begun. The campus will feature modern infrastructure equipped with state-of-the-art laboratories."
        },
        {
            id: 2,
            tag: t('hero_tag_res').toUpperCase(),
            titulo: t('hero_title_2'),
            fecha: language === 'es' ? "04 de Marzo, 2026" : "March 04, 2026",
            imagen: "/lab.jpg",
            resumen: language === 'es' ? "Nuevos laboratorios equipados con tecnología de punta para el estudio local." : "New laboratories equipped with state-of-the-art technology for local study.",
            contenido: language === 'es' ?
                "La comisión ha anunciado la adquisición de equipos especializados para el análisis de agua y suelos. Estos laboratorios permitirán que los investigadores lideren proyectos de sostenibilidad." :
                "The commission has announced the acquisition of specialized equipment for water and soil analysis. These labs will allow researchers to lead sustainability projects."
        },
        {
            id: 3,
            tag: t('hero_tag_cul').toUpperCase(),
            titulo: t('hero_title_3'),
            fecha: language === 'es' ? "01 de Marzo, 2026" : "March 01, 2026",
            imagen: "/culture.jpg",
            resumen: language === 'es' ? "Integración de saberes ancestrales en la formación de nuevos profesionales." : "Integration of ancestral knowledge in the training of new professionals.",
            contenido: language === 'es' ?
                "En la UNFAY creemos que la educación no debe estar desligada de nuestras raíces. El currículo incluirá módulos de interculturalidad y cosmovisión andina para formar líderes conscientes." :
                "At UNFAY we believe education should not be detached from our roots. The curriculum will include modules on interculturality and Andean worldview to train conscious leaders."
        }
    ];

    const abrirModal = (noticia) => {
        setNoticiaSeleccionada(noticia);
        document.body.style.overflow = 'hidden';
    };

    const cerrarModal = () => {
        setNoticiaSeleccionada(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="container">
            <section>
                <h2 className="section-title">{language === 'es' ? 'Noticias y Actualidad' : 'News and Current Events'}</h2>
                <div className="card-grid">
                    {todasLasNoticias.map((noticia) => (
                        <div className="card" key={noticia.id}>
                            <div className="card-img">
                                <img src={noticia.imagen} alt={noticia.titulo} />
                            </div>
                            <div className="card-body">
                                <span style={{ fontSize: '0.75rem', background: '#e9ecef', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>{noticia.tag}</span>
                                <h3 style={{ marginTop: '10px' }}>{noticia.titulo}</h3>
                                <p style={{ fontSize: '0.8rem', color: '#888' }}>📅 {noticia.fecha}</p>
                                <p>{noticia.resumen}</p>
                                <button className="btn-more" onClick={() => abrirModal(noticia)}>{t('read_more')} ➔</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal de noticia */}
            {noticiaSeleccionada && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={cerrarModal}>&times;</button>
                        <div className="modal-header">
                            <img src={noticiaSeleccionada.imagen} alt={noticiaSeleccionada.titulo} />
                        </div>
                        <div className="modal-body">
                            <span className="modal-tag">{noticiaSeleccionada.tag}</span>
                            <h2>{noticiaSeleccionada.titulo}</h2>
                            <p className="modal-date">📅 {noticiaSeleccionada.fecha}</p>
                            <div className="modal-text">
                                <p>{noticiaSeleccionada.contenido}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Noticias;
