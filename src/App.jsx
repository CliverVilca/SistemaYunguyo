import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Universidad from './pages/Universidad';
import Autoridades from './pages/Autoridades';
import Admision from './pages/Admision';
import Contacto from './pages/Contacto';
import Convocatorias from './pages/Convocatorias';
import Investigacion from './pages/Investigacion';
import Noticias from './pages/Noticias';
import Transparencia from './pages/Transparencia';
import Resoluciones from './pages/Resoluciones';
import DocumentosInteres from './pages/DocumentosInteres';
import Carreras from './pages/Carreras';
import { LanguageProvider } from './context/LanguageContext';
import { AdminDataProvider } from './context/AdminDataContext';
import SplashScreen from './components/SplashScreen';

import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';
import NewsManager from './admin/NewsManager';
import DocumentManager from './admin/DocumentManager';
import ConvocatoriasManager from './admin/ConvocatoriasManager';
import Settings from './admin/Settings';
import CareersManager from './admin/CareersManager';
import EventsManager from './admin/EventsManager';

const NotFound = () => (
    <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1>404</h1>
        <p>Lo sentimos, esta sección está en desarrollo o no existe.</p>
        <a href="/" className="btn-more" style={{ marginTop: '20px' }}>VOLVER AL INICIO ➔</a>
    </div>
);

function App() {
    return (
        <AdminDataProvider>
            <LanguageProvider>
                <SplashScreen />
                <Router>
                    <Routes>
                        {/* ZONA PÚBLICA */}
                        <Route path="/*" element={
                            <Layout>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/universidad" element={<Universidad />} />
                                    <Route path="/autoridades" element={<Autoridades />} />
                                    <Route path="/admision" element={<Admision />} />
                                    <Route path="/carreras" element={<Carreras />} />
                                    <Route path="/convocatorias" element={<Convocatorias />} />
                                    <Route path="/investigacion" element={<Investigacion />} />
                                    <Route path="/noticias" element={<Noticias />} />
                                    <Route path="/documentos" element={<Transparencia />} />
                                    <Route path="/resoluciones" element={<Resoluciones />} />
                                    <Route path="/transparencia" element={<Transparencia />} />
                                    <Route path="/contacto" element={<Contacto />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Layout>
                        } />

                        {/* ZONA ADMIN */}
                        <Route path="/admin/login" element={<AdminLogin />} />

                        <Route path="/admin/*" element={
                            <AdminLayout>
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/noticias" element={<NewsManager />} />
                                    <Route path="/eventos" element={<EventsManager />} />
                                    <Route path="/documentos" element={<DocumentManager />} />
                                    <Route path="/convocatorias" element={<ConvocatoriasManager />} />
                                    <Route path="/carreras" element={<CareersManager />} />
                                    <Route path="/ajustes" element={<Settings />} />
                                    <Route path="*" element={<div style={{ textAlign: 'center', padding: '50px' }}><h2>Sección Admin no encontrada</h2><Link to="/admin">Ir al Dashboard</Link></div>} />
                                </Routes>
                            </AdminLayout>
                        } />
                    </Routes>
                </Router>
            </LanguageProvider>
        </AdminDataProvider>
    );
}

export default App;
