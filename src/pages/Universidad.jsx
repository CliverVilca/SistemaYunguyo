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
                    fontSize: '1.9rem',
                    letterSpacing: '-0.5px'
                }}>{t('page_institutional_title')}</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.1fr 1fr',
                    gap: '30px',
                    alignItems: 'start'
                }}>
                    {/* Columna Izquierda: Historia e Imagen */}
                    <div className="fade-in">
                        <div style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            height: '240px',
                            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                            marginBottom: '18px',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                            <img src="/universidad_hero.jpg" alt="UNFAY Campus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(transparent, rgba(0,74,128,0.7))',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '20px'
                            }}>
                                <p style={{ color: '#fff', margin: 0, fontWeight: '700', fontSize: '0.9rem' }}>{t('inst_commitment')}</p>
                            </div>
                        </div>

                        <h3 style={{
                            color: '#003f6f',
                            fontSize: '1.35rem',
                            fontWeight: '700',
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <span style={{ width: '4px', height: '22px', background: '#003f6f', borderRadius: '4px' }}></span>
                            {t('inst_history_title')}
                        </h3>
                        <p style={{
                            lineHeight: '1.7',
                            color: '#4a4a4a',
                            textAlign: 'justify',
                            fontSize: '0.92rem',
                            margin: '0 0 15px 0',
                            fontWeight: '400'
                        }}>
                            {language === 'es' ?
                                'La Universidad Nacional Fronteriza Autónoma de Yunguyo (UNFAY) es una institución pública creada mediante la Ley N.º 32090 en el año 2024. Su nacimiento responde a un anhelo de décadas de la población de Yunguyo y del Altiplano por contar con una formación profesional de calidad que integre el contexto fronterizo y comercial.' :
                                'The Universidad Nacional Fronteriza Autónoma de Yunguyo (UNFAY) is a public institution created by Law No. 32090 in 2024. Its creation responds to a decades-long desire of the people of Yunguyo and the Altiplano for high-quality professional training that integrates the border and commercial context.'}
                        </p>
                        <div style={{
                            padding: '14px 20px',
                            background: 'linear-gradient(90deg, #f8f9fa 0%, #fff 100%)',
                            borderRadius: '10px',
                            borderLeft: '4px solid #003f6f',
                            fontStyle: 'italic',
                            color: '#5a5a5a',
                            fontSize: '0.88rem',
                            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.02)'
                        }}>
                            {language === 'es' ?
                                '"Evolucionando desde la historia hacia un futuro de excelencia académica."' :
                                '"Evolving from history towards a future of academic excellence."'}
                        </div>
                    </div>

                    {/* Columna Derecha: Misión y Visión */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        <div style={{
                            background: 'linear-gradient(145deg, #ffffff, #f0f4f8)',
                            padding: '25px 30px',
                            borderRadius: '14px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                            border: '1px solid #e1e8ed',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img src="/logo_unfay.png" alt="UNFAY Logo" style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                width: '100px',
                                opacity: 0.1,
                                filter: 'grayscale(1)',
                                transform: 'rotate(-10deg)'
                            }} />
                            <h3 style={{ color: '#003f6f', marginBottom: '10px', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.5px' }}>{t('inst_mission_title')}</h3>
                            <p style={{ color: '#4a4a4a', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>
                                {language === 'es' ?
                                    'Formamos profesionales íntegros, con capacidad crítica y compromiso social, mediante la investigación científica y la excelencia académica, para contribuir al desarrollo sostenible de nuestra región.' :
                                    'We train upright professionals with critical capacity and social commitment, through scientific research and academic excellence, to contribute to the sustainable development of our region.'}
                            </p>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #003f6f 0%, #005a9c 100%)',
                            padding: '25px 30px',
                            borderRadius: '14px',
                            boxShadow: '0 12px 30px rgba(0,63,111,0.25)',
                            color: '#fff',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img src="/logo_unfay.png" alt="UNFAY Logo" style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '-10px',
                                width: '100px',
                                opacity: 0.2,
                                filter: 'brightness(0) invert(1)',
                                transform: 'rotate(-10deg)'
                            }} />
                            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '1.2rem', fontWeight: '800', letterSpacing: '0.5px' }}>{t('inst_vision_title')}</h3>
                            <p style={{ color: 'rgba(255,255,255,0.95)', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>
                                {language === 'es' ?
                                    'Ser una universidad líder en educación fronteriza e intercultural en el ámbito andino, reconocida por su calidad académica y su impacto en la transformación social y económica.' :
                                    'To be a leading university in border and intercultural education in the Andean region, recognized for its academic quality and its impact on social and economic transformation.'}
                            </p>
                        </div>

                        <div style={{
                            background: 'rgba(240, 247, 255, 0.5)',
                            padding: '12px',
                            borderRadius: '12px',
                            textAlign: 'center',
                            border: '1px solid rgba(0,63,111,0.1)',
                            backdropFilter: 'blur(5px)'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                gap: '10px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: '#003f6f',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                <span>Ética</span> <span>•</span> <span>Excelencia</span> <span>•</span> <span>Identidad</span> <span>•</span> <span>Liderazgo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Universidad;
