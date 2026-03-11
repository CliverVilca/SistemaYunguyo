import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Investigacion = () => {
    const { t, language } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

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

    const reglamentos = [
        {
            titulo: "REGLAMENTO PARA LA GESTIÓN DE LOS PROYECTOS DE INVESTIGACIÓN",
            fechaCorta: "Abril 5, 2024",
            fechaCompleta: "Vie, 05/04/2024 - 12:00",
            archivos: [
                { nombre: "REGLAMENTO DE GESTIÓN DE PROYECTOS", size: "1.73 MB", type: "pdf" }
            ]
        },
        {
            titulo: "REGLAMENTO DE PROPIEDAD INTELECTUAL",
            fechaCorta: "Marzo 15, 2024",
            fechaCompleta: "Lun, 15/03/2024 - 09:30",
            archivos: [
                { nombre: "REGLAMENTO DE PROPIEDAD INTELECTUAL", size: "2.1 MB", type: "pdf" }
            ]
        },
        {
            titulo: "CÓDIGO DE ÉTICA PARA LA INVESTIGACIÓN",
            fechaCorta: "Enero 20, 2024",
            fechaCompleta: "Sáb, 20/01/2024 - 10:00",
            archivos: [
                { nombre: "CÓDIGO DE ÉTICA UNFAY", size: "0.85 MB", type: "pdf" }
            ]
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            {/* Header de Investigación */}
            <div style={{ marginBottom: '40px' }}>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '10px' }}>{t('page_research_title')}</h2>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>
                    Impulsando el conocimiento científico y la innovación tecnológica desde el Altiplano.
                </p>
            </div>

            {/* Líneas de Investigación */}
            <h3 style={{ borderLeft: '4px solid #004a80', paddingLeft: '15px', color: '#003f6f', marginBottom: '25px' }}>
                {language === 'es' ? 'Líneas de Investigación Prioritarias' : 'Priority Research Lines'}
            </h3>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                {lineasInvestigacion.map((linea, index) => (
                    <div className="card" key={index} style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                        <div style={{ height: '180px', overflow: 'hidden' }}>
                            <img src={`/investigacion_${index + 1}.jpg`} alt={linea.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="card-body" style={{ padding: '25px' }}>
                            <h4 style={{ color: '#003f6f', fontSize: '1.2rem', marginBottom: '12px' }}>{linea.titulo}</h4>
                            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{linea.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de Normatividad (Acordeón estilo solicitado) */}
            <div className="normatividad-section">
                <h3 style={{ borderLeft: '4px solid #004a80', paddingLeft: '15px', color: '#003f6f', marginBottom: '25px' }}>
                    {language === 'es' ? 'Normatividad y Reglamentos' : 'Regulations and Policies'}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {reglamentos.map((reg, idx) => (
                        <div key={idx} style={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid #d1e3f8',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                        }}>
                            {/* Barra de Título del Acordeón */}
                            <button
                                onClick={() => toggleAccordion(idx)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '15px 25px',
                                    background: openIndex === idx ? '#eef6ff' : '#f8fbff',
                                    color: '#004a80',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {reg.titulo}
                                <span style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}>
                                    {openIndex === idx ? '▲' : '▼'}
                                </span>
                            </button>

                            {/* Contenido Desplegable */}
                            {openIndex === idx && (
                                <div style={{
                                    padding: '30px 40px',
                                    background: 'white',
                                    animation: 'slideDown 0.3s ease-out'
                                }}>
                                    <h4 style={{ color: '#444', fontSize: '1.4rem', fontWeight: '800', marginBottom: '15px', textTransform: 'uppercase' }}>
                                        {reg.titulo}
                                    </h4>

                                    <p style={{ color: '#666', margin: '0 0 20px', fontSize: '0.9rem' }}>
                                        Fecha: <span style={{ color: '#333', fontWeight: '500' }}>{reg.fechaCorta}</span>
                                    </p>

                                    <div style={{ marginBottom: '25px' }}>
                                        <h5 style={{ color: '#004a80', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '10px' }}>DOCUMENTOS</h5>
                                        {reg.archivos.map((file, fidx) => (
                                            <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#005bb7', fontWeight: '500', fontSize: '0.95rem' }}>
                                                <img src="/pdf_icon.svg" style={{ width: '18px' }} alt="PDF" />
                                                <a href="#" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid transparent' }}>
                                                    {file.nombre} ({file.size})
                                                </a>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <h5 style={{ color: '#004a80', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '5px' }}>FECHA DE PUBLICACIÓN</h5>
                                        <p style={{ color: '#555', margin: 0, fontSize: '0.95rem' }}>{reg.fechaCompleta}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default Investigacion;
