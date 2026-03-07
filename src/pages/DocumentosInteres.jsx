import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DocumentosInteres = () => {
    const { t, language } = useLanguage();

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
            <section style={{ marginBottom: '50px' }}>
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
        </div>
    );
};

export default DocumentosInteres;
