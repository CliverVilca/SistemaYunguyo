import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Autoridades = () => {
    const { t, language } = useLanguage();
    const [selectedAuth, setSelectedAuth] = useState(null);

    const autoridades = [
        {
            image: "/autoridades/Presidente_UNFAY.jpg",
            name: "Dr. Marcelino Aranibar Aranibar",
            position: "Presidente",
            desc: language === 'es' ? "Presidente de la Comisión Organizadora UNFAY." : "President of the UNFAY Organizing Commission.",
            bio: "Araníbar was graduated in Veterinary Sciences (UNAP-Perú), Magister in Animal Production (PUC-Chile) and Doctor in Animal Production (UPM-Spain). Methodology and Strategies for Rural Development-CATIE (Costa Rica). Visitant Research in OSU-USA. Clay binding from clay materials in Univ. Nac. la Plata and and fishes nutrition in Univ. de Buenos Aires (Argentina). Dean of the Medical Veterinary School of Puno. Director of Research Institute of Graduate School-UNAP. Dean of Veterinary Faculty-UNAP. He was Vice-President of Research in UNAJ and UNIFSL. He was professor in Animal Feeding and Trout Production. He was winner some Research Grants Projects: Fish oil in chicken diets (IFS-Sweden); Montchack 3A-T Native Clay (UPM-Spain); Native Clay and Binding Capacity of Mycotoxins (CONCYTEC); Pioval-2 Novel Raw Material (UNAP), Native Clay in Peruvian-Bolivian Highland (UPM-Spain); Organic feeds processed by Novo Trout (CONCYTEC). Improving Sustainability Trout Production (CONCYTEC). Native feeds for animal and human nutrition (UNAP) and Trout Production and Processing and Environmental Impact (CONCYTEC). President of 19th National Congress in Vet Sci. (Perú, 2008) and 7th World Congress in South American Camelids (Perú, 2015). Visitant Professor of Graduate Schools: Livestock Program (UTO Oruro - Bolivia, 1996); Poult. Sci. (UNICA - Perú, 1996); Poult. Husbandry (EMI La Paz - Bolivia, 1998); Animal Sci. (UMSA La Paz-Bolivia, 2012). His scientific production including works published in Latin American Congress (Chile, 1995; Perú, 1999; Bolivia, 2003 and Panamá, 2005), and papers in Poult. Sci., Br. Poult. Sci., Anim. Feed Sci. and Tech and RIVEP, Fish. and Aquatic Sci, Spermova, Pak. J. Biol. Sci. Five Scholarships from DAAD-Germany (1993); AECI-Spain (1998), CTB-Bélgica (2005), USDA (2007) and CONCYTEC (2019)."
        },
        {
            image: "/autoridades/VPA_UNFAY.jpg",
            name: "Dra. Edith Luz Zevallos Arias",
            position: "Vicepresidente Académico",
            desc: language === 'es' ? "Especialista en Medio Ambiente y Desarrollo Sostenible." : "Specialist in Environment and Sustainable Development.",
            bio: "Soy Ingeniero Angrónomo, Doctor en Medio Ambiente y Desarrollo Sostenible, Maestro en Sistemas ecológicos y agropecuarios, estudios concluidos Maestría en Investigación y Tecnología educativa, y Derecho y Ciencias Políticas. Me inicié en la docencia universitaria en 1995, en la actualidad soy Docente Principal de la Facultad de Ciencias Agropecuarias, Escuela de Agronomía Pasco, en la Universidad Nacional Daniel Alcides Carrión, dicto las asignaturas de Ecología, Agroecología, Cultivos Andinos, Investigación Agrícola, Formulación y Evaluación de Proyectos, Desarrollo Sostenible, Recursos Fitogeneticos. Me desempeñé en cargos como: Jefatura de Registros Académicos de la Facultad de Ciencias Agropecuaria, Dirección General de Registros Académicos de la UNDAC y la Dirección General de Pedagogía Universitaria, Secretaria Docente de la facultad de Ciencias Agropecuarias, Directora de la Escuela de Formación Profesional de Agronomía Pasco, Directora General del Instituto Central de Investigación de la UNDAC, Decana de al Facultad de Ciencias Agropecuarias. Realizao investigacines en Recursos Fitogenéticos en general con afinidad en papas nativas de la región Pasco y temas ambientales y Desarrollo Sostenible."
        },
        {
            image: "/autoridades/VPI_UNFAY.jpg",
            name: "Dr. Alcides Huamani Peralta",
            position: "Vicepresidente de Investigación",
            desc: language === 'es' ? "Experto en Economía del Medio Ambiente y Gestión Pública." : "Expert in Environmental Economics and Public Management.",
            bio: "Ingeniero Economista por la Universidad Nacional del Altiplano-Puno-Perú, Magister en Economía del Medio Ambiente y Recursos Naturales por la Universidad de los Andes-Bogotá-Colombia, Doctor en Economía y Gestión por la Universidad Nacional del Altiplano Puno-Perú, ex consultor del Ministerio de Economía y Finanzas DGPM, ex consultor del Ministerio de Vivienda, Construcción, y Saneamiento; ex Gerente General Regional del Gobierno Regional Puno, actual docente del pre grado en la Facultad de Ingeniería Económica y posgrado en la Universidad Nacional del Altiplano y otras univer54sidades del Sur del Perú, en cursos de gestión pública, gerencia de proyectos, proyectos de Inversión valoración de bienes y servicios ambientales, economía de los recursos naturales, consultor en formulación y evaluación de proyectos de inversión en gobiernos locales."
        }
    ];

    const openModal = (auth) => {
        setSelectedAuth(auth);
    };

    const closeModal = () => {
        setSelectedAuth(null);
    };

    // Body scroll lock when modal is open
    useEffect(() => {
        if (selectedAuth) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedAuth]);

    return (
        <div className="container" style={{ paddingBottom: '20px' }}>
            <section style={{ paddingTop: '0px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: '2px', fontSize: '1.3rem' }}>{t('page_authorities_title')}</h2>
                    <p style={{
                        color: '#666',
                        maxWidth: '850px',
                        margin: '0 auto',
                        fontSize: '0.85rem',
                        lineHeight: '1.3',
                        opacity: 0.9
                    }}>
                        {language === 'es' ?
                            'La Comisión Organizadora de la Universidad Nacional Fronteriza Autónoma de Yunguyo es el órgano responsable de conducir el proceso de implementación institucional, académica y administrativa, conforme a lo establecido por la Ley Universitaria y las disposiciones del Ministerio de Educación.' :
                            'The Organizing Commission of the Autonomous Frontier National University of Yunguyo is the body responsible for leading the process of institutional, academic, and administrative implementation, in accordance with the University Law and the provisions of the Ministry of Education.'}
                    </p>
                </div>

                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    justifyContent: 'center',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {autoridades.map((auth, index) => (
                        <AuthorityCard key={index} {...auth} onOpen={() => openModal(auth)} />
                    ))}
                </div>

                <div style={{
                    marginTop: '20px',
                    padding: '10px 15px',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #004a80',
                    maxWidth: '1100px',
                    margin: '20px auto 0'
                }}>
                    <p style={{ color: '#555', lineHeight: '1.3', fontSize: '0.75rem', margin: 0 }}>
                        {language === 'es' ?
                            'La Comisión tiene como funciones principales la elaboración de documentos de gestión, el diseño de los programas académicos, la gestión presupuestal y administrativa, y la articulación con los organismos del Estado.' :
                            'The Commission\'s main functions include the preparation of management documents, the design of academic programs, budget and administrative management, and coordination with State agencies.'}
                    </p>
                </div>
            </section>

            {/* Trayectoria Modal */}
            {selectedAuth && (
                <div className="modal-overlay" onClick={closeModal} style={{ backdropFilter: 'blur(3px)' }}>
                    <div className="modal-content" style={{ maxWidth: '880px', borderRadius: '4px' }} onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body" style={{ padding: '40px', maxHeight: '85vh', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px', alignItems: 'center', borderBottom: '3px solid #003f6f', paddingBottom: '25px' }}>
                                <div style={{
                                    width: '140px',
                                    height: '180px',
                                    borderRadius: '4px', // More formal, squarish borders
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                                    backgroundColor: '#fff',
                                    flexShrink: 0,
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <img src={selectedAuth.image} alt={selectedAuth.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                                </div>
                                <div>
                                    <h3 style={{
                                        color: '#003f6f',
                                        margin: '0 0 10px 0',
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        fontFamily: "'Playfair Display', 'Georgia', 'Times New Roman', serif", // Academic, authoritative font
                                        letterSpacing: '-0.5px'
                                    }}>
                                        {selectedAuth.name}
                                    </h3>
                                    <p style={{
                                        color: '#005a9c',
                                        fontWeight: '800',
                                        fontSize: '0.85rem',
                                        margin: '0',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontFamily: "'Montserrat', sans-serif"
                                    }}>
                                        {selectedAuth.position}
                                    </p>
                                </div>
                            </div>
                            <div className="modal-text" style={{
                                fontFamily: "'Lora', 'Georgia', 'Times New Roman', serif", // Classic readable serif for formal documents
                                fontSize: '0.875rem', // ~14px (2 points less)
                                lineHeight: '1.9',
                                color: '#1a1a1a',
                                whiteSpace: 'pre-line',
                                textAlign: 'justify',
                                paddingRight: '20px'
                            }}>
                                {selectedAuth.bio}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const AuthorityCard = ({ image, name, position, onOpen }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="authority-card-premium"
            onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                height: '360px',
                background: '#ffffff',
                borderRadius: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: isHovered ? '0 15px 45px rgba(0, 0, 0, 0.18)' : '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                border: '1px solid #f0f0f0'
            }}
        >
            {/* Image Container */}
            <div className="auth-img-wrapper" style={{
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <img src={image} alt={name} className="auth-img-premium" style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'all 0.6s ease',
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                    filter: isHovered ? 'none' : 'grayscale(100%) contrast(1.1) brightness(1.05)'
                }} />

                {/* Professional Duotone Overlay (Institutional Blue) */}
                <div className="blue-overlay" style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: '#003f6f', // Deep Institutional Blue
                    mixBlendMode: 'multiply', // This creates the professional "ink" effect
                    opacity: isHovered ? 0 : 0.7,
                    transition: 'all 0.5s ease',
                    pointerEvents: 'none'
                }}></div>

                {/* Light blue wash to soften the shadows in the duotone */}
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 90, 156, 0.1)',
                    opacity: isHovered ? 0 : 1,
                    transition: 'all 0.5s ease',
                    pointerEvents: 'none'
                }}></div>
            </div>

            {/* Blue Info Bar Overlay */}
            <div className="auth-info-bar" style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                background: isHovered ? 'rgba(0, 50, 90, 1)' : 'rgba(0, 63, 111, 0.98)',
                padding: '12px 15px',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.4s ease',
                zIndex: '5',
                borderTop: isHovered ? '2px solid #a5c7fd' : '2px solid transparent'
            }}>
                <div style={{ flexGrow: 1 }}>
                    <h3 style={{
                        margin: '0',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        lineHeight: '1.1',
                        letterSpacing: '0.3px'
                    }}>
                        {name}
                    </h3>
                    <div style={{
                        fontSize: '0.65rem',
                        opacity: '0.8',
                        color: '#a5c7fd',
                        marginTop: '3px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                    }}>
                        {position}
                    </div>
                </div>

                <div className="auth-chevron" style={{
                    fontSize: '1.2rem',
                    paddingLeft: '10px',
                    transform: isHovered ? 'translateX(4px)' : 'none',
                    transition: 'transform 0.3s ease',
                    opacity: isHovered ? 1 : 0.7
                }}>
                    ›
                </div>
            </div>
        </div>
    );
};

export default Autoridades;
