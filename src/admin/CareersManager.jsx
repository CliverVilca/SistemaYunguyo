import React, { useState } from 'react';
import { useAdminData } from '../context/AdminDataContext';

const CareersManager = () => {
    const { careers, addItem, deleteItem, updateItem } = useAdminData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const [formData, setFormData] = useState({
        name: '', description: '', area: 'Ingeniería', color: '#005a9c', image: ''
    });

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({ ...item });
        } else {
            setEditingItem(null);
            setFormData({ name: '', description: '', area: 'Ingeniería', color: '#005a9c', image: '' });
        }
        setIsModalOpen(true);
    };

    const handleSave = () => {
        if (!formData.name) return alert('El nombre es obligatorio');
        if (editingItem) updateItem('careers', editingItem.id, formData);
        else addItem('careers', { ...formData, image: formData.image || '/hero.png' });
        setIsModalOpen(false);
    };

    return (
        <div style={{ animation: 'none' }}>
            {/* Header Institucional */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '15px' }}>
                <div>
                    <h2 style={{ margin: 0, color: '#1e293b', fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.3px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#005a9c" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        Oferta Académica Vigente
                    </h2>
                    <p style={{ margin: '6px 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Administración del perfil orgánico de Escuelas Profesionales.</p>
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
                    Anexar Escuela Académica
                </button>
            </div>

            {/* Grid Careers Formal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
                {careers.map((item) => (
                    <div key={item.id} className="formal-career-card" style={{
                        background: 'white', padding: '20px', display: 'flex', flexDirection: 'column', height: '100%',
                        position: 'relative', border: '1px solid #cbd5e1', borderRadius: '6px',
                        borderTop: `4px solid ${item.color || '#005a9c'}`,
                        boxShadow: 'none'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    background: '#f1f5f9', color: '#1e293b',
                                    padding: '8px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: '1px solid #e2e8f0'
                                }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                                </div>
                                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    {item.area}
                                </span>
                            </div>
                        </div>

                        <h3 style={{ margin: '0 0 8px', color: '#0f172a', fontSize: '1rem', fontWeight: '700', lineHeight: '1.3' }}>{item.name}</h3>
                        <p style={{ margin: '0 0 20px', color: '#475569', fontSize: '0.8rem', lineHeight: '1.5', flex: 1 }}>{item.description || 'Sin perfil registrado en el sistema.'}</p>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', borderTop: '1px solid #e2e8f0', paddingTop: '15px' }}>
                            <button onClick={() => openModal(item)} style={{ background: 'transparent', color: '#005a9c', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Editar">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4L18.5 2.5z"></path></svg>
                            </button>
                            <button onClick={() => { if (window.confirm('¿Desactivar/Eliminar la información de la Escuela?')) deleteItem('careers', item.id) }} style={{ background: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex' }} className="action-icon" title="Eliminar">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Formal */}
            {isModalOpen && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(15, 23, 42, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
                    <div style={{ background: 'white', padding: '0', borderRadius: '6px', width: '90%', maxWidth: '550px', border: '1px solid #cbd5e1', boxShadow: 'none', animation: 'none' }}>
                        <div style={{ padding: '20px 25px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: '6px 6px 0 0' }}>
                            <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.1rem', fontWeight: '700' }}>{editingItem ? 'Modificación de Perfil Académico' : 'Creación de Nueva Dependencia Académica'}</h3>
                            <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>

                        <div style={{ padding: '25px', display: 'grid', gap: '15px' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Denominación Oficial de la Escuela <span style={{ color: 'red' }}>*</span></label>
                                <input type="text" placeholder="Ej. Ingeniería de Sistemas" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Facultad / Área Académica</label>
                                    <select value={formData.area} onChange={e => setFormData({ ...formData, area: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal">
                                        <option>Ingeniería</option><option>Ciencias de la Salud</option><option>Ciencias Sociales</option><option>Administración</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Esquema de Color</label>
                                    <input type="color" value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })} style={{ width: '100%', padding: '2px', height: '40px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Perfil Descriptivo de la Escuela</label>
                                <textarea rows="2" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} style={{ width: '100%', padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#1e293b', resize: 'vertical' }} className="input-formal"></textarea>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>Fotografía Referencial (Instalaciones / Carrera)</label>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <input type="text" placeholder="URL de la imagen" value={formData.image || ''} onChange={e => setFormData({ ...formData, image: e.target.value })} style={{ flex: 1, padding: '10px 12px', borderRadius: '4px', border: '1px solid #cbd5e1', outline: 'none', fontSize: '0.9rem', color: '#1e293b' }} className="input-formal" />
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
                            <button onClick={handleSave} style={{ background: '#003f6f', color: 'white', padding: '8px 24px', borderRadius: '4px', border: '1px solid #002846', fontWeight: '600', cursor: 'pointer', fontSize: '0.85rem', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.background = '#002846'} onMouseOut={e => e.currentTarget.style.background = '#003f6f'}>Grabar Información</button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                .formal-career-card { transition: all 0.2s ease-in-out; }
                .formal-career-card:hover { transform: translateY(-3px); box-shadow: none; }
                .action-icon { opacity: 0.7; transition: opacity 0.2s; }
                .formal-career-card:hover .action-icon { opacity: 1; }
                .action-icon:hover { transform: scale(1.1); }
                .input-formal:focus { border-color: #005a9c !important; box-shadow: none; }
            `}</style>
        </div>
    );
};

export default CareersManager;
