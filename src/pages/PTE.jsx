import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PTE = () => {
    const { t, language } = useLanguage();

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <section className="transparency-section">
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

export default PTE;
