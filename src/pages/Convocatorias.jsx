import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';
import EmptyStateMessage from '../components/EmptyStateMessage';

const Convocatorias = () => {
    const { t } = useLanguage();
    const { convocatorias } = useAdminData();
    const [selectedId, setSelectedId] = useState(null);

    const selected = convocatorias.find(c => c.id.toString() === selectedId?.toString());

    // SVG para el icono de PDF
    const PdfIcon = () => (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
    );

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '8px 0 20px' }}>

                <div style={{ marginBottom: '12px', borderBottom: '2.5px solid #003f6f', paddingBottom: '4px' }}>
                    <h2 style={{ fontSize: '1.25rem', color: '#003f6f', fontWeight: '950', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.3px' }}>
                        PORTAL DE CONVOCATORIAS
                    </h2>
                </div>

                {!selectedId ? (
                    <div style={{ animation: 'fadeIn 0.2s ease' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {convocatorias.map((conv) => (
                                <div
                                    key={conv.id}
                                    onClick={() => setSelectedId(conv.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '10px 18px',
                                        background: '#fff',
                                        border: '1px solid #e2e8f0',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                    className="conv-item-mini"
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{
                                            background: conv.colorEstado || '#003f6f',
                                            color: 'white',
                                            fontSize: '0.6rem',
                                            fontWeight: '900',
                                            padding: '3px 8px',
                                            borderRadius: '3px',
                                            minWidth: '78px',
                                            textAlign: 'center',
                                            textTransform: 'uppercase'
                                        }}>
                                            {conv.estado}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.62rem', fontWeight: '900', color: '#00aaff', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                                                {conv.tipo}
                                            </div>
                                            <h3 style={{ fontSize: '1.1rem', color: '#003f6f', margin: '1px 0', fontWeight: '850', lineHeight: '1' }}>{conv.titulo}</h3>
                                            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>{conv.descripcion}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="action-text">
                                        <span style={{ fontSize: '0.7rem', fontWeight: '900', color: '#94a3b8' }}>VER DETALLE</span>
                                        <span style={{ color: '#00aaff', fontWeight: '900', fontSize: '1rem' }}>➔</span>
                                    </div>
                                </div>
                            ))}
                            {convocatorias.length === 0 && (
                                <div style={{ borderTop: 'none', paddingTop: '10px' }}>
                                    <EmptyStateMessage
                                        message="Sin Convocatorias Activas"
                                        subtitle="En este momento no existen procesos de selección CAS vigentes. Le sugerimos revisar frecuentemente este portal oficial."
                                        icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ) : selected && (
                    <div style={{ animation: 'fadeIn 0.2s ease' }}>
                        <button
                            onClick={() => setSelectedId(null)}
                            style={{
                                background: 'transparent',
                                border: '1px solid #e2e8f0',
                                color: '#64748b',
                                fontWeight: '900',
                                cursor: 'pointer',
                                marginBottom: '10px',
                                fontSize: '0.6rem',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                textTransform: 'uppercase'
                            }}
                        >
                            ← VOLVER
                        </button>

                        <div style={{
                            background: '#fff',
                            padding: '12px 18px',
                            borderRadius: '8px',
                            border: '1px solid #e2e8f0',
                            marginBottom: '15px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '15px',
                                right: '18px',
                                background: selected.colorEstado || '#003f6f',
                                color: 'white',
                                padding: '3px 10px',
                                borderRadius: '4px',
                                fontSize: '0.65rem',
                                fontWeight: '900',
                                textTransform: 'uppercase'
                            }}>
                                {selected.estado}
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <div style={{ fontSize: '0.6rem', color: '#00aaff', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                                    {selected.tipo}
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: '#003f6f', fontWeight: '950', margin: '0', lineHeight: '1' }}>
                                    {selected.titulo}
                                </h2>
                                <p style={{ fontSize: '0.9rem', color: '#444', fontWeight: '600', margin: '4px 0 0' }}>{selected.descripcion}</p>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: '35px',
                                borderTop: '1.5px solid #f1f5f9',
                                paddingTop: '10px'
                            }}>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.62rem', color: '#94a3b8', fontWeight: '900' }}>INICIO POSTULACIÓN</span>
                                    <span style={{ fontSize: '1.1rem', color: '#003f6f', fontWeight: '900' }}>{selected.inicioPostulacion}</span>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '0.62rem', color: '#94a3b8', fontWeight: '900' }}>CIERRE POSTULACIÓN</span>
                                    <span style={{ fontSize: '1.1rem', color: '#c62828', fontWeight: '950' }}>{selected.finPostulacion || 'Pendiente'}</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ borderBottom: '1.5px solid #003f6f', marginBottom: '8px', paddingBottom: '4px' }}>
                            <h3 style={{ fontSize: '0.8rem', color: '#003f6f', fontWeight: '900', margin: 0, textTransform: 'uppercase' }}>
                                DOCUMENTOS DEL PROCESO
                            </h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', background: '#e2e8f0', gap: '1px', borderRadius: '6px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                            {(selected.documentos || []).map((doc) => (
                                <div key={doc.id} style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 160px',
                                    alignItems: 'center',
                                    padding: '8px 15px',
                                    background: '#fff',
                                }}>
                                    <div>
                                        <div style={{ fontWeight: '800', color: '#003f6f', fontSize: '0.92rem', lineHeight: '1.2' }}>{doc.nombre}</div>
                                        <div style={{ fontSize: '0.62rem', color: '#94a3b8', fontWeight: '700' }}>PUBLICADO: {doc.fecha}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <button style={{
                                            background: `linear-gradient(to bottom, #005a9c, #003f6f)`,
                                            color: 'white',
                                            border: 'none',
                                            padding: '6px 14px',
                                            borderRadius: '4px',
                                            fontWeight: '900',
                                            fontSize: '0.65rem',
                                            cursor: 'pointer',
                                            textTransform: 'uppercase',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                        }}>
                                            <PdfIcon />
                                            DESCARGAR
                                        </button>
                                    </div>
                                </div>
                            ))}
                            {(!selected.documentos || selected.documentos.length === 0) && <p style={{ padding: '20px', background: 'white', color: '#666', fontSize: '0.8rem' }}>No hay documentos publicados para este proceso.</p>}
                        </div>
                    </div>
                )}
            </div>
            <style>{`
                .conv-item-mini:hover { border-color: #00aaff; background: #f8fbff; transform: translateY(-1px); }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
        </div>
    );
};

export default Convocatorias;
