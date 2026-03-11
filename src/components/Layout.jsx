import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const Breadcrumbs = () => {
    const { t } = useLanguage();
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav className="breadcrumbs-container">
            <div className="container">
                <Link to="/">{t('nav_home')}</Link>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const pageKey = `nav_${name}`;
                    const label = t(pageKey) !== pageKey ? t(pageKey) : name.charAt(0).toUpperCase() + name.slice(1);

                    return isLast ? (
                        <span key={routeTo}> / {label}</span>
                    ) : (
                        <Link key={routeTo} to={routeTo}> / {label}</Link>
                    );
                })}
            </div>
        </nav>
    );
};

const Header = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* Top Utility Bar */}
            <div className="top-utility-bar" style={{ backgroundColor: '#00264d', color: '#fff', fontSize: '0.75rem', fontWeight: '500', padding: '6px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                    {/* Left Side: Address & Email */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <a href="https://maps.google.com/?q=Jr.+Bolognesi+765+-+Yunguyo" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#fff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Jr. Bolognesi 765 - Yunguyo
                        </a>
                        <a href="mailto:info@unfay.edu.pe" style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: '#fff', opacity: 0.9, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = '1'} onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> info@unfay.edu.pe
                        </a>
                    </div>

                    {/* Right Side: Transparency & Language */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <a href="https://www.transparencia.gob.pe" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', transition: 'all 0.2s', opacity: 0.85 }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.opacity = '1' }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '0.85' }}>
                            <img src="/logo_pte.png" alt="Portal de Transparencia Estándar" style={{ height: '32px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                        </a>
                    </div>

                </div>
            </div>            {/* Brand Bar */}
            <header className="brand-header">
                <div className="container">
                    <Link to="/" className="logo-container">
                        <img src="/logo_unfay.png" alt="Logo UNFAY" />
                        <div className="logo-text">
                            <div className="logo-title-row">
                                <h1 className="logo-main-title">UNFAY</h1>
                                <span className="ley-badge">{t('ley_text')}</span>
                            </div>
                            <p className="logo-subtitle">Universidad Nacional Fronteriza Autónoma de Yunguyo</p>
                        </div>
                    </Link>

                    <div className="header-actions">


                        {/* Hamburger Button */}
                        <button
                            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Navigation */}
            <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
                <div className="container">
                    <ul id="main-menu">
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Inicio</NavLink></li>
                        <li><NavLink to="/universidad" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Institucional</NavLink></li>
                        <li><NavLink to="/autoridades" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Autoridades</NavLink></li>
                        <li><NavLink to="/carreras" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Carreras Profesionales</NavLink></li>
                        <li><NavLink to="/noticias" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Noticias y Eventos</NavLink></li>
                        <li><NavLink to="/convocatorias" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Convocatorias</NavLink></li>
                        <li className="nav-dropdown">
                            <NavLink to="/documentos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                                Documentos <span style={{ fontSize: '0.7rem', marginLeft: '5px' }}>▼</span>
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><Link to="/documentos" className="dropdown-link">Documentos de Gestión</Link></li>
                                <li><Link to="/resoluciones" className="dropdown-link">Resoluciones</Link></li>
                            </ul>
                        </li>
                        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Contacto</NavLink></li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </>
    );
};

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-top-grid">
                    <div className="footer-brand-col" style={{ alignItems: 'flex-start' }}>
                        <div className="footer-logo-wrapper" style={{ justifyContent: 'flex-start', marginBottom: '15px' }}>
                            <img src="/logo_unfay.png" alt="Logo UNFAY Footer" className="footer-logo" style={{ filter: 'brightness(0) invert(1)', width: '120px', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="footer-brand-text" style={{ textAlign: 'left', marginBottom: '20px' }}>
                            <h4 style={{ fontSize: '1.2rem', margin: '0 0 5px 0' }}>Universidad Nacional Fronteriza<br />Autónoma de Yunguyo</h4>
                        </div>
                        <div className="footer-social" style={{ justifyContent: 'flex-start', marginTop: '0' }}>
                            <a href="https://www.facebook.com/unfay" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="/facebook_icon.svg" alt="Facebook" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                            </a>
                            <a href="https://www.youtube.com/@unfay" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="/youtube_icon.svg" alt="Youtube" style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav-col footer-contact-info">
                        <h4>{t('footer_contact')} <span className="title-dash">—</span></h4>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon-svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>Jr. Bolognesi 765 - Yunguyo</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon-svg"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                <span>mesadepartes@unfay.edu.pe</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon-svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>+51 051 123456</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4>LA UNIVERSIDAD <span className="title-dash">—</span></h4>
                        <ul>
                            <li><Link to="/universidad" className="footer-link">Institucional</Link></li>
                            <li><Link to="/autoridades" className="footer-link">Autoridades</Link></li>
                            <li><Link to="/carreras" className="footer-link">Carreras Profesionales</Link></li>
                            <li><Link to="/documentos" className="footer-link">Documentos</Link></li>
                            <li><Link to="/convocatorias" className="footer-link">Convocatorias</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4>FANPAGE <span className="title-dash" style={{ color: '#00ccff' }}>⤵</span></h4>
                        <div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '4px', display: 'inline-block' }}>
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMINEDUPeru&tabs=&width=250&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="250"
                                height="200"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Facebook Page Content"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-copyright">
                        &copy; 2026 Universidad Nacional Fronteriza Autónoma de Yunguyo. {t('footer_rights')}
                    </div>
                    <div className="footer-credits">
                        {t('footer_dev')}
                    </div>
                </div>
            </div>
        </footer >
    );
};

const Layout = ({ children }) => {
    return (
        <div className="site-wrapper">
            <ScrollToTop />
            <Header />
            <Breadcrumbs />
            <main id="app">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
