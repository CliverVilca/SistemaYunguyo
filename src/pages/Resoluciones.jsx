import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const Resoluciones = () => {
    const { documents } = useAdminData();
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar solo resoluciones
    const resolucionesData = documents.filter(doc => doc.isResolution);

    const filtrados = resolucionesData.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (doc.number && doc.number.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '10px 0 40px' }}>

                <div style={{ marginBottom: '15px', borderBottom: '2px solid #003f6f', paddingBottom: '5px' }}>
                    <h2 style={{ fontSize: '1.4rem', color: '#003f6f', fontWeight: '950', margin: 0, textTransform: 'uppercase' }}>
                        RESOLUCIONES UNIVERSITARIAS
                    </h2>
                </div>

                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ position: 'relative', flex: 1, maxWidth: '500px' }}>
                        <input
                            type="text"
                            placeholder="Buscar por número o palabra clave..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                padding: '8px 15px',
                                width: '100%',
                                borderRadius: '6px',
                                border: '1px solid #e2e8f0',
                                background: '#f8fafc',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                outline: 'none',
                                transition: 'all 0.2s'
                            }}
                        />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '700' }}>
                        Mostrando {filtrados.length} resultados
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#e2e8f0', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 180px 1fr 120px 130px', gap: '15px', padding: '10px 15px', background: '#f1f5f9', fontSize: '0.7rem', fontWeight: '900', color: '#475569', textTransform: 'uppercase' }}>
                        <span>N° Registro</span>
                        <span>Código Resolución</span>
                        <span>Asunto / Descripción</span>
                        <span style={{ textAlign: 'center' }}>Fecha Pub.</span>
                        <span style={{ textAlign: 'center' }}>Documento</span>
                    </div>

                    {filtrados.map((doc, idx) => (
                        <div key={doc.id} style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 180px 1fr 120px 130px',
                            gap: '15px',
                            padding: '12px 15px',
                            background: '#fff',
                            alignItems: 'center',
                            transition: 'background 0.2s'
                        }} className="res-row-hover">
                            <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#94a3b8' }}>#{idx + 1}</span>
                            <span style={{ fontSize: '0.85rem', fontWeight: '900', color: '#003f6f' }}>{doc.number || 'S/N'}</span>
                            <div>
                                <div style={{ fontSize: '0.6rem', fontWeight: '900', color: '#00aaff', marginBottom: '2px' }}>{doc.category}</div>
                                <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: '650', lineHeight: '1.2' }}>{doc.title}</div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '700', textAlign: 'center' }}>{doc.date}</span>
                            <div style={{ textAlign: 'center' }}>
                                <button style={{
                                    background: '#c62828', color: 'white', border: 'none', padding: '5px 12px', borderRadius: '4px', fontWeight: '900', fontSize: '0.65rem', cursor: 'pointer', textTransform: 'uppercase'
                                }}>Descargar PDF</button>
                            </div>
                        </div>
                    ))}

                    {filtrados.length === 0 && (
                        <div style={{ padding: '40px', background: '#fff', textAlign: 'center', color: '#b91c1c', fontWeight: '800' }}>
                            No se encontraron resoluciones disponibles.
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .res-row-hover:hover { background-color: #f8fbff !important; }
            `}</style>
        </div>
    );
};

export default Resoluciones;
