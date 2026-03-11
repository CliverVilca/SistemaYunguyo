import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const DocumentosInteres = () => {
    const { language } = useLanguage();

    const documentos = [
        {
            id: 1,
            titulo: "Cuadro multianual de necesidades",
            link: "#"
        },
        {
            id: 2,
            titulo: "Primera modificación del cuadro multianual de necesidades",
            link: "#"
        }
    ];

    return (
        <div style={{
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            backgroundImage: 'radial-gradient(#0041700a 1px, transparent 0)',
            backgroundSize: '24px 24px'
        }}>
            <div className="container" style={{ padding: '20px 0 40px' }}>
                <div style={{ marginBottom: '35px' }}>
                    <h2 style={{
                        fontSize: '1.4rem',
                        color: '#333',
                        fontWeight: '600',
                        lineHeight: '1.4',
                        marginBottom: '40px'
                    }}>
                        Documentos de interes publico emitido por la Universidad Nacional Fronteriza Autonoma de Yunguyo
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {documentos.map((doc) => (
                            <div key={doc.id} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '20px',
                                paddingRight: '10%'
                            }}>
                                <span style={{
                                    fontSize: '1.2rem',
                                    color: '#444',
                                    fontWeight: '500'
                                }}>
                                    {doc.titulo}
                                </span>

                                <button style={{
                                    backgroundColor: '#2c3e50',
                                    color: 'white',
                                    padding: '12px 25px',
                                    borderRadius: '8px',
                                    border: '3px solid #c62828',
                                    fontWeight: '750',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.2s ease',
                                    whiteSpace: 'nowrap'
                                }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
                                    Descargar PDF
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentosInteres;
