import React from 'react';
import { useAdminData } from '../context/AdminDataContext';

const Carreras = () => {
    const { careers } = useAdminData();

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '10px 0 50px' }}>
            <div className="container">
                {/* Header */}
                <div style={{ marginBottom: '25px', borderBottom: '3px solid #003f6f', paddingBottom: '10px' }}>
                    <h2 style={{ fontSize: '1.8rem', color: '#003f6f', fontWeight: '950', margin: 0 }}>OFERTA ACADÉMICA</h2>
                    <p style={{ margin: '5px 0 0', color: '#64748b', fontWeight: '600' }}>Formando los profesionales líderes de la zona de frontera.</p>
                </div>

                {/* Grid de Carreras */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                    {careers.map((career) => (
                        <div key={career.id} className="career-card-premium" style={{
                            background: '#fff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                        }}>
                            <div style={{ height: '8px', background: '#003f6f' }}></div>
                            <div style={{ padding: '25px', flex: 1 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{career.icon || '🎓'}</div>
                                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: '#00aaff', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>
                                    {career.faculty}
                                </div>
                                <h3 style={{ fontSize: '1.4rem', color: '#003f6f', fontWeight: '900', margin: '0 0 10px', lineHeight: '1.2' }}>
                                    {career.name}
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.5', margin: '0 0 20px' }}>
                                    {career.degree}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '15px', borderTop: '1px solid #f1f5f9' }}>
                                    <div>
                                        <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '800' }}>DURACIÓN</div>
                                        <div style={{ fontSize: '0.9rem', color: '#003f6f', fontWeight: '800' }}>{career.duration}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '0.6rem', color: '#94a3b8', fontWeight: '800' }}>ESTADO</div>
                                        <div style={{ fontSize: '0.9rem', color: '#38a169', fontWeight: '800' }}>{career.status}</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: '0 25px 25px' }}>
                                <button style={{
                                    width: '100%',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #003f6f',
                                    background: 'transparent',
                                    color: '#003f6f',
                                    fontWeight: '800',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }} onMouseOver={e => { e.target.style.background = '#003f6f'; e.target.style.color = 'white' }} onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = '#003f6f' }}>
                                    VER PLAN DE ESTUDIOS ➔
                                </button>
                            </div>
                        </div>
                    ))}
                    {careers.length === 0 && <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '50px', color: '#666' }}>No hay carreras registradas actualmente.</p>}
                </div>
            </div>

            <style>{`
                .career-card-premium:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0,63,111,0.08) !important;
                    border-color: #003f6f;
                }
            `}</style>
        </div>
    );
};

export default Carreras;
