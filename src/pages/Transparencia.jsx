import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

const Transparencia = () => {
    const { t, language } = useLanguage();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const documentos = [
        {
            nombre: language === 'es' ? "Estatuto Universitario" : "University Statutes",
            descripcion: language === 'es' ? "Normas fundamentales del funcionamiento de la UNFAY." : "Fundamental rules for UNFAY's operation.",
            formato: "PDF",
            fecha: "2024"
        },
        {
            nombre: "TUPA 2026",
            descripcion: language === 'es' ? "Texto Único de Procedimientos Administrativos." : "Single Text of Administrative Procedures.",
            formato: "PDF",
            fecha: "2026"
        },
        {
            nombre: language === 'es' ? "Plan Estratégico Institucional" : "Institutional Strategic Plan",
            descripcion: language === 'es' ? "Objetivos y metas para el desarrollo de la universidad." : "Goals and targets for the university's development.",
            formato: "PDF",
            fecha: "2025"
        }
    ];

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <section id="documentos-interes" style={{ marginBottom: '50px' }}>
                <h2 className="section-title" style={{ borderLeft: '5px solid #004a80', paddingLeft: '15px' }}>
                    {language === 'es' ? 'Documentos de Interés' : 'Documents of Interest'}
                </h2>
                <p style={{ color: '#666', marginBottom: '25px', fontSize: '0.9rem' }}>
                    {language === 'es' ?
                        'Accede a los principales documentos normativos y de gestión de la UNFAY.' :
                        'Access the main regulatory and management documents of UNFAY.'}
                </p>

                <div className="convocatoria-card">
                    <div className="table-responsive">
                        <table className="unfay-table">
                            <thead>
                                <tr>
                                    <th>{t('description')}</th>
                                    <th>{language === 'es' ? 'Año' : 'Year'}</th>
                                    <th>{t('process')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documentos.map((doc, idx) => (
                                    <tr key={idx}>
                                        <td>
                                            <div className="font-bold-table">{doc.nombre}</div>
                                            <div style={{ fontSize: '0.75rem', color: '#888' }}>{doc.descripcion}</div>
                                        </td>
                                        <td>{doc.fecha}</td>
                                        <td>
                                            <button className="btn-download btn-red">
                                                <span style={{ fontSize: '1rem' }}>📥</span> {doc.formato}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '40px 0' }} />

            <section className="transparency-section" id="pte-estandar">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                    <div style={{ background: '#f0f4f8', padding: '15px', borderRadius: '12px' }}>
                        <img src="/logo_pte.png" alt="PTE Logo" style={{ height: '60px' }} />
                    </div>
                    <div>
                        <h2 className="section-title" style={{ margin: 0, textAlign: 'left', fontSize: '1.4rem' }}>{t('page_transparency_title')}</h2>
                        <p style={{ color: '#666', margin: '5px 0 0', fontSize: '0.85rem' }}>
                            {language === 'es' ?
                                'Portal de Transparencia Estándar (Acceso al Estado Peruano).' :
                                'Standard Transparency Portal (Access to the Peruvian State).'}
                        </p>
                    </div>
                </div>

                <div style={{
                    background: '#fff',
                    padding: '30px',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏛️</div>
                    <h3 style={{ color: '#004a80', marginBottom: '10px' }}>
                        {language === 'es' ? 'Portal en Construcción' : 'Portal Under Construction'}
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 20px', color: '#666', lineHeight: '1.5', fontSize: '0.9rem' }}>
                        {language === 'es' ?
                            'Estamos integrando la información administrativa conforme a la Ley de Transparencia. Mientras tanto, puedes acceder al portal nacional.' :
                            'We are integrating administrative information in accordance with the Law on Transparency. In the meantime, you can access the national portal.'}
                    </p>
                    <a href="https://www.transparencia.gob.pe" target="_blank" rel="noopener noreferrer" className="btn-download btn-blue" style={{ textDecoration: 'none' }}>
                        {language === 'es' ? 'ABRIR PORTAL NACIONAL ➔' : 'OPEN NATIONAL PORTAL ➔'}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Transparencia;
