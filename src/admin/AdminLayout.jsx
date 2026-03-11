import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        {
            path: '/admin/dashboard', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
            ), label: 'Panel General'
        },
        {
            path: '/admin/noticias', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l4 4v10a2 2 0 0 1-2 2z"></path><polyline points="14 4 14 8 18 8"></polyline><line x1="7" y1="13" x2="17" y2="13"></line><line x1="7" y1="17" x2="17" y2="17"></line></svg>
            ), label: 'Noticias'
        },
        {
            path: '/admin/eventos', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ), label: 'Eventos'
        },
        {
            path: '/admin/documentos', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            ), label: 'Documentos'
        },
        {
            path: '/admin/convocatorias', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h7"></path></svg>
            ), label: 'Convocatorias'
        },
        {
            path: '/admin/carreras', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            ), label: 'Oferta Académica'
        },
        {
            path: '/admin/ajustes', icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09"></path></svg>
            ), label: 'Ajustes'
        },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', color: '#1e293b' }}>
            {/* Sidebar Institucional Soberbio */}
            <div style={{
                width: collapsed ? '70px' : '260px',
                background: '#002846', // Azul muy oscuro, casi navy institucional
                color: 'white',
                transition: 'all 0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                position: 'fixed',
                height: '100vh',
                zIndex: 100,
                borderRight: '1px solid rgba(255,255,255,0.05)'
            }}>
                {/* Brand Area */}
                <div style={{
                    padding: '25px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    gap: '12px',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '15px'
                }}>
                    <div style={{
                        width: '32px', height: '32px', background: 'white',
                        borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: 'none'
                    }}>
                        <img src="/logo_unfay.png" alt="U" style={{ width: '22px' }} />
                    </div>
                    {!collapsed && (
                        <div style={{ animation: 'none' }}>
                            <div style={{ fontWeight: '800', fontSize: '1.05rem', letterSpacing: '-0.2px', lineHeight: '1.2' }}>UNFAY</div>
                            <div style={{ fontWeight: '600', fontSize: '0.65rem', color: '#60a5fa', letterSpacing: '1px', textTransform: 'uppercase' }}>Sistema de Gestión</div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav style={{ flex: 1, padding: '0 15px' }}>
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link key={item.path} to={item.path} style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 14px',
                                textDecoration: 'none',
                                color: isActive ? '#fff' : '#94a3b8',
                                background: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                                borderRadius: '6px',
                                marginBottom: '4px',
                                transition: 'all 0.2s ease',
                                borderLeft: isActive ? '3px solid #60a5fa' : '3px solid transparent',
                                justifyContent: collapsed ? 'center' : 'flex-start',
                            }} className="sidebar-link-formal">
                                <span style={{
                                    display: 'flex', alignItems: 'center', color: isActive ? '#60a5fa' : 'inherit',
                                    opacity: isActive ? 1 : 0.8
                                }} className="icon-container-formal">{item.icon}</span>
                                {!collapsed && <span style={{ fontSize: '0.85rem', fontWeight: isActive ? '700' : '500', marginLeft: '12px', letterSpacing: '0.2px' }}>{item.label}</span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Collapse Toggle */}
                <div
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        margin: '15px', padding: '12px', background: 'rgba(0,0,0,0.15)', borderTop: '1px solid rgba(255,255,255,0.05)',
                        cursor: 'pointer', textAlign: 'center', color: '#94a3b8', fontWeight: '600', fontSize: '0.7rem',
                        letterSpacing: '0.5px'
                    }}>
                    {collapsed ? '→' : 'Contraer Menú'}
                </div>
            </div>

            {/* Main Area */}
            <div style={{
                marginLeft: collapsed ? '70px' : '260px',
                flex: 1,
                transition: 'all 0.4s ease-in-out',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Header Formal Institucional */}
                <header style={{
                    height: '60px',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '0 40px',
                    position: 'sticky',
                    top: 0,
                    zIndex: 90,
                    borderBottom: '1px solid #e2e8f0',
                    boxShadow: 'none'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>Administrador del Sistema</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '500', color: '#64748b' }}>Oficina de Tecnologías (OTIC)</span>
                        </div>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#003f6f', border: '1px solid #cbd5e1'
                        }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>

                        <div style={{ height: '30px', width: '1px', background: '#e2e8f0', margin: '0 5px' }}></div>

                        <button onClick={() => navigate('/admin/login')} style={{
                            background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.2s'
                        }} onMouseOver={e => e.currentTarget.style.color = '#ef4444'} onMouseOut={e => e.currentTarget.style.color = '#64748b'}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            Salir
                        </button>
                    </div>
                </header>

                <main style={{ padding: '40px', maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
                    {children}
                </main>
            </div>

            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                .sidebar-link-formal:hover { background: rgba(255,255,255,0.05) !important; color: white !important; }
            `}</style>
        </div>
    );
};

export default AdminLayout;
