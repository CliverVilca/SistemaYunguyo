import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Convocatorias = () => {
    const { t, language } = useLanguage();
    const convocatoriasData = [
        { title: "ANEXOS 01 Y 02", process: "CAS TRANSITORIO N° 01-2026", type: "pdf" },
        { title: "ANEXO 03", process: "CAS TRANSITORIO N° 01-2026", type: "blue" },
        { title: "BASES CAS N°001-2026-UNFAY", process: "CAS TRANSITORIO N° 01-2026", type: "pdf" },
        { title: "RESULTADOS DE EVALUACION CURRICULAR CAS N°001-2026-UNFAY PUB: 26-02-2026", process: "CAS TRANSITORIO N° 01-2026", type: "pdf" },
        { title: "CRONOGRAMA DE ENTREVISTA PERSONAL CAS N°001-2026-UNFAY PUB: 27-02-2026", process: "CAS TRANSITORIO N° 01-2026", type: "pdf" },
        { title: "RESULTADO FINAL CAS N°001-2026-UNFAY PUB: 02-03-2026", process: "CAS TRANSITORIO N° 01-2026", type: "pdf" },
    ];

    return (
        <div className="container" style={{ padding: '10px 0' }}>
            <div className="convocatoria-card">
                <h2 className="section-title">{t('page_calls_title')}</h2>
                <p style={{ color: '#666', fontSize: '0.8rem', marginBottom: '15px' }}>
                    {language === 'es' ?
                        'CONVOCATORIA PARA CONTRATACIÓN ADMINISTRATIVA DE SERVICIOS - CAS' :
                        'CALL FOR ADMINISTRATIVE SERVICE CONTRACTING - CAS'}
                </p>

                <div className="table-responsive">
                    <table className="unfay-table">
                        <thead>
                            <tr>
                                <th>{t('description').toUpperCase()}</th>
                                <th>{t('process').toUpperCase()}</th>
                                <th style={{ textAlign: 'center' }}>{t('download').toUpperCase()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {convocatoriasData.map((item, index) => (
                                <tr key={index}>
                                    <td className="font-bold-table">{item.title}</td>
                                    <td style={{ opacity: 0.7 }}>{item.process}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button className={`btn-download ${item.type === 'blue' ? 'btn-blue' : 'btn-red'}`}>
                                            <img
                                                src={item.type === 'blue' ? '/word_icon.svg' : '/pdf_icon.svg'}
                                                alt=""
                                                style={{ width: '18px', height: '18px' }}
                                            />
                                            {t('download')}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Convocatorias;
