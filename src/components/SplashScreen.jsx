import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // A los 1.5 segundos empezamos la animación de salida
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
        }, 1500);

        // Se elimina del DOM después de 1 segundo de animación (2.5 s total)
        const unmountTimer = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`splash-screen ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="splash-logo-container">
                <img src="/logo_unfay.png" alt="UNFAY Cargando..." className="splash-logo" />
                <div className="splash-text">
                    UNIVERSIDAD NACIONAL FRONTERIZA<br />AUTÓNOMA DE YUNGUYO
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
