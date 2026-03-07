import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Rendicion = () => {
    const { language } = useLanguage();

    return (
        <div className="container" style={{ padding: '20px 0' }}>
            <section style={{ marginBottom: '50px' }}>
                <h2 className="section-title" style={{ borderLeft: '5px solid #004a80', paddingLeft: '15px' }}>
                    {language === 'es' ? 'Rendición de Cuentas' : 'Accountability'}
                </h2>

                <div style={{
                    background: '#fff',
                    padding: '40px',
                    borderRadius: '12px',
                    border: '1px solid #e9ecef',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}>
                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📊</div>
                    <h3 style={{ color: '#004a80', marginBottom: '15px' }}>
                        {language === 'es' ? 'Sección en Actualización' : 'Section Under Update'}
                    </h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 25px', color: '#666', lineHeight: '1.6' }}>
                        {language === 'es' ?
                            'En esta sección se publicarán los informes de ejecución presupuestal, gastos y balances anuales de la institución.' :
                            'In this section, the budget execution reports, expenses, and annual balances of the institution will be published.'}
                    </p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #eee', width: '200px' }}>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>{language === 'es' ? 'Último Informe' : 'Latest Report'}</div>
                            <div style={{ fontWeight: '700', color: '#333' }}>2025-II</div>
                        </div>
                        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #eee', width: '200px' }}>
                            <div style={{ fontSize: '0.8rem', color: '#888' }}>{language === 'es' ? 'Próximo Informe' : 'Next Report'}</div>
                            <div style={{ fontWeight: '700', color: '#333' }}>Abril 2026</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Rendicion;
