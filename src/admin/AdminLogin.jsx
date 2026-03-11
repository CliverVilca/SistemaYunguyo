import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        setTimeout(() => {
            if (email === 'admin@unfay.edu.pe' && password === 'admin') {
                navigate('/admin/dashboard');
            } else {
                setError('Credenciales inválidas. Verifique su acceso.');
                setIsSubmitting(false);
            }
        }, 1200);
    };

    // Parallax effect for particles
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Particles Data
    const particles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 10 + 10,
        delay: Math.random() * 5
    }));

    return (
        <div style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #001f3f 0%, #003f6f 100%)',
            overflow: 'hidden',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
            {/* Background Texture & Particles Layer */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                opacity: 0.8,
                pointerEvents: 'none',
                transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}>
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                        </pattern>
                        <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(0, 90, 156, 0.4)" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Glowing Orbs */}
                    <circle cx="20%" cy="30%" r="300" fill="url(#glow)" filter="blur(60px)" />
                    <circle cx="80%" cy="80%" r="400" fill="url(#glow)" filter="blur(80px)" transform="rotate(45)" />

                    {/* CSS Animated Particles */}
                    {particles.map(p => (
                        <circle key={p.id} cx={`${p.x}%`} cy={`${p.y}%`} r={p.size} fill="rgba(255,255,255,0.15)">
                            <animate attributeName="cy" values={`${p.y}%;${p.y - 20}%;${p.y}%`} dur={`${p.speed}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
                            <animate attributeName="cx" values={`${p.x}%;${p.x + Math.random() * 5 - 2.5}%;${p.x}%`} dur={`${p.speed / 1.5}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.1;0.6;0.1" dur={`${p.speed / 2}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
                        </circle>
                    ))}
                </svg>
            </div>

            {/* Login Container Formal */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '440px',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                borderTop: '5px solid #005a9c',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                padding: '45px 40px',
                animation: 'formFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                <div style={{ textAlign: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
                    <div style={{
                        width: '70px', height: '70px', background: '#002846', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px',
                        boxShadow: '0 4px 6px -1px rgba(0, 40, 70, 0.3)'
                    }}>
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <h1 style={{ margin: '0', fontSize: '1.4rem', color: '#002846', fontWeight: '800', letterSpacing: '-0.5px' }}>
                        Portal Institucional
                    </h1>
                    <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>
                        Acceso restringido al Sistema de Gestión
                    </p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'grid', gap: '22px' }}>
                    {error && (
                        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', animation: 'shake 0.4s' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            {error}
                        </div>
                    )}
                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Identificación de Usuario
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Correo institucional o DNI"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 42px', borderRadius: '4px',
                                    border: '1px solid #cbd5e1', fontSize: '0.95rem', color: '#0f172a',
                                    outline: 'none', transition: 'all 0.2s', background: '#f8fafc'
                                }}
                                className="login-input"
                                required
                            />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" style={{ position: 'absolute', left: '14px', top: '13px' }}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '700', color: '#334155', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            Clave de Seguridad
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 42px', borderRadius: '4px',
                                    border: '1px solid #cbd5e1', fontSize: '0.95rem', color: '#0f172a',
                                    outline: 'none', transition: 'all 0.2s', background: '#f8fafc', letterSpacing: '2px'
                                }}
                                className="login-input"
                                required
                            />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" style={{ position: 'absolute', left: '14px', top: '13px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            background: isSubmitting ? '#003f6f' : 'linear-gradient(to right, #002846, #005a9c)',
                            color: 'white', border: 'none', padding: '14px', borderRadius: '4px',
                            fontSize: '0.95rem', fontWeight: '700', cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            marginTop: '10px', boxShadow: '0 4px 14px 0 rgba(0, 90, 156, 0.39)', transition: 'all 0.3s',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: isSubmitting ? 0.8 : 1
                        }}
                        className="login-btn"
                    >
                        {isSubmitting ? (
                            <>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="spin-icon">
                                    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                </svg>
                                Autenticando...
                            </>
                        ) : (
                            <>Ingresar al Sistema <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></>
                        )}
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <a href="#" style={{ color: '#005a9c', fontSize: '0.8rem', textDecoration: 'none', fontWeight: '600', transition: 'opacity 0.2s' }}>
                            ¿Olvidó sus credenciales institucionales?
                        </a>
                    </div>
                </form>
            </div>

            <style>{`
                @keyframes formFadeIn {
                    0% { opacity: 0; transform: translateY(30px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .spin-icon { animation: spin 1s linear infinite; }
                .login-input:focus {
                    background: white !important;
                    border-color: #005a9c !important;
                    box-shadow: 0 0 0 3px rgba(0, 90, 156, 0.1) !important;
                }
                .login-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(0, 90, 156, 0.5) !important;
                }
            `}</style>
        </div>
    );
};

export default AdminLogin;
