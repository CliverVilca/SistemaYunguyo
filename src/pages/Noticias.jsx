import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';
import EmptyStateMessage from '../components/EmptyStateMessage';

const Noticias = () => {
    const { t } = useLanguage();
    const { news } = useAdminData();
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState('todos');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab && ['noticia', 'evento', 'todos'].includes(tab)) {
            setActiveTab(tab);
        }

        const newsId = searchParams.get('id');
        if (newsId) {
            const item = news.find(n => n.id.toString() === newsId.toString());
            if (item) setSelectedItem(item);
        }
    }, [searchParams, news]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    const filteredItems = activeTab === 'todos'
        ? news
        : news.filter(item => item.type === activeTab);

    const featured = news.find(n => n.featured && n.type === 'noticia') || news.filter(n => n.type === 'noticia')[0];
    const regular = filteredItems.filter(n => n.id !== (featured ? featured.id : null) || activeTab !== 'todos');

    const openModal = (item) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    const getPageTitle = () => {
        if (activeTab === 'noticia') return 'NOTICIAS INSTITUCIONALES';
        if (activeTab === 'evento') return 'PRÓXIMOS EVENTOS Y ACTIVIDADES';
        return 'NOTICIAS Y EVENTOS';
    };

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '10px 0 30px' }}>

                <div style={{ marginBottom: '15px', borderBottom: '2px solid #003f6f', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <h2 style={{ fontSize: '1.4rem', color: '#003f6f', fontWeight: '950', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
                        {getPageTitle()}
                    </h2>

                    <div style={{ display: 'flex', gap: '5px' }}>
                        {['todos', 'noticia', 'evento'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                style={{
                                    padding: '4px 12px',
                                    borderRadius: '4px',
                                    border: 'none',
                                    background: activeTab === tab ? '#003f6f' : '#f1f5f9',
                                    color: activeTab === tab ? 'white' : '#64748b',
                                    fontWeight: '900',
                                    fontSize: '0.65rem',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {tab === 'todos' ? 'Ver Todo' : tab + 's'}
                            </button>
                        ))}
                    </div>
                </div>

                {(activeTab === 'todos' || activeTab === 'noticia') && featured && (
                    <div className="featured-mini" onClick={() => openModal(featured)} style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(200px, 450px) 1fr',
                        background: '#f8fafc',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        border: '1px solid #e2e8f0',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}>
                        <div style={{ height: '220px' }}>
                            <img src={featured.image || '/hero.png'} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                        </div>
                        <div style={{ padding: '15px 25px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#c62828', marginBottom: '5px' }}>DESTACADO • {featured.date}</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#003f6f', fontWeight: '900', margin: '0 0 8px', lineHeight: '1.1' }}>{featured.title}</h3>
                            <p style={{ color: '#475569', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>{featured.summary}</p>
                            <span style={{ color: '#003f6f', fontWeight: '900', fontSize: '0.7rem', marginTop: '10px' }}>LEER MÁS ➔</span>
                        </div>
                    </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                    {regular.map((item) => (
                        <div key={item.id} className="news-card-slim" onClick={() => openModal(item)} style={{
                            background: '#fff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'all 0.2s ease'
                        }}>
                            <div style={{ height: '160px', position: 'relative' }}>
                                <img src={item.image || (item.type === 'evento' ? '/lab.jpg' : '/hero.png')} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                <div style={{ position: 'absolute', top: '10px', left: '10px', background: item.color || (item.type === 'evento' ? '#c62828' : '#003f6f'), color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '0.6rem', fontWeight: '900' }}>
                                    {item.category}
                                </div>
                            </div>
                            <div style={{ padding: '12px' }}>
                                <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: '700', marginBottom: '5px' }}>
                                    {item.date} {item.type === 'evento' && `| ${item.time}`}
                                </div>
                                <h4 style={{ fontSize: '0.95rem', color: '#003f6f', fontWeight: '800', margin: '0 0 8px', lineHeight: '1.3' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500', margin: 0 }}>{item.summary}</p>
                            </div>
                        </div>
                    ))}
                    {regular.length === 0 && !featured && <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '40px', color: '#666' }}>No hay contenido disponible en esta categoría.</p>}
                </div>
            </div>

            {selectedItem && (
                <div className="modal-overlay" onClick={closeModal} style={{ position: 'fixed', inset: 0, zIndex: '2000', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{
                        maxWidth: '1250px',
                        width: '98%',
                        height: 'auto',
                        maxHeight: '92vh',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: 'white',
                        display: 'flex',
                        position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}>
                        <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '10', background: 'white', border: 'none', width: '30px', height: '30px', borderRadius: '50%', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', color: '#003f6f' }}>&times;</button>

                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.5fr', width: '100%' }}>
                            {/* LADO IZQUIERDO: IMAGEN COMPLETA */}
                            <div style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                <img
                                    src={selectedItem.image || (selectedItem.type === 'evento' ? '/lab.jpg' : '/hero.png')}
                                    alt={selectedItem.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '92vh',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            {/* LADO DERECHO: CONTENIDO HIPER-OPTIMIZADO */}
                            <div style={{ padding: '20px 25px', overflowY: 'auto', maxHeight: '92vh', background: 'white' }}>
                                <div style={{ marginBottom: '10px' }}>
                                    <span style={{
                                        background: selectedItem.color || (selectedItem.type === 'evento' ? '#c62828' : '#003f6f'),
                                        color: 'white',
                                        padding: '2px 8px',
                                        borderRadius: '3px',
                                        fontSize: '0.6rem',
                                        fontWeight: '800',
                                        textTransform: 'uppercase'
                                    }}>
                                        {selectedItem.category}
                                    </span>
                                    <h2 style={{
                                        color: '#003f6f',
                                        fontSize: '1.45rem',
                                        margin: '6px 0 4px',
                                        lineHeight: '1.1',
                                        fontWeight: '900',
                                        letterSpacing: '-0.8px'
                                    }}>
                                        {selectedItem.title}
                                    </h2>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        paddingBottom: '8px',
                                        borderBottom: '1px solid #f1f5f9',
                                        marginBottom: '12px',
                                        color: '#94a3b8',
                                        fontSize: '0.7rem',
                                        fontWeight: '700'
                                    }}>
                                        <span>📅 {selectedItem.date?.split('T')[0] || selectedItem.date}</span>
                                        {selectedItem.type === 'evento' && <span>🕒 {selectedItem.time}</span>}
                                        {selectedItem.type === 'evento' && <span>📍 {selectedItem.location}</span>}
                                    </div>
                                </div>

                                <div style={{ marginBottom: '12px' }}>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#1e293b',
                                        fontWeight: '750',
                                        lineHeight: '1.3',
                                        borderLeft: '3px solid #003f6f',
                                        paddingLeft: '10px',
                                        margin: 0
                                    }}>
                                        {selectedItem.summary}
                                    </p>
                                </div>

                                <div className="news-full-content" style={{
                                    fontSize: '0.85rem',
                                    lineHeight: '1.5',
                                    color: '#475569',
                                    fontWeight: '400'
                                }} dangerouslySetInnerHTML={{ __html: selectedItem.content?.replace(/\n/g, '<br/>') }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .news-card-slim:hover { border-color: #00aaff; transform: translateY(-3px); }
                .featured-mini:hover { border-color: #00aaff; }
            `}</style>
        </div>
    );
};

export default Noticias;
