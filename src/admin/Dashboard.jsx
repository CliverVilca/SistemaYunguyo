import React from 'react';
import { useAdminData } from '../context/AdminDataContext';

const Dashboard = () => {
    const { news, convocatorias, careers, documents } = useAdminData();

    const stats = [
        { label: 'Noticias Activas', value: news.filter(n => n.type === 'noticia').length, icon: '📰' },
        { label: 'Eventos Pendientes', value: news.filter(n => n.type === 'evento').length, icon: '📅' },
        { label: 'Oportunidades Laborales', value: convocatorias.filter(c => c.estado === 'VIGENTE').length, icon: '📁' },
        { label: 'Programas de Estudio', value: careers.length, icon: '🎓' },
    ];

    return (
        <div style={{ animation: 'none' }}>
            <div style={{ marginBottom: '35px', borderBottom: '2px solid #eef2f6', paddingBottom: '15px' }}>
                <h1 style={{ margin: 0, fontSize: '1.6rem', fontWeight: '800', color: '#1e293b', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#003f6f" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    Panel de Control General
                </h1>
                <p style={{ margin: '8px 0 0', color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>Resumen operativo de la plataforma institucional de la UNFAY.</p>
            </div>

            {/* Stats Grid Formal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '35px' }}>
                {stats.map((stat, index) => (
                    <div key={index} style={{
                        background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px',
                        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
                        boxShadow: 'none', transition: 'transform 0.2s', borderLeft: '4px solid #003f6f'
                    }} className="formal-card">
                        <div>
                            <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>{stat.label}</div>
                            <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e293b', lineHeight: '1' }}>{stat.value}</div>
                        </div>
                        <div style={{ fontSize: '1.5rem', opacity: 0.8, filter: 'grayscale(0.5)' }}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px' }}>
                {/* Contenido Reciente Formal */}
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '25px', boxShadow: 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>Registro de Actividad Reciente</h3>
                        <a href="#" style={{ color: '#005a9c', fontWeight: '600', fontSize: '0.8rem', textDecoration: 'none' }}>Ver histórico completo →</a>
                    </div>
                    <div style={{ display: 'grid', gap: '12px' }}>
                        {news.slice(0, 4).map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 15px',
                                background: idx % 2 === 0 ? '#f8fafc' : 'white', border: '1px solid #f1f5f9', borderRadius: '6px'
                            }}>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600', minWidth: '85px' }}>{item.date}</div>
                                <div style={{ flex: 1, borderLeft: '1px solid #e2e8f0', paddingLeft: '15px' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>{item.title}</div>
                                </div>
                                <div style={{
                                    padding: '4px 10px', borderRadius: '4px', background: '#e0e7ff', color: '#4338ca',
                                    fontWeight: '700', fontSize: '0.7rem', textTransform: 'uppercase'
                                }}>
                                    {item.type}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Accesos y Estado Institucional */}
                <div style={{ display: 'grid', gap: '20px' }}>
                    <div style={{
                        background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '20px',
                        boxShadow: 'none'
                    }}>
                        <h3 style={{ margin: '0 0 15px', fontSize: '1rem', fontWeight: '700', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#003f6f" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            Estado Operativo
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: 'none' }}></div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '0.85rem', color: '#047857' }}>Servicios en Línea</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>Actualizado hoy, 08:00 AM</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#002846', color: 'white', border: '1px solid #001529', borderRadius: '8px', padding: '20px' }}>
                        <h3 style={{ margin: '0 0 10px', fontSize: '1rem', fontWeight: '700' }}>Directorio de Soporte</h3>
                        <p style={{ opacity: 0.8, fontSize: '0.85rem', lineHeight: '1.4', marginBottom: '20px' }}>Para requerimientos de sistemas o acceso a módulos, contacte a la OTIC.</p>
                        <button style={{
                            width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                            color: 'white', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s', fontSize: '0.85rem'
                        }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                            Generar Ticket (Mesa de Ayuda)
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .formal-card:hover { transform: translateY(-2px); box-shadow: none; }
            `}</style>
        </div>
    );
};

export default Dashboard;
