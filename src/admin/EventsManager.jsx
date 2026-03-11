import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const EventsManager = () => {
    const { news, addItem, deleteItem, updateItem } = useAdminData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const eventsList = news.filter(item => item.type === 'evento');

    const [formData, setFormData] = useState({
        title: '', date: new Date().toISOString().split('T')[0], time: '09:00 AM', location: '', category: 'Evento', type: 'evento', status: 'Programado', image: ''
    });

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({ ...item });
        } else {
            setEditingItem(null);
            setFormData({ title: '', date: new Date().toISOString().split('T')[0], time: '09:00 AM', location: '', category: 'Evento', type: 'evento', status: 'Programado', image: '' });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.title) return alert('El título es obligatorio');
        if (editingItem) updateItem('news', editingItem.id, formData);
        else addItem('news', { ...formData, image: formData.image || '/lab.jpg' });
        setIsModalOpen(false);
    };

    return (
        <div style={{ animation: 'none' }}>
            {/* Header Institucional */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005a9c" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        Registro de Eventos Oficiales
                    </h2>
                    <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Administración de agenda, ceremonias y actos académicos.</p>
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
                    Nuevo Evento
                </button>
            </div>

            {/* List Table Formal */}
            <div style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', boxShadow: 'none', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #cbd5e1' }}>
                        <tr>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '120px' }}>Fecha</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem' }}>Descripción del Evento</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '200px' }}>Ubicación</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '120px', textAlign: 'center' }}>Estado</th>
                            <th style={{ padding: '12px 20px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px', fontSize: '0.75rem', width: '100px', textAlign: 'right' }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventsList.map((item, index) => (
                            <tr key={item.id} style={{ borderBottom: index === eventsList.length - 1 ? 'none' : '1px solid #e2e8f0', transition: 'background 0.2s', background: 'white' }} className="table-row">
                                <td style={{ padding: '12px 20px', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '700', color: '#1e293b' }}>{item.date}</div>
                                    <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '2px' }}>{item.time}</div>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top' }}>
                                    <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Categoría: {item.category}</div>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', color: '#475569' }}>
                                    {item.location || 'Sede Principal UNFAY'}
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', textAlign: 'center' }}>
                                    <span style={{
                                        display: 'inline-block', fontSize: '0.7rem', fontWeight: '700', padding: '4px 10px',
                                        borderRadius: '4px', background: '#d1fae5', color: '#047857', border: '1px solid #a7f3d0'
                                    }}>PROGRAMADO</span>
                                </td>
                                <td style={{ padding: '12px 20px', verticalAlign: 'top', textAlign: 'right' }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                        <button
                                            onClick={() => openModal(item)}
                                            style={{ background: 'transparent', color: '#3b82f6', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }}
                                            className="action-icon" title="Editar"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                                        </button>
                                        <button
                                            onClick={() => { if (window.confirm('¿Confirmar anulación del evento?')) deleteItem('news', item.id) }}
                                            style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }}
                                            className="action-icon" title="Eliminar"
                                        >
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {eventsList.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                                    No hay eventos registrados en la base de datos.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal Formal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', width: '90%', maxWidth: '550px', borderRadius: '6px', border: '1px solid #cbd5e1', boxShadow: 'none', animation: 'none' }}>
                        <div style={{ padding: '20px 25px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: '6px 6px 0 0' }}>
                            <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>{editingItem ? 'Modificación de Evento' : 'Registro de Nuevo Evento'}</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>

                        <div style={{ padding: '25px', display: 'grid', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Denominación Oficial del Evento <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Fecha de Ejecución</label>
                                    <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Hora de Inicio</label>
                                    <input type="text" placeholder="Ej. 09:00 AM" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Sede o Locación</label>
                                <input type="text" placeholder="Auditorio Principal, Patio de Honor, etc." value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Material Fotográfico (URL o Archivo)</label>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <input type="text" placeholder="URL de la imagen (ej. /lab.jpg)" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} style={{ flex: 1, padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                                    <label style={{ background: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                                        <input type="file" accept="image/*" onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                const reader = new FileReader();
                                                reader.onload = (ev) => {
                                                    setFormData({ ...formData, image: ev.target.result });
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }} style={{ display: 'none' }} />
                                        Examinar...
                                    </label>
                                </div>
                                {formData.image && (
                                    <div style={{ marginTop: '10px', width: '120px', height: '70px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                                        <img src={formData.image} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div style={{ padding: '15px 25px', display: 'flex', justifyContent: 'flex-end', gap: '15px', borderTop: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '0 0 6px 6px' }}>
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: '8px 16px', borderRadius: '4px', border: '1px solid #cbd5e1', background: 'white', color: '#475569', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'} onMouseOut={e => e.currentTarget.style.background = 'white'}>Cancelar</button>
                            <button onClick={handleSave} style={{ background: '#003f6f', color: 'white', padding: '8px 24px', borderRadius: '4px', border: '1px solid #002846', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#002846'} onMouseOut={e => e.currentTarget.style.background = '#003f6f'}>Guardar Registro</button>
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

export default EventsManager;
