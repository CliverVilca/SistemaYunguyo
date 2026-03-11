import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contacto = () => {
    const { t, language } = useLanguage();

    // Iconos SVG de alta calidad (Llamada, Email, Ubicación)
    const PhoneIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    );

    const MailIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    );

    const MapPinIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#003f6f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    );

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '10px 0 40px' }}>

                {/* Header Ultra Compacto */}
                <div style={{ marginBottom: '15px', borderBottom: '2.5px solid #003f6f', paddingBottom: '4px' }}>
                    <h2 style={{ fontSize: '1.45rem', color: '#003f6f', fontWeight: '950', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.3px' }}>
                        CONTACTO INSTITUCIONAL
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.5fr',
                    gap: '20px',
                    alignItems: 'start'
                }}>

                    {/* Panel de Información - Optimizado */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '0.9rem', color: '#003f6f', fontWeight: '900', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Canales de Atención
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <ContactItem
                                    icon={<MapPinIcon />}
                                    label="DÓNDE ESTAMOS"
                                    value="Jr. Bolognesi 765, Yunguyo - Puno, Perú"
                                />
                                <ContactItem
                                    icon={<MailIcon />}
                                    label="CORREO ELECTRÓNICO"
                                    value="mesadepartes@unfay.edu.pe"
                                    link="mailto:mesadepartes@unfay.edu.pe"
                                />
                                <ContactItem
                                    icon={<PhoneIcon />}
                                    label="CENTRAL TELEFÓNICA"
                                    value="+51 051 123456"
                                />
                            </div>
                        </div>

                        {/* Tarjeta de Horario de Atención */}
                        <div style={{ background: '#003f6f', padding: '15px', borderRadius: '10px', color: 'white' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '900', opacity: 0.8, textTransform: 'uppercase', marginBottom: '4px' }}>Horario de Atención</div>
                            <div style={{ fontSize: '1rem', fontWeight: '800' }}>Lunes a Viernes</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '950', color: '#00aaff' }}>08:00 AM - 04:00 PM</div>
                            <p style={{ margin: '8px 0 0', fontSize: '0.75rem', fontWeight: '500', opacity: 0.9, lineHeight: '1.3' }}>
                                Los documentos recibidos fuera del horario o en días no laborables se consideran presentados el siguiente día hábil.
                            </p>
                        </div>

                        {/* Botón Mesa de Partes Virtual - Premium */}
                        <a href="#" style={{
                            background: '#c62828',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '12px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            fontWeight: '900',
                            fontSize: '0.85rem',
                            boxShadow: '0 4px 15px rgba(198,40,40,0.2)',
                            transition: 'all 0.2s'
                        }} className="mesa-btn-hover">
                            ACCEDER A MESA DE PARTES VIRTUAL ➔
                        </a>
                    </div>

                    {/* Panel del Mapa - Sin bordes innecesarios */}
                    <div style={{
                        height: '420px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.089038446715!2d-69.08969022501494!3d-16.24770824248494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915dd7151511c803%3A0xbc898603d3d7a1eb!2sJr.%20Bolognesi%20765%2C%20Yunguyo%2021801!5e0!3m2!1ses-419!2spe!4v1740289994984!5m2!1ses-419!2spe"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Mapa UNFAY"
                        ></iframe>
                    </div>

                </div>
            </div>
            <style>{`
                .mesa-btn-hover:hover { background: #d32f2f; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(198,40,40,0.3); }
                .mesa-btn-hover:active { transform: translateY(0); }
            `}</style>
        </div>
    );
};

const ContactItem = ({ icon, label, value, link }) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{
            background: 'white',
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
        }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '0.62rem', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{label}</div>
            {link ? (
                <a href={link} style={{ fontSize: '1rem', fontWeight: '800', color: '#003f6f', textDecoration: 'none', wordBreak: 'break-all' }}>{value}</a>
            ) : (
                <div style={{ fontSize: '1rem', fontWeight: '750', color: '#334155', lineHeight: '1.2' }}>{value}</div>
            )}
        </div>
    </div>
);

export default Contacto;
