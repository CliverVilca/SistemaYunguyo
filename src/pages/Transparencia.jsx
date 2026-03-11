import React, { useState } from 'react';

const Transparencia = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Datos unificados: Resoluciones, Reglamentos y otros documentos de gestión
    const todosLosDocumentos = [
        {
            id: 1,
            tipo: "REGLAMENTOS",
            numero: "R.R 0015-2026-R-UNFAY",
            titulo: "REGLAMENTO PARA LA DISTRIBUCIÓN DE LA CARGA ACADÉMICA DOCENTE DE LA UNFAY 2026",
            fechaPub: "23/02/2026",
            publicadoPor: "VICERRECTORADO ACADÉMICO",
            estado: "VIGENTE",
            colorEstado: "#2962ff"
        },
        {
            id: 2,
            tipo: "OTROS",
            numero: "R.R-0703-2025-R-UNFAY",
            titulo: "PROCESO OPERATIVO: SEGUIMIENTO AL ESTUDIANTE",
            fechaPub: "16/10/2025",
            publicadoPor: "DIRECCIÓN GESTIÓN ACADÉMICA",
            estado: "VIGENTE",
            colorEstado: "#2962ff"
        },
        {
            id: 3,
            tipo: "RESOLUCIONES",
            numero: "R.R-0279-2025-R-UNFAY",
            titulo: "REPROGRAMACIÓN DE ACTIVIDADES ACADÉMICAS 2025 SEMESTRES ACADÉMICOS I Y II",
            fechaPub: "16/10/2025",
            publicadoPor: "VICERRECTORADO ACADÉMICO",
            estado: "VIGENTE",
            colorEstado: "#2962ff"
        },
        {
            id: 4,
            tipo: "REGLAMENTOS",
            numero: "R.R 1240-2024-R-UNFAY",
            titulo: "REGLAMENTO DE CONVALIDACIONES DE COMPONENTES CURRICULARES 2024 UNFAY PUNO",
            fechaPub: "10/05/2024",
            publicadoPor: "VICERRECTORADO ACADÉMICO",
            estado: "VIGENTE",
            colorEstado: "#2962ff"
        },
        {
            id: 5,
            tipo: "GESTIÓN",
            numero: "CMN-2026-UNFAY",
            titulo: "CUADRO MULTIANUAL DE NECESIDADES (CMN) 2026-2028",
            fechaPub: "15-01-2026",
            publicadoPor: "DIRECCIÓN DE LOGÍSTICA",
            estado: "VIGENTE",
            colorEstado: "#2962ff"
        }
    ];

    const documentosFiltrados = todosLosDocumentos.filter(doc =>
        doc.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container" style={{ padding: '10px 0 40px' }}>
            {/* Banner Superior Ultra-Optimizado */}
            <div style={{
                background: 'linear-gradient(to right, #003f6f, #005a9c)',
                color: 'white',
                padding: '10px 25px',
                borderRadius: '40px',
                textAlign: 'center',
                marginBottom: '20px',
                boxShadow: '0 10px 25px rgba(0,63,111,0.15)',
                textTransform: 'uppercase',
                fontWeight: '900',
                letterSpacing: '1.5px',
                fontSize: '1.1rem'
            }}>
                Documentos de Gestión
            </div>

            {/* Fila de Búsqueda Compacta */}
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <label style={{ fontSize: '0.85rem', color: '#003f6f', fontWeight: '800', whiteSpace: 'nowrap' }}>FILTRAR DOCUMENTOS:</label>
                <input
                    type="text"
                    placeholder="Escriba el nombre, número o tipo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        flex: '1',
                        maxWidth: '500px',
                        padding: '8px 15px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        outline: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#00aaff'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
            </div>

            {/* Tabla Principal Refinada */}
            <div className="table-responsive" style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <table className="portal-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#005a9c', color: 'white' }}>
                        <tr>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Ord.</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Tipo</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Número</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase', textAlign: 'left' }}>Título del Documento</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Publicación</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>PDF</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Área Responsable</th>
                            <th style={{ padding: '10px 8px', fontSize: '0.7rem', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>Estado</th>
                        </tr>
                    </thead>
                    <tbody style={{ background: 'white' }}>
                        {documentosFiltrados.map((doc, idx) => (
                            <tr key={doc.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background 0.2s' }}>
                                <td style={{ padding: '8px', fontSize: '0.75rem', textAlign: 'center', color: '#94a3b8', fontWeight: 'bold' }}>{idx + 1}</td>
                                <td style={{ padding: '8px' }}>
                                    <span style={{ fontSize: '0.65rem', background: '#f1f5f9', padding: '3px 8px', borderRadius: '4px', color: '#475569', fontWeight: '800' }}>{doc.tipo}</span>
                                </td>
                                <td style={{ padding: '8px', fontSize: '0.7rem', color: '#1e293b', fontWeight: '700' }}>{doc.numero}</td>
                                <td style={{ padding: '8px', fontSize: '0.85rem', color: '#0f172a', fontWeight: '500', lineHeight: '1.3', maxWidth: '400px' }}>{doc.titulo}</td>
                                <td style={{ padding: '8px', fontSize: '0.75rem', textAlign: 'center', color: '#64748b' }}>{doc.fechaPub}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>
                                    <a href="#" className="pdf-icon-btn">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF" style={{ width: '22px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                                    </a>
                                </td>
                                <td style={{ padding: '8px', fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>{doc.publicadoPor}</td>
                                <td style={{ padding: '8px', textAlign: 'center' }}>
                                    <span style={{
                                        background: doc.colorEstado,
                                        color: 'white',
                                        fontSize: '0.6rem',
                                        padding: '3px 10px',
                                        borderRadius: '6px',
                                        fontWeight: '900',
                                        letterSpacing: '0.3px'
                                    }}>
                                        {doc.estado}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style>{`
                .portal-table tr:hover { background-color: #f8fafc !important; }
                .pdf-icon-btn:hover img { transform: scale(1.1); transition: transform 0.2s; }
            `}</style>
        </div>
    );
};

export default Transparencia;
