import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Admision = () => {
    const { t, language } = useLanguage();
    const [activeSection, setActiveSection] = useState('bienvenida');

    const menuItems = [
        { id: 'bienvenida', label: language === 'es' ? '¿Por qué estudiar en la UNFAY?' : 'Why study at UNFAY?' },
        { id: 'carreras', label: language === 'es' ? 'Nuestras Carreras' : 'Our Careers' },
        { id: 'guia', label: language === 'es' ? 'Guía del Postulante' : 'Applicant Guide' },
        { id: 'requisitos', label: language === 'es' ? 'Requisitos' : 'Requirements' },
        { id: 'vacantes', label: language === 'es' ? 'Vacantes y Plazas' : 'Vacancies and Seats' },
        { id: 'registro', label: language === 'es' ? 'Registro de Interés' : 'Interest Registration' },
    ];

    const areas = [
        {
            area: language === 'es' ? "CIENCIAS DE LA SALUD" : "HEALTH SCIENCES",
            carreras: [
                { nombre: "Medicina Humana", descripcion: "Formación de médicos con alta capacidad científico-humanista.", imagen: "/carreras/medicina.jpg" },
                { nombre: "Medicina Alternativa", descripcion: "Integra conocimientos científicos con la medicina tradicional.", imagen: "/carreras/alternativa.jpg" }
            ]
        },
        {
            area: language === 'es' ? "INGENIERÍA Y TECNOLOGÍA" : "ENGINEERING AND TECHNOLOGY",
            carreras: [
                { nombre: "Ingeniería Sanitaria", descripcion: "Especialistas en la gestión y conservación del agua.", imagen: "/carreras/sanitaria.jpg" },
                { nombre: "Ind. Textil", descripcion: "Potencia la cadena de valor de la fibra de alpaca.", imagen: "/carreras/textil.jpg" }
            ]
        },
        {
            area: language === 'es' ? "SOCIALES Y EMPRESARIALES" : "SOCIAL AND BUSINESS SCIENCES",
            carreras: [
                { nombre: "Comercio Internacional", descripcion: "Liderazgo en el intercambio comercial fronterizo.", imagen: "/carreras/comercio.jpg" },
                { nombre: "Turismo", descripcion: "Gestión sostenible del patrimonio cultural.", imagen: "/carreras/turismo.jpg" }
            ]
        }
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'bienvenida':
                return (
                    <div className="fade-in">
                        <h2 style={{ color: '#004a80', marginBottom: '20px' }}>{language === 'es' ? '¿Por qué estudiar en la UNFAY?' : 'Why study at UNFAY?'}</h2>
                        <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '300px', marginBottom: '25px' }}>
                            <img src="/universidad_hero.jpg" alt="UNFAY" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.6))', display: 'flex', alignItems: 'flex-end', padding: '30px' }}>
                                <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                    {language === 'es' ? 'Liderazgo y excelencia en la frontera del sur peruano' : 'Leadership and excellence at the southern Peruvian border'}
                                </p>
                            </div>
                        </div>
                        <p style={{ lineHeight: '1.7', color: '#444' }}>
                            {language === 'es'
                                ? 'La UNFAY no es solo una institución de educación superior; es el motor de cambio para la provincia de Yunguyo y la región Puno. Al ser una universidad de reciente creación, contamos con una visión moderna, infraestructura en desarrollo con estándares actuales y una malla curricular adaptada a los desafíos del comercio global y la sostenibilidad ambiental.'
                                : 'UNFAY is not just a higher education institution; it is the engine of change for the province of Yunguyo and the Puno region. As a recently created university, we have a modern vision, infrastructure under development with current standards, and a curriculum adapted to the challenges of global trade and environmental sustainability.'}
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
                            <div style={{ padding: '20px', background: '#f0f7ff', borderRadius: '10px', borderLeft: '4px solid #005a9c' }}>
                                <h4 style={{ color: '#005a9c', marginBottom: '10px' }}>{language === 'es' ? 'Ubicación Estratégica' : 'Strategic Location'}</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0 }}>{language === 'es' ? 'Única universidad fronteriza conectada con el mercado internacional.' : 'The only border university connected to the international market.'}</p>
                            </div>
                            <div style={{ padding: '20px', background: '#f0f7ff', borderRadius: '10px', borderLeft: '4px solid #005a9c' }}>
                                <h4 style={{ color: '#005a9c', marginBottom: '10px' }}>{language === 'es' ? 'Valores Sólidos' : 'Solid Values'}</h4>
                                <p style={{ fontSize: '0.85rem', margin: 0 }}>{language === 'es' ? 'Formamos profesionales con alta ética y compromiso social.' : 'We train professionals with high ethics and social commitment.'}</p>
                            </div>
                        </div>
                    </div>
                );
            case 'carreras':
                return (
                    <div className="fade-in">
                        <h2 style={{ color: '#004a80', marginBottom: '10px' }}>{language === 'es' ? 'Nuestra Oferta Académica' : 'Our Academic Programs'}</h2>
                        <p style={{ color: '#666', marginBottom: '30px' }}>{language === 'es' ? 'Contamos con 6 escuelas profesionales distribuidas en 3 facultades estratégicas.' : 'We have 6 professional schools distributed across 3 strategic faculties.'}</p>

                        {areas.map((area, idx) => (
                            <div key={idx} style={{ marginBottom: '40px' }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#005a9c', borderBottom: '2px solid #eee', paddingBottom: '8px', marginBottom: '20px' }}>{area.area}</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    {area.carreras.map((c, cidx) => (
                                        <div key={cidx} className="card" style={{ display: 'flex', gap: '15px', padding: '10px' }}>
                                            <img src={c.imagen} alt={c.nombre} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                            <div>
                                                <h4 style={{ fontSize: '0.95rem', margin: '0 0 5px 0' }}>{c.nombre}</h4>
                                                <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>{c.descripcion}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'guia':
                return (
                    <div className="fade-in">
                        <h2 style={{ color: '#004a80', marginBottom: '20px' }}>{language === 'es' ? 'Guía del Postulante 2026' : 'Applicant Guide 2026'}</h2>
                        <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '12px', padding: '30px', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📄</div>
                            <h3 style={{ marginBottom: '15px' }}>{language === 'es' ? 'Descarga el Prospecto' : 'Download the Prospectus'}</h3>
                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '25px' }}>
                                {language === 'es'
                                    ? 'Encuentra toda la información sobre el temario, procesos de evaluación y cronogramas oficiales.'
                                    : 'Find all information about the syllabus, evaluation processes, and official schedules.'}
                            </p>
                            <button className="btn-blue" style={{ padding: '12px 30px', borderRadius: '50px' }}>
                                {language === 'es' ? 'DESCARGAR PDF' : 'DOWNLOAD PDF'}
                            </button>
                        </div>
                    </div>
                );
            case 'registro':
                return (
                    <div className="fade-in">
                        <h2 style={{ color: '#004a80', marginBottom: '10px' }}>{language === 'es' ? 'Registro de Interés' : 'Interest Registration'}</h2>
                        <p style={{ color: '#666', marginBottom: '25px' }}>{language === 'es' ? 'Déjanos tus datos para recibir alertas sobre fechas de exámenes y eventos.' : 'Leave your details to receive alerts about exam dates and events.'}</p>
                        <form style={{ background: '#f8f9fa', padding: '30px', borderRadius: '12px', border: '1px solid #eee' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '5px' }}>{language === 'es' ? 'Nombres' : 'First Name'}</label>
                                    <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '5px' }}>{language === 'es' ? 'Apellidos' : 'Last Name'}</label>
                                    <input type="text" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '5px' }}>{language === 'es' ? 'Correo Electrónico' : 'Email Address'}</label>
                                <input type="email" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }} />
                            </div>
                            <div style={{ marginBottom: '25px' }}>
                                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '5px' }}>{language === 'es' ? 'Carrera de Interés' : 'Career of Interest'}</label>
                                <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}>
                                    <option>Seleccione una carrera...</option>
                                    <option>Medicina Humana</option>
                                    <option>Ingeniería Sanitaria</option>
                                    <option>Comercio Internacional</option>
                                </select>
                            </div>
                            <button type="button" className="btn-blue" style={{ width: '100%', padding: '12px', borderRadius: '6px' }}>
                                {language === 'es' ? 'ENVIAR REGISTRO' : 'SUBMIT REGISTRATION'}
                            </button>
                        </form>
                    </div>
                );
            default:
                return <div style={{ padding: '50px', textAlign: 'center', color: '#999' }}>{language === 'es' ? 'Información próximamente' : 'Information coming soon'}</div>;
        }
    };

    return (
        <div className="container" style={{ padding: '40px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
                {/* Sidebar Navigation */}
                <aside style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
                    <h1 style={{ fontSize: '1.4rem', color: '#004a80', marginBottom: '30px', paddingBottom: '10px', borderBottom: '2px solid #004a80' }}>
                        {language === 'es' ? 'Admisión Pregrado' : 'Undergraduate Admission'}
                    </h1>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {menuItems.map(item => (
                                <li key={item.id} style={{ marginBottom: '5px' }}>
                                    <button
                                        onClick={() => setActiveSection(item.id)}
                                        style={{
                                            width: '100%',
                                            textAlign: 'left',
                                            padding: '12px 15px',
                                            background: activeSection === item.id ? '#f0f4f8' : 'transparent',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: activeSection === item.id ? '#005a9c' : '#555',
                                            fontWeight: activeSection === item.id ? '700' : '400',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            background: activeSection === item.id ? '#005a9c' : '#ccc'
                                        }}></span>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div style={{ marginTop: '50px', padding: '20px', background: '#004a80', borderRadius: '12px', color: 'white' }}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '0.9rem' }}>{language === 'es' ? '¿Tienes dudas?' : 'Any questions?'}</h4>
                        <p style={{ fontSize: '0.75rem', opacity: 0.9, lineHeight: '1.4', marginBottom: '15px' }}>
                            {language === 'es'
                                ? 'Nuestro equipo de admisión está listo para ayudarte en tu proceso.'
                                : 'Our admission team is ready to help you with your process.'}
                        </p>
                        <a href="tel:+51051123456" style={{ color: 'white', fontWeight: 'bold', fontSize: '0.85rem', textDecoration: 'none' }}>📞 +51 051 123456</a>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main style={{ minHeight: '600px' }}>
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default Admision;
