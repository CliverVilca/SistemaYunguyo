import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

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
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <>
            {/* Top Utility Bar */}
            <header className="top-bar">
                <div className="container">
                    <div className="top-bar-links">
                        <a href="#">{t('top_intranet')}</a>
                        <a href="#">{t('top_library')}</a>
                        <Link to="/contacto">{t('nav_contact')}</Link>
                    </div>
                    <div className="transparency-buttons">
                        <div className="dropdown">
                            <button className="btn-transparency btn-pte">
                                <span style={{ fontSize: '1.2rem' }}>🌐</span> {t('top_transparency')} ▼
                            </button>
                            <div className="dropdown-content">
                                <Link to="/transparencia/documentos">Documentos de Interés</Link>
                                <a href="https://www.transparencia.gob.pe/" target="_blank" rel="noopener noreferrer">Portal de Transparencia (Externo)</a>
                                <Link to="/transparencia/pte">PTE - Estándar</Link>
                                <Link to="/transparencia/rendicion">Rendición de Cuentas</Link>
                            </div>
                        </div>

                        {/* Language Selector */}
                        <div className="dropdown" style={{ marginLeft: '12px' }}>
                            <button className="btn-lang-selector">
                                <img src="/lang_icon.svg" alt="Lang" className="icon-lang" />
                                <span>{language === 'es' ? 'ESPAÑOL' : 'ENGLISH'}</span>
                                <span className="arrow-down">▼</span>
                            </button>
                            <div className="dropdown-content">
                                <a onClick={() => setLanguage('es')} className={language === 'es' ? 'active-lang' : ''}>
                                    {language === 'es' ? '✓ ' : ''}Español
                                </a>
                                <a onClick={() => setLanguage('en')} className={language === 'en' ? 'active-lang' : ''}>
                                    {language === 'en' ? '✓ ' : ''}English
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Brand Bar */}
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
                        <div className="search-box">
                            <input type="text" placeholder={t('search_placeholder')} />
                            <button type="submit">
                                <img src="/search_icon.svg" alt="Buscar" style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </div>

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
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_home')}</NavLink></li>
                        <li><NavLink to="/universidad" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_institutional')}</NavLink></li>
                        <li><NavLink to="/autoridades" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_authorities')}</NavLink></li>
                        <li><NavLink to="/admision" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_admission')}</NavLink></li>
                        <li><NavLink to="/investigacion" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_research')}</NavLink></li>
                        <li><NavLink to="/convocatorias" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_calls')}</NavLink></li>
                        <li><NavLink to="/noticias" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_news')}</NavLink></li>
                        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>{t('nav_contact')}</NavLink></li>
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
                    <div className="footer-brand-col">
                        <div className="footer-logo-wrapper">
                            <img src="/logo_unfay.png" alt="Logo UNFAY Footer" className="footer-logo" />
                        </div>
                        <div className="footer-brand-text" style={{ textAlign: 'center' }}>
                            <h4 style={{ fontSize: '1.4rem' }}>UNFAY</h4>
                            <p>{t('ley_text')}</p>
                        </div>
                        <div className="footer-social" style={{ justifyContent: 'center' }}>
                            <a href="https://www.facebook.com/unfay" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="/facebook_icon.svg" alt="Facebook" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            </a>
                            <a href="https://www.youtube.com/@unfay" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <img src="/youtube_icon.svg" alt="Youtube" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-nav-col">
                        <h4>{t('footer_contact')}</h4>
                        <ul>
                            <li><span className="footer-icon">📍</span> Jr. Bolognesi 765 - Yunguyo</li>
                            <li><span className="footer-icon">📧</span> mesadepartes@unfay.edu.pe</li>
                            <li><span className="footer-icon">📞</span> +51 051 123456</li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4>{t('footer_links')}</h4>
                        <ul>
                            <li><Link to="/admision">{t('nav_admission')}</Link></li>
                            <li><Link to="/transparencia">{t('top_transparency')}</Link></li>
                            <li><Link to="/convocatorias">{t('nav_calls')}</Link></li>
                            <li><Link to="/contacto">{t('nav_contact')}</Link></li>
                        </ul>
                    </div>

                    <div className="footer-nav-col">
                        <h4>{t('footer_platforms')}</h4>
                        <ul>
                            <li><a href="#">SIA - Sistema Académico</a></li>
                            <li><a href="#">Campus Virtual</a></li>
                            <li><a href="#">Correo Institucional</a></li>
                            <li><a href="#">Repositorio Digital</a></li>
                        </ul>
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
        </footer>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="site-wrapper">
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
