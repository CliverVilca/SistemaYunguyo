import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="container">
            <section className="hero-grid">
                <div className="hero-item main-hero">
                    <img src="/hero.png" alt="UNFAY Main" />
                    <div className="hero-content">
                        <span>{t('hero_tag_inst')}</span>
                        <h2>{t('hero_title_1')}</h2>
                    </div>
                </div>
                <div className="hero-item">
                    <img src="/lab.jpg" alt="Investigación" />
                    <div className="hero-content">
                        <span>{t('hero_tag_res')}</span>
                        <h2>{t('hero_title_2')}</h2>
                    </div>
                </div>
                <div className="hero-item">
                    <img src="/culture.jpg" alt="Academia" />
                    <div className="hero-content">
                        <span>{t('hero_tag_cul')}</span>
                        <h2>{t('hero_title_3')}</h2>
                    </div>
                </div>
            </section>

            <section id="noticias-grid">
                <h2 className="section-title">{t('section_news')}</h2>
                <div className="card-grid">
                    <NewsCard
                        image="/news1.jpg"
                        title="Convocatoria CAS 001-2026"
                        description="Iniciamos el proceso de selección para personal administrativo y docente para el semestre 2026-I."
                        link="/convocatorias"
                    />
                    <NewsCard
                        image="/news2.jpg"
                        title="Implementación de nuevos laboratorios"
                        description="La comisión organizadora anuncia la adquisición de equipos de alta tecnología para investigación."
                        link="/noticias"
                    />
                    <NewsCard
                        image="/news3.jpg"
                        title="Estudio de demanda social"
                        description="Participa en la encuesta para definir las nuevas carreras que transformarán Yunguyo."
                        link="/noticias"
                    />
                </div>
            </section>
        </div>
    );
};

const NewsCard = ({ image, title, description, link }) => {
    const { t } = useLanguage();
    return (
        <div className="card">
            <div className="card-img"><img src={image} alt={title} /></div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={link || "/noticias"} className="btn-more">{t('read_more')} ➔</Link>
            </div>
        </div>
    );
};

export default Home;
