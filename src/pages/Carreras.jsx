import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Carreras = () => {
    const { t, language } = useLanguage();
    const areas = [
        {
            area: language === 'es' ? "CIENCIAS DE LA SALUD" : "HEALTH SCIENCES",
            color: "#004a80",
            carreras: [
                {
                    nombre: "Medicina Humana",
                    descripcion: language === 'es' ? "Formación de médicos con alta capacidad científico-humanista." : "Training of physicians with high scientific-humanistic capacity.",
                    imagen: "/carreras/medicina.jpg"
                },
                {
                    nombre: "Medicina Alternativa",
                    descripcion: language === 'es' ? "Integra conocimientos científicos con la medicina tradicional." : "Integrates scientific knowledge with traditional medicine.",
                    imagen: "/carreras/alternativa.jpg"
                }
            ]
        },
        {
            area: language === 'es' ? "INGENIERÍA Y TECNOLOGÍA" : "ENGINEERING AND TECHNOLOGY",
            color: "#004a80",
            carreras: [
                {
                    nombre: "Ingeniería Sanitaria",
                    descripcion: language === 'es' ? "Especialistas en la gestión y conservación del agua." : "Specialists in water management and conservation.",
                    imagen: "/carreras/sanitaria.jpg"
                },
                {
                    nombre: "Ind. Textil",
                    descripcion: language === 'es' ? "Potencia la cadena de valor de la fibra de alpaca." : "Boosts the value chain of alpaca fiber.",
                    imagen: "/carreras/textil.jpg"
                }
            ]
        },
        {
            area: language === 'es' ? "SOCIALES Y EMPRESARIALES" : "SOCIAL AND BUSINESS SCIENCES",
            color: "#004a80",
            carreras: [
                {
                    nombre: "Comercio Internacional",
                    descripcion: language === 'es' ? "Liderazgo en el intercambio comercial fronterizo." : "Leadership in border trade exchange.",
                    imagen: "/carreras/comercio.jpg"
                },
                {
                    nombre: "Turismo",
                    descripcion: language === 'es' ? "Gestión sostenible del patrimonio cultural." : "Sustainable management of cultural heritage.",
                    imagen: "/carreras/turismo.jpg"
                }
            ]
        }
    ];

    return (
        <div className="container" style={{ paddingBottom: '30px' }}>
            <section style={{ paddingTop: '15px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
                    <h2 className="section-title" style={{ margin: 0, textAlign: 'left', fontSize: '1.4rem' }}>{language === 'es' ? 'Oferta Académica' : 'Academic Programs'}</h2>
                    <p style={{ color: '#666', fontSize: '0.82rem', marginTop: '5px' }}>
                        {language === 'es' ?
                            'Programas estratégicos para el desarrollo de la frontera.' :
                            'Strategic programs for border development.'}
                    </p>
                </div>

                {areas.map((area, index) => (
                    <div key={index} style={{ marginBottom: '50px' }}>
                        <h3 style={{ color: '#004a80', fontSize: '1.4rem', borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px', fontWeight: '700' }}>
                            {area.area}
                        </h3>

                        <div className="card-grid">
                            {area.carreras.map((carrera, cIndex) => (
                                <div className="card" key={cIndex} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className="card-img" style={{ height: '180px' }}>
                                        <img src={carrera.imagen} alt={carrera.nombre} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div className="card-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h4 style={{ color: '#333', marginBottom: '10px', fontSize: '1.1rem', fontWeight: '700' }}>{carrera.nombre}</h4>
                                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', marginBottom: '20px', flexGrow: 1 }}>{carrera.descripcion}</p>
                                        <button className="btn-more" style={{ fontSize: '0.75rem', padding: '5px 10px', background: 'transparent', color: '#005a9c', border: '1px solid #005a9c' }}>
                                            {language === 'es' ? 'VER MALLA' : 'VIEW CURRICULUM'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="convocatoria-card" style={{ background: '#f8f9fa', border: '1px solid #dee2e6', textAlign: 'center', marginTop: '30px' }}>
                    <h3>{language === 'es' ? '¿Interesado en estudiar con nosotros?' : 'Interested in studying with us?'}</h3>
                    <p>{language === 'es' ? 'Pronto anunciaremos las fechas de nuestro primer examen de admisión.' : 'Soon we will announce the dates of our first admission exam.'}</p>
                    <button className="btn-download btn-blue" style={{ marginTop: '15px' }}>
                        {language === 'es' ? 'Regístrate para recibir información' : 'Register for more information'}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carreras;
