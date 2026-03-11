import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Universidad = () => {
    const { t, language } = useLanguage();

    return (
        <div className="container" style={{ paddingBottom: '40px' }}>
            <section style={{ paddingTop: '20px' }}>
                <h2 className="section-title" style={{
                    textAlign: 'left',
                    marginBottom: '20px',
                    fontSize: '1.8rem',
                    letterSpacing: '-0.5px'
                }}>{t('page_institutional_title')}</h2>

                <div className="fade-in" style={{ maxWidth: '1150px', margin: '0 auto' }}>
                    <div className="inst-card" style={{
                        background: 'white',
                        borderRadius: '16px',
                        border: '1px solid #e1e8ed',
                        boxShadow: '0 15px 50px rgba(0,63,111,0.06)',
                        display: 'flex',
                        overflow: 'hidden',
                        position: 'relative',
                        minHeight: '480px'
                    }}>
                        {/* Bloque Visual (Logo) con Diseño Dinámico */}
                        <div className="inst-visual" style={{
                            width: '32%',
                            background: 'linear-gradient(135deg, #001529 0%, #003f6f 100%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Formas abstractas decorativas */}
                            <div style={{
                                position: 'absolute',
                                width: '300px',
                                height: '300px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '50%',
                                top: '-100px',
                                left: '-100px'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                background: 'rgba(255,255,255,0.02)',
                                transform: 'rotate(45deg)',
                                bottom: '-50px',
                                right: '-50px'
                            }}></div>

                            <div style={{
                                position: 'relative',
                                background: 'rgba(255,255,255,0.1)',
                                padding: '30px',
                                borderRadius: '24px',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                            }}>
                                <img src="/logo_unfay.png" alt="Logo UNFAY" style={{
                                    width: '180px',
                                    height: 'auto',
                                    filter: 'brightness(0) invert(1) drop-shadow(0 5px 15px rgba(0,0,0,0.3))'
                                }} />
                            </div>

                            <div style={{ marginTop: '30px', textAlign: 'center', position: 'relative', color: 'white' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.8 }}>IDENTIDAD</div>
                                <div style={{ fontSize: '0.65rem', fontWeight: '500', opacity: 0.6, marginTop: '5px' }}>INSTITUCIONAL</div>
                                <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.3)', margin: '15px auto' }}></div>
                            </div>
                        </div>

                        {/* Bloque de Información + Iconos de Carreras */}
                        <div className="inst-info" style={{
                            flex: 1,
                            padding: '40px 45px',
                            display: 'flex',
                            flexDirection: 'column',
                            background: '#ffffff'
                        }}>
                            <h3 style={{
                                color: '#003f6f',
                                fontSize: '1.6rem',
                                fontWeight: '900',
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ width: '5px', height: '30px', background: '#003f6f', borderRadius: '10px' }}></span>
                                {language === 'es' ? 'Historia de Creación' : 'Creation History'}
                            </h3>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                color: '#444',
                                lineHeight: '1.5',
                                fontSize: '0.9rem',
                                textAlign: 'justify'
                            }}>
                                {/* Párrafo 1 y 2 - Cuerpo Principal */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', position: 'relative', zIndex: 1 }}>
                                    <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: '500', color: '#001529' }}>
                                        La <strong>Universidad Nacional Fronteriza Autónoma de Yunguyo (UNFAY)</strong> es una universidad pública creada con el objetivo de fortalecer el acceso a la educación superior universitaria en la zona sur del país, especialmente en la región fronteriza del departamento de Puno.
                                    </p>

                                    <p style={{ margin: 0 }}>
                                        La <strong>UNFAY</strong> fue creada mediante la <strong>Ley N.º 32090</strong>, como parte de la política nacional de descentralización educativa, con la finalidad de contribuir al desarrollo académico, científico, tecnológico y cultural de la provincia de Yunguyo y zonas aledañas.
                                    </p>
                                </div>

                                {/* Párrafo 3 y 4 - Diseño de Columnas con Énfasis Regional */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '30px',
                                    marginTop: '10px',
                                    background: '#f8fafc',
                                    padding: '25px',
                                    borderRadius: '16px',
                                    border: '1px solid #edf2f7',
                                    position: 'relative',
                                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)'
                                }}>
                                    {/* Adorno tipo marca de agua */}
                                    <div style={{ position: 'absolute', right: '10px', bottom: '10px', opacity: 0.03 }}>
                                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z" /></svg>
                                    </div>

                                    <div style={{ borderLeft: '3px solid #1890ff', paddingLeft: '18px' }}>
                                        <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#1890ff', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Compromiso Social</div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#444', lineHeight: '1.6' }}>
                                            Su creación responde a una demanda histórica de la población, brindando formación profesional pertinente al contexto <strong>fronterizo, intercultural y productivo</strong>, promoviendo la investigación y el desarrollo sostenible.
                                        </p>
                                    </div>
                                    <div style={{ borderLeft: '3px solid #001529', paddingLeft: '18px' }}>
                                        <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#001529', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Visión Estratégica</div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#444', lineHeight: '1.6' }}>
                                            Estamos elaborando el estudio de mercado para nuevas carreras orientadas a las necesidades estratégicas del territorio, bajo principios de <strong>calidad académica e inclusión social</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Iconos de Carreras por Tipos */}
                                <div style={{ marginTop: '10px' }}>
                                    <div style={{
                                        fontSize: '0.7rem',
                                        fontWeight: '800',
                                        color: '#003f6f',
                                        textTransform: 'uppercase',
                                        marginBottom: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        opacity: 0.7
                                    }}>
                                        Proyección Académica Estratégica
                                        <div style={{ flex: 1, height: '1px', background: '#eee' }}></div>
                                    </div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        gap: '12px'
                                    }}>
                                        {/* Tipo 1: Ingenierías */}
                                        <div style={{
                                            background: '#f8fafc',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            border: '1px solid #eff3f6'
                                        }}>
                                            <div style={{ marginBottom: '6px', color: '#003f6f', display: 'flex', justifyContent: 'center' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20,18c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H4C2.9,4,2,4.9,2,6v10c0,1.1,0.9,2,2,2H0v2h24v-2H20z M4,6h16v10H4V6z" />
                                                </svg>
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#003f6f' }}>INGENIERÍAS</div>
                                            <div style={{ fontSize: '0.6rem', color: '#777', marginTop: '2px' }}>Tecnología</div>
                                        </div>

                                        {/* Tipo 2: Gestión */}
                                        <div style={{
                                            background: '#f8fafc',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            border: '1px solid #eff3f6'
                                        }}>
                                            <div style={{ marginBottom: '6px', color: '#003f6f', display: 'flex', justifyContent: 'center' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8 C22,6.9,21.1,6,20,6z M10,4h4v2h-4V4z M20,20H4V8h16V20z" />
                                                </svg>
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#003f6f' }}>GESTIÓN</div>
                                            <div style={{ fontSize: '0.6rem', color: '#777', marginTop: '2px' }}>Economía</div>
                                        </div>

                                        {/* Tipo 3: Educación */}
                                        <div style={{
                                            background: '#f8fafc',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textAlign: 'center',
                                            border: '1px solid #eff3f6'
                                        }}>
                                            <div style={{ marginBottom: '6px', color: '#003f6f', display: 'flex', justifyContent: 'center' }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                                                </svg>
                                            </div>
                                            <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#003f6f' }}>EDUCACIÓN</div>
                                            <div style={{ fontSize: '0.6rem', color: '#777', marginTop: '2px' }}>Intercultural</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style>{`
                            @media (max-width: 950px) {
                                .inst-card { flex-direction: column !important; min-height: auto !important; }
                                .inst-visual { width: 100% !important; border-right: none !important; border-bottom: 1px solid #eff3f6 !important; padding: 40px 20px !important; }
                                .inst-info { padding: 30px 20px !important; }
                                .inst-info div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
                            }
                        `}</style>
                </div>
            </section>
        </div>
    );
};

export default Universidad;
