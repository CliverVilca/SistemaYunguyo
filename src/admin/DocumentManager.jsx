import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const DocumentManager = () => {
    const { documents, addItem, deleteItem, updateItem } = useAdminData();
    const [activeTab, setActiveTab] = useState('docs');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const filteredDocs = documents.filter(doc => activeTab === 'resolutions' ? doc.isResolution : !doc.isResolution);

    const [formData, setFormData] = useState({
        title: '', version: '', date: new Date().toISOString().split('T')[0], category: 'General', number: '', anexos: []
    });

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({ ...item });
        } else {
            setEditingItem(null);
            setFormData({ title: '', version: '', date: new Date().toISOString().split('T')[0], category: 'General', number: '', anexos: [] });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.title) return alert('El título es obligatorio');
        const data = { ...formData, isResolution: activeTab === 'resolutions' };
        if (editingItem) updateItem('documents', editingItem.id, data);
        else addItem('documents', data);
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
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005a9c" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        Repositorio y Gestión Documental
                    </h2>
                    <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Directiva y archivo central de resoluciones y normativas.</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    {/* Tab Selector Formal */}
                    <div style={{ display: 'flex', background: '#f1f5f9', padding: '4px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                        <button onClick={() => setActiveTab('docs')} style={{
                            padding: '6px 15px', borderRadius: '2px', border: 'none', cursor: 'pointer',
                            background: activeTab === 'docs' ? 'white' : 'transparent',
                            color: activeTab === 'docs' ? '#0f172a' : '#64748b',
                            fontWeight: '600', transition: 'all 0.2s', fontSize: '0.8rem',
                            boxShadow: activeTab === 'docs' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                        }}>Normativas</button>
                        <button onClick={() => setActiveTab('resolutions')} style={{
                            padding: '6px 15px', borderRadius: '2px', border: 'none', cursor: 'pointer',
                            background: activeTab === 'resolutions' ? 'white' : 'transparent',
                            color: activeTab === 'resolutions' ? '#0f172a' : '#64748b',
                            fontWeight: '600', transition: 'all 0.2s', fontSize: '0.8rem',
                            boxShadow: activeTab === 'resolutions' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                        }}>Resoluciones</button>
                    </div>

                    <button
                        onClick={() => openModal()}
                        style={{
                            background: '#003f6f', color: 'white', border: '1px solid #002846', padding: '8px 16px', borderRadius: '4px',
                            fontSize: '0.85rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                            display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'none'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = '#002846'}
                        onMouseOut={e => e.currentTarget.style.background = '#003f6f'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        Anexar Documento
                    </button>
                </div>
            </div>

            {/* List Table Formal */}
            <div style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', boxShadow: 'none', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #cbd5e1' }}>
                        <tr>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '120px' }}>Emisión</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem' }}>Denominación / Asunto Oficial</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '150px' }}>Clasificación</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '100px', textAlign: 'right' }}>Anexos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDocs.map((doc, index) => (
                            <tr key={doc.id} style={{ borderBottom: index === filteredDocs.length - 1 ? 'none' : '1px solid #e2e8f0', transition: 'background 0.2s', background: 'white' }} className="table-row">
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', color: '#475569', fontWeight: '600' }}>
                                    {doc.date}
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top' }}>
                                    {doc.isResolution && <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#005a9c', marginBottom: '2px' }}>RES. {doc.number}</div>}
                                    <div style={{ fontWeight: '600', color: '#0f172a', maxWidth: '500px', lineHeight: '1.4' }}>{doc.title}</div>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', color: '#475569' }}>
                                    <span style={{ fontSize: '0.75rem', fontWeight: '600', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>{doc.category}</span>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                        <button onClick={() => openModal(doc)} style={{ background: 'transparent', color: '#3b82f6', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Modificar">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                                        </button>
                                        <button onClick={() => { if (window.confirm('¿Confirmar archivamiento/eliminación definitiva?')) deleteItem('documents', doc.id) }} style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Eliminar Base">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredDocs.length === 0 && (
                            <tr>
                                <td colSpan="4" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                                    No se encontraron registros indexados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Formal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', padding: '0', borderRadius: '6px', width: '90%', maxWidth: '550px', border: '1px solid #cbd5e1', boxShadow: 'none', animation: 'none' }}>
                        <div style={{ padding: '20px 25px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: '6px 6px 0 0' }}>
                            <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>{editingItem ? 'Modificación de Expediente' : 'Aperturar Expediente'}</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>

                        <div style={{ padding: '25px', display: 'grid', gap: '15px' }}>
                            {activeTab === 'resolutions' && (
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Nomenclatura (Nº Resolución)</label>
                                    <input type="text" placeholder="Ej. 124-2026-UNFAY" value={formData.number} onChange={e => setFormData({ ...formData, number: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                            )}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Denominación / Asunto Oficial <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Fecha de Suscripción</label>
                                    <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Clasificación Jerárquica</label>
                                    <input type="text" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                            </div>

                            <div style={{ marginTop: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                    <div>
                                        <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#1e293b', fontWeight: '700' }}>Anexos y Archivos Vinculados</h4>
                                        <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#64748b' }}>Agregue el documento principal y anexos complementarios.</p>
                                    </div>
                                    <button type="button" onClick={addAnexo} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#005a9c', padding: '6px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.background = '#f8fafc'}>+ Añadir Documento</button>
                                </div>

                                <div style={{ display: 'grid', gap: '10px', maxHeight: '250px', overflowY: 'auto', paddingRight: '5px' }}>
                                    {(formData.anexos || []).length === 0 && (
                                        <div style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', padding: '20px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px' }}>No hay archivos adjuntos en este expediente.</div>
                                    )}
                                    {(formData.anexos || []).map((anexo) => (
                                        <div key={anexo.id} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', background: '#f8fafc', padding: '15px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                                            <div style={{ flex: 1, display: 'grid', gap: '12px' }}>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#475569', marginBottom: '4px' }}>Denominación / Asunto del Archivo</label>
                                                    <input type="text" placeholder="Ej. Resolución Principal, Anexo 1, etc." value={anexo.titulo} onChange={e => updateAnexo(anexo.id, 'titulo', e.target.value)} style={{ width: '100%', padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} className="input-formal" />
                                                </div>
                                                <div style={{ display: 'flex', gap: '10px' }}>
                                                    <input type="text" placeholder="URL del archivo o nombre del PDF cargado" value={anexo.url} onChange={e => updateAnexo(anexo.id, 'url', e.target.value)} style={{ flex: 1, padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }} className="input-formal" />
                                                    <label style={{ background: 'white', border: '1px solid #cbd5e1', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center' }}>
                                                        <input type="file" accept=".pdf,application/pdf" onChange={(e) => {
                                                            if (e.target.files && e.target.files[0]) updateAnexo(anexo.id, 'url', e.target.files[0].name);
                                                        }} style={{ display: 'none' }} />
                                                        Cargar PDF
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="button" onClick={() => removeAnexo(anexo.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', padding: '4px', cursor: 'pointer', alignSelf: 'center', transition: 'all 0.2s' }} className="action-icon" title="Eliminar este archivo">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '15px 25px', display: 'flex', justifyContent: 'flex-end', gap: '15px', borderTop: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '0 0 6px 6px' }}>
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.background = 'white'}>Cancelar</button>
                            <button onClick={handleSave} style={{ background: '#003f6f', color: 'white', padding: '8px 24px', borderRadius: '4px', border: '1px solid #002846', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#002846'} onMouseOut={e => e.currentTarget.style.background = '#003f6f'}>Vincular Documento</button>
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

export default DocumentManager;
