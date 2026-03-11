import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const ConvocatoriasManager = () => {
    const { convocatorias, addItem, deleteItem, updateItem } = useAdminData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const [formData, setFormData] = useState({
        titulo: '', numero: '', fecha: new Date().toISOString().split('T')[0], base_url: '', modal_anexo_url: '', estado: 'VIGENTE', anexos: []
    });

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({ ...item, anexos: item.anexos || [] });
        } else {
            setEditingItem(null);
            setFormData({ titulo: '', numero: '', fecha: new Date().toISOString().split('T')[0], base_url: '', modal_anexo_url: '', estado: 'VIGENTE', anexos: [] });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.titulo) return alert('El título es obligatorio');
        if (editingItem) updateItem('convocatorias', editingItem.id, formData);
        else addItem('convocatorias', formData);
        setIsModalOpen(false);
    };

    const addAnexo = () => {
        setFormData({ ...formData, anexos: [...(formData.anexos || []), { id: Date.now(), titulo: '', url: '' }] });
    };

    const updateAnexo = (id, field, value) => {
        setFormData({ ...formData, anexos: formData.anexos.map(a => a.id === id ? { ...a, [field]: value } : a) });
    };

    const removeAnexo = (id) => {
        setFormData({ ...formData, anexos: formData.anexos.filter(a => a.id !== id) });
    };

    return (
        <div style={{ animation: 'none' }}>
            {/* Header Institucional */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005a9c" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h7"></path></svg>
                        Oportunidades Laborales / CAS
                    </h2>
                    <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Administración de procesos de selección y provisión de plazas.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    style={{
                        background: '#003f6f', color: 'white', border: '1px solid #002846', padding: '10px 20px', borderRadius: '4px',
                        fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                        display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'none'
                    }}
                    onMouseOver={e => e.currentTarget.style.background = '#002846'}
                    onMouseOut={e => e.currentTarget.style.background = '#003f6f'}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Aperturar Proceso
                </button>
            </div>

            {/* List Table Formal */}
            <div style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', boxShadow: 'none', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #cbd5e1' }}>
                        <tr>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '100px' }}>Referencia</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem' }}>Denominación del Cargo</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '150px' }}>Límite de Postulación</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '120px', textAlign: 'center' }}>Condición</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '100px', textAlign: 'right' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {convocatorias.map((item, index) => (
                            <tr key={item.id} style={{ borderBottom: index === convocatorias.length - 1 ? 'none' : '1px solid #e2e8f0', transition: 'background 0.2s', background: 'white' }} className="table-row">
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', color: '#003f6f', fontWeight: '700' }}>
                                    {item.numero || 'N/A'}
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '600', color: '#0f172a', maxWidth: '450px', lineHeight: '1.4' }}>{item.titulo}</div>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', color: '#475569', fontWeight: '600' }}>
                                    {item.fecha}
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', textAlign: 'center' }}>
                                    <span style={{
                                        display: 'inline-block', fontSize: '0.7rem', fontWeight: '700', padding: '4px 10px',
                                        borderRadius: '4px', border: '1px solid',
                                        background: item.estado === 'VIGENTE' ? '#d1fae5' : '#fee2e2',
                                        color: item.estado === 'VIGENTE' ? '#047857' : '#b91c1c',
                                        borderColor: item.estado === 'VIGENTE' ? '#a7f3d0' : '#fecaca'
                                    }}>{item.estado}</span>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                        <button onClick={() => openModal(item)} style={{ background: 'transparent', color: '#3b82f6', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Editar">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                                        </button>
                                        <button onClick={() => { if (window.confirm('¿Confirmar anulación del proceso?')) deleteItem('convocatorias', item.id) }} style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Eliminar">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Formal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', width: '90%', maxWidth: '600px', borderRadius: '6px', border: '1px solid #cbd5e1', boxShadow: 'none', animation: 'none' }}>
                        <div style={{ padding: '20px 25px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: '6px 6px 0 0' }}>
                            <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>{editingItem ? 'Modificación de Convocatoria' : 'Aperturar Nuevo Proceso de Selección'}</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>

                        <div style={{ padding: '25px', display: 'grid', gap: '15px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '15px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Código de Identificación</label>
                                    <input type="text" value={formData.numero} onChange={e => setFormData({ ...formData, numero: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Denominación del Cargo <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" value={formData.titulo} onChange={e => setFormData({ ...formData, titulo: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Fecha Límite</label>
                                    <input type="date" value={formData.fecha} onChange={e => setFormData({ ...formData, fecha: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Estado del Proceso</label>
                                    <select value={formData.estado} onChange={e => setFormData({ ...formData, estado: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal">
                                        <option>VIGENTE</option><option>FINALIZADO</option><option>CANCELADO</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Enlace de Postulación / Bases Generales</label>
                                <input type="url" value={formData.base_url} onChange={e => setFormData({ ...formData, base_url: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                            </div>

                            <div style={{ marginTop: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#1e293b', fontWeight: '700' }}>Anexos y Documentos Vinculados</h4>
                                        <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#64748b' }}>Agregue las bases, cronogramas y resultados del proceso.</p>
                                    </div>
                                    <button type="button" onClick={addAnexo} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#005a9c', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.background = '#f8fafc'}>+ Añadir Documento</button>
                                </div>

                                <div style={{ display: 'grid', gap: '10px', maxHeight: '250px', overflowY: 'auto', paddingRight: '5px' }}>
                                    {(formData.anexos || []).length === 0 && (
                                        <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', padding: '20px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px' }}>No hay documentos anexados todavía.</div>
                                    )}
                                    {(formData.anexos || []).map((anexo) => (
                                        <div key={anexo.id} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', background: '#f8fafc', padding: '15px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ flex: 1, display: 'grid', gap: '12px' }}>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>Denominación del Documento</label>
                                                    <input type="text" placeholder="Ej. Resultados de Evaluación Curricular" value={anexo.titulo} onChange={e => updateAnexo(anexo.id, 'titulo', e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} className="input-formal" />
                                                </div>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    <input type="text" placeholder="URL del archivo o nombre del PDF cargado" value={anexo.url} onChange={e => updateAnexo(anexo.id, 'url', e.target.value)} style={{ flex: 1, padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} className="input-formal" />
                                                    <label style={{ background: 'white', border: '1px solid #cbd5e1', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center' }}>
                                                        <input type="file" accept=".pdf,application/pdf" onChange={async (e) => {
                                                            if (e.target.files && e.target.files[0]) {
                                                                const file = e.target.files[0];
                                                                const uploadData = new FormData();
                                                                uploadData.append('archivo', file);
                                                                uploadData.append('type', 'convocatoria');

                                                                try {
                                                                    console.log("Subiendo archivo a: http://127.0.0.1:3000/api/upload");
                                                                    const res = await fetch('http://127.0.0.1:3000/api/upload', {
                                                                        method: 'POST',
                                                                        body: uploadData
                                                                    });
                                                                    console.log("Status de subida PDF:", res.status);
                                                                    if (res.ok) {
                                                                        const data = await res.json();
                                                                        updateAnexo(anexo.id, 'url', data.url);
                                                                    } else {
                                                                        alert("Error al subir PDF al servidor.");
                                                                    }
                                                                } catch (err) {
                                                                    console.error(err);
                                                                    alert("No se pudo conectar con el servidor de subidas.");
                                                                }
                                                            }
                                                        }} style={{ display: 'none' }} />
                                                        Cargar PDF...
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => removeAnexo(anexo.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', padding: '4px', cursor: 'pointer', alignSelf: 'center', transition: 'all 0.2s' }} className="action-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '15px 25px', display: 'flex', justifyContent: 'flex-end', gap: '15px', borderTop: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '0 0 6px 6px' }}>
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.background = 'white'}>Cancelar</button>
                            <button onClick={handleSave} style={{ background: '#003f6f', color: 'white', padding: '8px 24px', borderRadius: '4px', border: '1px solid #002846', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#002846'} onMouseOut={e => e.currentTarget.style.background = '#003f6f'}>Grabar Expediente</button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                .table-row:hover { background: #f8fafc !important; }
                .action-icon { opacity: 0.7; transition: opacity 0.2s; }
                .table-row:hover .action-icon { opacity: 1; }
                .action-icon:hover { transform: scale(1.1); }
                .input-formal:focus { border-color: #005a9c !important; box-shadow: none; }
            `}</style>
        </div>
    );
};

export default ConvocatoriasManager;
