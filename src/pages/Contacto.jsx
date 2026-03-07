import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contacto = () => {
    const { t, language } = useLanguage();
    return (
        <div className="container">
            <section>
                <h2 className="section-title">{t('page_contact_title')}</h2>
                <div className="contact-container">
                    <div className="contact-info-list">
                        <ContactInfoItem
                            icon="📍"
                            label={language === 'es' ? "Dirección" : "Address"}
                            value={<p>Jr. Bolognesi 765 - Yunguyo <br /> Puno, Perú</p>}
                        />
                        <ContactInfoItem
                            icon="📧"
                            label={language === 'es' ? "Correo Electrónico" : "Email Address"}
                            value={<p>mesadepartes@unfay.edu.pe</p>}
                        />
                        <ContactInfoItem
                            icon="📞"
                            label={language === 'es' ? "Teléfono" : "Phone Number"}
                            value={<p>+51 051 123456</p>}
                        />
                    </div>
                    <div className="map-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.089038446715!2d-69.08969022501494!3d-16.24770824248494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915dd7151511c803%3A0xbc898603d3d7a1eb!2sJr.%20Bolognesi%20765%2C%20Yunguyo%2021801!5e0!3m2!1ses-419!2spe!4v1740289994984!5m2!1ses-419!2spe" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ContactInfoItem = ({ icon, label, value }) => (
    <div className="contact-info-item">
        <div className="icon">{icon}</div>
        <div>
            <strong>{label}</strong>
            {value}
        </div>
    </div>
);

export default Contacto;
