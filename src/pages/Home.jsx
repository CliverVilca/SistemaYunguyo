import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useAdminData } from '../context/AdminDataContext';
import EmptyStateMessage from '../components/EmptyStateMessage';

const Home = () => {
    const { t } = useLanguage();
    const { news, careers } = useAdminData();

    // Obtener las noticias y eventos reales
    const recentNewsList = news.filter(n => n.type === 'noticia').slice(0, 3);
    const upcomingEvents = news.filter(n => n.type === 'evento').slice(0, 3);
    const displayCareers = careers.slice(0, 4);

    return (
        <div className="container">
            {/* Hero News Grid */}
            {recentNewsList.length > 0 ? (
                <section className="hero-grid">
                    {recentNewsList.map((item, index) => (
                        <Link key={item.id} to={`/noticias?id=${item.id}`} className={`hero-item ${index === 0 ? 'main-hero' : ''}`}>
                            <img src={item.image || '/hero.png'} alt={item.title} />
                            <div className="hero-content">
                                <span style={{ backgroundColor: item.color || '#003f6f' }}>{item.category}</span>
                                <h2>{item.title}</h2>
                            </div>
                        </Link>
                    ))}
                </section>
            ) : (
                <section style={{ marginTop: '20px' }}>
                    <EmptyStateMessage
                        isHero={true}
                        message="Plataforma de Noticias en Preparación"
                        subtitle="Próximamente publicaremos aquí toda la actualidad, logros y comunicados oficiales de la Universidad Nacional Fronteriza Autónoma de Yunguyo."
                        icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-4 4v16z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18h1"></path><path d="M8 14h8"></path><path d="M8 10h8"></path></svg>}
                    />
                </section>
            )}

            {/* Sección de Eventos Próximos (Principal) */}
            <section id="eventos-grid" style={{ marginTop: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h2 className="section-title" style={{ margin: 0 }}>Próximos Eventos</h2>
                    <Link to="/noticias?tab=evento" className="btn-more">Ver Calendario ➔</Link>
                </div>
                {upcomingEvents.length > 0 ? (
                    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {upcomingEvents.map((event, index) => (
                            <EventCard key={index} event={event} />
                        ))}
                    </div>
                ) : (
                    <EmptyStateMessage
                        message="Calendario Institucional"
                        subtitle="No hay eventos programados para los próximos días. Manténgase atento a nuestras redes oficiales para futuras convocatorias y ceremonias."
                        icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
                    />
                )}
            </section>

            <section id="carreras-grid" style={{ marginTop: '30px', paddingBottom: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h2 className="section-title" style={{ margin: 0, fontSize: '1.2rem' }}>{t('nav_carreras')}</h2>
                    <Link to="/carreras" className="btn-more" style={{ fontSize: '0.8rem' }}>{t('read_more')} ➔</Link>
                </div>
                {displayCareers.length > 0 ? (
                    <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' }}>
                        {displayCareers.map((career) => (
                            <CareerMiniCard
                                key={career.id}
                                title={career.name}
                                category={career.faculty}
                                icon={career.icon}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyStateMessage
                        message="Programas Académicos"
                        subtitle="Nuestra oferta académica y escuelas profesionales están actualmente en proceso de actualización en el sistema."
                        icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>}
                    />
                )}
            </section>
        </div>
    );
};

const EventCard = ({ event }) => {
    return (
        <Link to={`/noticias?tab=evento&id=${event.id}`} className="card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <div className="card-img" style={{ height: '180px', position: 'relative' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'white',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#c62828', textTransform: 'uppercase' }}>{event.date.split('/')[1]}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#003f6f', lineHeight: 1 }}>{event.date.split('/')[0]}</div>
                </div>
            </div>
            <div className="card-body" style={{ padding: '15px' }}>
                <h3 style={{ fontSize: '1rem', color: '#003f6f', marginBottom: '10px', fontWeight: '850', lineHeight: 1.2 }}>{event.title}</h3>
                <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
                    <span>🕒 {event.time}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span>📍 {event.location}</span>
                </div>
            </div>
        </Link>
    );
};

const CareerMiniCard = ({ icon, title, category }) => (
    <Link to="/carreras" className="card" style={{
        height: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        border: '1px solid #eff3f6',
        textDecoration: 'none',
        padding: '20px',
        textAlign: 'center'
    }}>
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
            {icon || '🎓'}
        </div>
        <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#003f6f', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</div>
        <div style={{ fontSize: '0.65rem', color: '#777', marginTop: '4px' }}>{category}</div>
    </Link>
);

const NewsCard = ({ image, title, description, link }) => {
    const { t } = useLanguage();
    return (
        <div className="card">
            <div className="card-img" style={{ height: '200px' }}><img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div className="card-body">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#003f6f' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', marginBottom: '15px' }}>{description}</p>
                <Link to={link || "/noticias"} className="btn-more">{t('read_more')} ➔</Link>
            </div>
        </div>
    );
};

export default Home;
