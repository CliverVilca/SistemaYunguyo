import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Investigacion = () => {
    const { t, language } = useLanguage();
    const lineasInvestigacion = [
        {
            titulo: language === 'es' ? "Recursos Naturales y Medio Ambiente" : "Natural Resources and Environment",
            descripcion: language === 'es' ? "Estudio y conservación de la biodiversidad en la cuenca del Lago Titicaca." : "Study and conservation of biodiversity in the Lake Titicaca basin."
        },
        {
            titulo: language === 'es' ? "Desarrollo Agroindustrial" : "Agro-industrial Development",
            descripcion: language === 'es' ? "Innovación tecnológica en procesos productivos adaptados a la región Puno." : "Technological innovation in production processes adapted to the Puno region."
        },
        {
            titulo: language === 'es' ? "Cultura e Interculturalidad" : "Culture and Interculturality",
            descripcion: language === 'es' ? "Investigación sobre saberes ancestrales e identidad cultural en la frontera." : "Research on ancestral knowledge and cultural identity at the border."
        }
    ];

    return (
        <div className="container" style={{ paddingBottom: '30px' }}>
            <section style={{ paddingTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <div>
                        <h2 className="section-title" style={{ margin: 0, textAlign: 'left', fontSize: '1.4rem' }}>{t('page_research_title')}</h2>
                        <p style={{ color: '#666', fontSize: '0.8rem', margin: '5px 0 0' }}>
                            {language === 'es' ?
                                'Impulsando el conocimiento científico en la frontera.' :
                                'Driving scientific knowledge at the border.'}
                        </p>
                    </div>
                </div>

                <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                    {lineasInvestigacion.map((linea, index) => (
                        <div className="card" key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid #eee',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                            borderRadius: '10px',
                            overflow: 'hidden'
                        }}>
                            <div style={{ height: '140px', overflow: 'hidden' }}>
                                <img
                                    src={`/investigacion_${index + 1}.jpg`}
                                    alt={linea.titulo}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                />
                            </div>
                            <div className="card-body" style={{ padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <span style={{ color: '#005a9c', fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {t('nav_research')}
                                </span>
                                <h3 style={{ marginTop: '8px', fontSize: '1rem', color: '#333', fontWeight: '700', lineHeight: '1.3' }}>
                                    {linea.titulo}
                                </h3>
                                <p style={{ fontSize: '0.82rem', color: '#666', margin: '10px 0', flexGrow: 1, lineHeight: '1.4' }}>
                                    {linea.descripcion}
                                </p>
                                <a href="#" className="btn-more" style={{ fontSize: '0.75rem', fontWeight: '700', color: '#004a80', marginTop: 'auto' }}>
                                    {language === 'es' ? 'VER PROYECTOS ➔' : 'VIEW PROJECTS ➔'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="convocatoria-card" style={{
                    marginTop: '40px',
                    padding: '25px',
                    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    borderRadius: '12px',
                    borderLeft: '5px solid #004a80',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <h3 style={{ color: '#004a80', marginBottom: '10px', fontSize: '1.2rem' }}>
                        {language === 'es' ? 'Repositorio Institucional' : 'Institutional Repository'}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#555', maxWidth: '700px' }}>
                        {language === 'es' ?
                            'Próximamente acceso a tesis, artículos científicos y publicaciones de la comunidad universitaria.' :
                            'Coming soon: access to theses, scientific articles, and publications from the university community.'}
                    </p>
                    <button className="btn-blue" style={{
                        marginTop: '15px',
                        padding: '10px 20px',
                        fontSize: '0.8rem',
                        borderRadius: '6px',
                        cursor: 'pointer'
                    }}>
                        {language === 'es' ? 'Explorar Repositorio' : 'Explore Repository'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Investigacion;
