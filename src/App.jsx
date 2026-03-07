import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DocumentosInteres from './pages/DocumentosInteres';
import PTE from './pages/PTE';
import Rendicion from './pages/Rendicion';
import { LanguageProvider } from './context/LanguageContext';

const NotFound = () => (
    <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <h1>404</h1>
        <p>Lo sentimos, esta sección está en desarrollo o no existe.</p>
        <a href="/" className="btn-more" style={{ marginTop: '20px' }}>VOLVER AL INICIO ➔</a>
    </div>
);

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/universidad" element={<Universidad />} />
                        <Route path="/autoridades" element={<Autoridades />} />
                        <Route path="/admision" element={<Admision />} />
                        <Route path="/carreras" element={<Admision />} />
                        <Route path="/convocatorias" element={<Convocatorias />} />
                        <Route path="/investigacion" element={<Investigacion />} />
                        <Route path="/noticias" element={<Noticias />} />
                        <Route path="/transparencia" element={<DocumentosInteres />} />
                        <Route path="/transparencia/documentos" element={<DocumentosInteres />} />
                        <Route path="/transparencia/pte" element={<PTE />} />
                        <Route path="/transparencia/rendicion" element={<Rendicion />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </LanguageProvider>
    );
}

export default App;
