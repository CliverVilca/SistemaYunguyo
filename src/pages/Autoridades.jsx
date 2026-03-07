import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Autoridades = () => {
    const { t, language } = useLanguage();
    const [selectedAuth, setSelectedAuth] = useState(null);

    const autoridades = [
        {
            image: "/autoridades/Presidente_UNFAY.jpg",
            name: "Dr. Marcelino Aranibar Aranibar",
            position: t('auth_pres'),
            desc: "Doctor en Ciencias Veterinarias con especialización en Producción Animal y Desarrollo Rural.",
            bio: "Araníbar was graduated in Veterinary Sciences (UNAP-Perú), Magister in Animal Production (PUC-Chile) and Doctor in Animal Production (UPM-Spain). Methodology and Strategies for Rural Development-CATIE (Costa Rica). Visitant Research in OSU-USA. Clay binding from clay materials in Univ. Nac. la Plata and and fishes nutrition in Univ. de Buenos Aires (Argentina). Dean of the Medical Veterinary School of Puno. Director of Research Institute of Graduate School-UNAP. Dean of Veterinary Faculty-UNAP. He was Vice-President of Research in UNAJ and UNIFSL. He was professor in Animal Feeding and Trout Production.\n\nHe was winner some Research Grants Projects: Fish oil in chicken diets (IFS-Sweden); Montchack 3A-T Native Clay (UPM-Spain); Native Clay and Binding Capacity of Mycotoxins (CONCYTEC); Pioval-2 Novel Raw Material (UNAP), Native Clay in Peruvian-Bolivian Highland (UPM-Spain); Organic feeds processed by Novo Trout (CONCYTEC). Improving Sustainability Trout Production (CONCYTEC). Native feeds for animal and human nutrition (UNAP) and Trout Production and Processing and Environmental Impact (CONCYTEC).\n\nPresident of 19th National Congress in Vet Sci. (Perú, 2008) and 7th World Congress in South American Camelids (Perú, 2015). Visitant Professor of Graduate Schools: Livestock Program (UTO Oruro - Bolivia, 1996); Poult. Sci. (UNICA - Perú, 1996); Poult. Husbandry (EMI La Paz - Bolivia, 1998); Animal Sci. (UMSA La Paz-Bolivia, 2012). His scientific production including works published in Latin American Congress (Chile, 1995; Perú, 1999; Bolivia, 2003 and Panamá, 2005), and papers in Poult. Sci., Br. Poult. Sci., Anim. Feed Sci. and Tech and RIVEP, Fish. and Aquatic Sci, Spermova, Pak. J. Biol. Sci. Five Scholarships from DAAD-Germany (1993); AECI-Spain (1998), CTB-Bélgica (2005), USDA (2007) and CONCYTEC (2019)."
        },
        {
            image: "/autoridades/VPA_UNFAY.jpg",
            name: "Dra. Edith Luz Zevallos Arias",
            position: t('auth_vpa'),
            desc: "Doctora en Medio Ambiente y Desarrollo Sostenible con amplia trayectoria en gestión pedagógica.",
            bio: "Ingeniero Agrónomo, Doctor en Medio Ambiente y Desarrollo Sostenible, Maestro en Sistemas ecológicos y agropecuarios, estudios concluidos Maestría en Investigación y Tecnología educativa, y Derecho y Ciencias Políticas. Me inicié en la docencia universitaria en 1995, en la actualidad soy Docente Principal de la Facultad de Ciencias Agropecuarias, Escuela de Agronomía Pasco, en la Universidad Nacional Daniel Alcides Carrión.\n\nHe dictado las asignaturas de Ecología, Agroecología, Cultivos Andinos, Investigación Agrícola, Formulación y Evaluación de Proyectos, Desarrollo Sostenible, Recursos Fitogeneticos. Me desempeñé en cargos como: Jefatura de Registros Académicos de la Facultad de Ciencias Agropecuaria, Dirección General de Registros Académicos de la UNDAC y la Dirección General de Pedagogía Universitaria, Secretaria Docente de la facultad de Ciencias Agropecuarias, Directora de la Escuela de Formación Profesional de Agronomía Pasco, Directora General del Instituto Central de Investigación de la UNDAC, Decana de la Facultad de Ciencias Agropecuarias. Realizo investigaciones en Recursos Fitogenéticos en general con afinidad en papas nativas de la región Pasco y temas ambientales y Desarrollo Sostenible."
        },
        {
            image: "/autoridades/VPI_UNFAY.jpg",
            name: "Dr. Alcides Huamani Peralta",
            position: t('auth_vpi'),
            desc: "Doctor en Economía y Gestión, experto en valoración de servicios ambientales y gestión pública.",
            bio: "Ingeniero Economista por la Universidad Nacional del Altiplano-Puno-Perú, Magister en Economía del Medio Ambiente y Recursos Naturales por la Universidad de los Andes-Bogotá-Colombia, Doctor en Economía y Gestión por la Universidad Nacional del Altiplano Puno-Perú.\n\nEx consultor del Ministerio de Economía y Finanzas DGPM, ex consultor del Ministerio de Vivienda, Construcción, y Saneamiento; ex Gerente General Regional del Gobierno Regional Puno, actual docente del pre grado en la Facultad de Ingeniería Económica y posgrado en la Universidad Nacional del Altiplano y otras universidades del Sur del Perú, en cursos de gestión pública, gerencia de proyectos, proyectos de Inversión valoración de bienes y servicios ambientales, economía de los recursos naturales, consultor en formulación y evaluación de proyectos de inversión en gobiernos locales."
        }
    ];

    const openModal = (auth) => {
        setSelectedAuth(auth);
    };

    const closeModal = () => {
        setSelectedAuth(null);
    };

    return (
        <div className="container" style={{ paddingBottom: '30px' }}>
            <section style={{ paddingTop: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ marginBottom: '10px', fontSize: '1.4rem' }}>{t('page_authorities_title')}</h2>
                    <p style={{
                        color: '#666',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontSize: '0.82rem',
                        lineHeight: '1.4'
                    }}>
                        {language === 'es' ?
                            'Órgano responsable de conducir la implementación institucional, académica y administrativa de la UNFAY.' :
                            'Body responsible for leading the institutional, academic, and administrative implementation of UNFAY.'}
                    </p>
                </div>

                <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {autoridades.map((auth, index) => (
                        <AuthorityCard key={index} {...auth} onOpen={() => openModal(auth)} />
                    ))}
                </div>

                <div style={{ marginTop: '30px', padding: '15px 25px', background: '#f8f9fa', borderRadius: '8px', borderLeft: '5px solid #004a80' }}>
                    <p style={{ color: '#555', lineHeight: '1.4', fontSize: '0.8rem', margin: 0 }}>
                        {language === 'es' ?
                            'La Comisión tiene como funciones principales la elaboración de documentos de gestión, el diseño de los programas académicos, la gestión presupuestal y administrativa.' :
                            'The Commission\'s main functions include the preparation of management documents, the design of academic programs, and budget and administrative management.'}
                    </p>
                </div>
            </section>

            {/* Trayectoria Modal */}
            {selectedAuth && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" style={{ maxWidth: '700px' }} onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div className="modal-body" style={{ padding: '30px' }}>
                            <div style={{ display: 'flex', gap: '25px', marginBottom: '25px', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                <img src={selectedAuth.image} alt={selectedAuth.name} style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                                <div>
                                    <h3 style={{ color: '#004a80', margin: 0, fontSize: '1.4rem' }}>{selectedAuth.name}</h3>
                                    <p style={{ color: '#005a9c', fontWeight: '700', fontSize: '0.85rem', margin: '5px 0', textTransform: 'uppercase' }}>{selectedAuth.position}</p>
                                </div>
                            </div>
                            <div className="modal-text" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#444', whiteSpace: 'pre-line' }}>
                                {selectedAuth.bio}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const AuthorityCard = ({ image, name, position, desc, onOpen }) => {
    const { t, language } = useLanguage();
    return (
        <div className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            background: '#fff'
        }}>
            <div style={{
                position: 'relative',
                height: '280px',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                <img src={image} alt={name} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease'
                }} />
            </div>
            <div className="card-body" style={{ flexGrow: 1, padding: '15px', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                    color: '#004a80',
                    fontSize: '0.95rem',
                    marginBottom: '4px',
                    fontWeight: '800'
                }}>
                    {name}
                </h3>
                <div style={{
                    color: '#666',
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                }}>
                    {position}
                </div>
                <p style={{
                    fontSize: '0.78rem',
                    color: '#555',
                    lineHeight: '1.4',
                    marginBottom: '15px',
                    flexGrow: 1
                }}>
                    {desc}
                </p>
                <button
                    onClick={onOpen}
                    className="btn-download btn-blue"
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                        fontSize: '0.7rem'
                    }}
                >
                    {t('view_bio')}
                </button>
            </div>
        </div>
    );
};

export default Autoridades;
