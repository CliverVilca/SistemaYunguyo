import React, { useState } from 'react';

const Settings = () => {
    const [activeSection, setActiveSection] = useState('perfil');

    const menuItems = [
        { id: 'perfil', label: 'Datos del Usuario', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> },
        { id: 'institucion', label: 'Datos Institucionales', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> },
        { id: 'seguridad', label: 'Credenciales y Accesos', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> }
    ];

    return (
        <div style={{ animation: 'none' }}>
            {/* Header Institucional */}
            <div style={{ marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
                <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005a9c" strokeWidth="2.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09"></path></svg>
                    Configuración del Sistema
                </h2>
                <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Administre la metadata operativa y parámetros de acceso.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '30px' }}>
                {/* Navegación de Ajustes Formal */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            style={{
                                padding: '12px 16px',
                                border: '1px solid',
                                borderColor: activeSection === item.id ? '#cbd5e1' : 'transparent',
                                background: activeSection === item.id ? 'white' : 'transparent',
                                color: activeSection === item.id ? '#003f6f' : '#475569',
                                borderRadius: '4px',
                                textAlign: 'left',
                                fontSize: '0.85rem',
                                fontWeight: activeSection === item.id ? '700' : '600',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                transition: 'all 0.2s',
                                boxShadow: activeSection === item.id ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
                            }}
                            onMouseOver={e => { if (activeSection !== item.id) e.currentTarget.style.background = '#f1f5f9' }}
                            onMouseOut={e => { if (activeSection !== item.id) e.currentTarget.style.background = 'transparent' }}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Contenido de la Sección Formal */}
                <div style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '30px', minHeight: '400px', boxShadow: 'none' }}>
                    {activeSection === 'perfil' && (
                        <div style={{ animation: 'none' }}>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '25px' }}>
                                <h3 style={{ margin: '0 0 5px', color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>Atributos de Usuario</h3>
                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Revise los detalles vinculados a su sesión actual.</div>
                            </div>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Nombre Identificativo <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" defaultValue="Administrador" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Correo Electrónico (Contacto) <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" defaultValue="admin@unfay.edu.pe" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Facultad/Oficina Asignada</label>
                                    <input type="text" defaultValue="Gestión y Sistemas de Información" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'institucion' && (
                        <div style={{ animation: 'none' }}>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '25px' }}>
                                <h3 style={{ margin: '0 0 5px', color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>Información de Entidad</h3>
                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Variables globales que alimentan el repositorio público.</div>
                            </div>

                            <div style={{ display: 'grid', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Razón Social / Denominación</label>
                                    <input type="text" defaultValue="Universidad Nacional Fronteriza Autónoma de Yunguyo" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Dirección Fiscal/Legal</label>
                                    <input type="text" defaultValue="Sede Administrativa, Plaza Principal S/N, Yunguyo" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Central Telefónica</label>
                                        <input type="text" defaultValue="(051) 123456" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Módulo WhatsApp (Atención)</label>
                                        <input type="text" defaultValue="987 654 321" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none' }} className="input-formal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'seguridad' && (
                        <div style={{ animation: 'none' }}>
                            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '25px' }}>
                                <h3 style={{ margin: '0 0 5px', color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>Control de Credenciales</h3>
                                <div style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: '600' }}>Recomendamos actualizar sus claves cada 90 días.</div>
                            </div>

                            <div style={{ display: 'grid', gap: '20px', maxWidth: '500px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Contraseña Base Actual <span style={{ color: 'red' }}>*</span></label>
                                    <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none', letterSpacing: '2px' }} className="input-formal" />
                                </div>
                                <div style={{ background: '#f8fafc', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '4px', display: 'grid', gap: '15px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Establecer Nueva Contraseña</label>
                                        <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none', letterSpacing: '2px' }} className="input-formal" />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Verificación (Repita Contraseña)</label>
                                        <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', outline: 'none', letterSpacing: '2px' }} className="input-formal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'flex-end', borderTop: '2px solid #f1f5f9', paddingTop: '25px' }}>
                        <button style={{
                            background: '#003f6f', color: 'white', border: '1px solid #002846', padding: '10px 24px', borderRadius: '4px',
                            fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s', boxShadow: 'none'
                        }} onMouseOver={e => e.currentTarget.style.background = '#002846'} onMouseOut={e => e.currentTarget.style.background = '#003f6f'}>
                            Grabar Cambios Registrados
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                .input-formal:focus { border-color: #005a9c !important; box-shadow: none; }
            `}</style>
        </div>
    );
};

export default Settings;
