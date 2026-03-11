import React from 'react';

const EmptyStateMessage = ({ message, subtitle, icon, isHero = false }) => (
    <div style={{
        padding: isHero ? '60px 20px' : '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        borderRadius: '16px',
        border: '1px solid rgba(0, 63, 111, 0.1)',
        boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        color: '#1e293b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: isHero ? '300px' : 'auto',
        transition: 'transform 0.3s ease'
    }}>
        <div style={{
            width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 90, 156, 0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
            color: '#005a9c'
        }}>
            {icon || (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            )}
        </div>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', fontWeight: '700', color: '#003f6f', letterSpacing: '-0.5px' }}>
            {message}
        </h3>
        {subtitle && <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', maxWidth: '400px', lineHeight: '1.5' }}>{subtitle}</p>}
    </div>
);

export default EmptyStateMessage;
