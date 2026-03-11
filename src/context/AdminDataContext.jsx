import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminDataContext = createContext();

export const useAdminData = () => {
    const context = useContext(AdminDataContext);
    if (!context) {
        throw new Error('useAdminData must be used within an AdminDataProvider');
    }
    return context;
};

export const AdminDataProvider = ({ children }) => {
    // 1. Initial State Seeding (Mock Data from public pages)
    const initialNews = [
        {
            id: 1,
            type: "noticia",
            category: "INSTITUCIONAL",
            color: "#003f6f",
            title: "UNFAY: Nueva era de educación superior en la frontera",
            date: "06/03/2026",
            image: "/hero.png",
            summary: "Iniciamos oficialmente las actividades académicas con un enfoque en la excelencia profesional.",
            content: "La Universidad Nacional Fronteriza Autónoma de Yunguyo (UNFAY) marca un hito histórico en la educación del Altiplano.",
            featured: true
        },
        {
            id: 2,
            type: "evento",
            category: "CONVOCATORIA",
            color: "#c62828",
            title: "Inauguración del Año Académico 2026",
            date: "15/03/2026",
            time: "09:00 AM",
            location: "Plaza Principal de Yunguyo",
            image: "/lab.jpg",
            summary: "Invitamos a toda la comunidad de Yunguyo a la ceremonia oficial de apertura.",
            content: "La ceremonia contará con la presencia de autoridades nacionales y regionales.",
            featured: false
        },
        {
            id: 3,
            type: "noticia",
            category: "INVESTIGACIÓN",
            color: "#1565c0",
            title: "Implementación de laboratorios de alta tecnología",
            date: "04/03/2026",
            image: "/lab.jpg",
            summary: "Nuevos laboratorios equipados con tecnología de avanzada.",
            content: "La Comisión Organizadora ha anunciado la adquisición de equipos especializados.",
            featured: false
        }
    ];

    const initialConvocatorias = [
        {
            id: 1,
            tipo: "CONVOCATORIA CAS",
            titulo: "Primera Convocatoria 2026",
            descripcion: "CONVOCATORIA PARA CONTRATACIÓN ADMINISTRATIVA DE SERVICIOS-CAS",
            estado: "VIGENTE",
            colorEstado: "#2e7d32",
            inicioPostulacion: "15/03/2026",
            finPostulacion: "20/03/2026",
            documentos: [
                { id: 101, nombre: "Bases y Anexos del Proceso CAS 01-2026", fecha: "10/03/2026", color: "red" }
            ]
        }
    ];

    const initialCareers = [
        {
            id: 1,
            name: 'Ingeniería Comercial',
            faculty: 'Ciencias Empresariales',
            duration: '10 semestres',
            degree: 'Bachiller en Ingeniería Comercial',
            status: 'Activo',
            icon: '📊',
            category: 'Economía y Derecho'
        },
        {
            id: 2,
            name: 'Contabilidad',
            faculty: 'Ciencias Empresariales',
            duration: '10 semestres',
            degree: 'Bachiller en Contabilidad',
            status: 'Activo',
            icon: '📂',
            category: 'Economía y Derecho'
        }
    ];

    const initialDocuments = [
        { id: 1, title: 'Estatuto Universitario', version: '1.2', date: '2024-01-15', category: 'General', isResolution: false },
        { id: 2, title: 'Reglamento de Admisión', version: '2.0', date: '2024-02-10', category: 'Académico', isResolution: false },
        { id: 101, number: '001-2024-CU-UNFAY', title: 'Designación de Comisión', date: '2024-03-01', category: 'Administrativa', isResolution: true }
    ];
    // 2. State Management with LocalStorage/InitialData (Connecting News and Convocatorias to Backend)
    const [news, setNews] = useState(initialNews);
    const [convocatorias, setConvocatorias] = useState(initialConvocatorias);

    const [careers, setCareers] = useState(() => {
        const saved = localStorage.getItem('unfay_careers');
        return saved ? JSON.parse(saved) : initialCareers;
    });

    const [documents, setDocuments] = useState(() => {
        const saved = localStorage.getItem('unfay_documents');
        return saved ? JSON.parse(saved) : initialDocuments;
    });

    // 3. Persistence & Fetch Effects
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resNews = await fetch('http://localhost:3000/api/news');
                if (resNews.ok) {
                    const dataNews = await resNews.json();
                    if (dataNews && dataNews.length > 0) setNews(dataNews);
                }

                const resConvo = await fetch('http://localhost:3000/api/convocatorias');
                if (resConvo.ok) {
                    const dataConvo = await resConvo.json();
                    if (dataConvo && dataConvo.length > 0) setConvocatorias(dataConvo);
                }
            } catch (err) {
                console.error("Backend local no activo. Usando datos demo iniciales.");
            }
        };
        fetchData();
    }, []);

    // Local Storage Fallback for incomplete objects
    useEffect(() => { localStorage.setItem('unfay_careers', JSON.stringify(careers)); }, [careers]);
    useEffect(() => { localStorage.setItem('unfay_documents', JSON.stringify(documents)); }, [documents]);

    // 4. Helper Actions
    const addItem = async (listName, item) => {
        if (listName === 'news' || listName === 'convocatorias') {
            try {
                const res = await fetch(`http://localhost:3000/api/${listName}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                });
                if (res.ok) {
                    const savedItem = await res.json();
                    if (listName === 'news') setNews([savedItem, ...news]);
                    if (listName === 'convocatorias') setConvocatorias([savedItem, ...convocatorias]);
                }
            } catch (e) {
                console.error("Error al guardar:", e);
                alert("Error de conexión al servidor");
            }
        } else {
            const newItem = { ...item, id: Date.now() };
            if (listName === 'careers') setCareers([newItem, ...careers]);
            if (listName === 'documents') setDocuments([newItem, ...documents]);
        }
    };

    const deleteItem = async (listName, id) => {
        if (listName === 'news' || listName === 'convocatorias') {
            try {
                const res = await fetch(`http://localhost:3000/api/${listName}/${id}`, { method: 'DELETE' });
                if (res.ok) {
                    if (listName === 'news') setNews(news.filter(i => i.id !== id));
                    if (listName === 'convocatorias') setConvocatorias(convocatorias.filter(i => i.id !== id));
                }
            } catch (e) { console.error("Error al borrar:", e); }
        } else {
            if (listName === 'careers') setCareers(careers.filter(i => i.id !== id));
            if (listName === 'documents') setDocuments(documents.filter(i => i.id !== id));
        }
    };

    const updateItem = async (listName, id, updatedData) => {
        if (listName === 'news' || listName === 'convocatorias') {
            try {
                const res = await fetch(`http://localhost:3000/api/${listName}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData)
                });
                if (res.ok) {
                    const savedItem = await res.json();
                    const mapper = i => i.id === id ? { ...i, ...savedItem } : i;
                    if (listName === 'news') setNews(news.map(mapper));
                    if (listName === 'convocatorias') setConvocatorias(convocatorias.map(mapper));
                }
            } catch (e) { console.error("Error al actualizar:", e); }
        } else {
            const mapper = i => i.id === id ? { ...i, ...updatedData } : i;
            if (listName === 'careers') setCareers(careers.map(mapper));
            if (listName === 'documents') setDocuments(documents.map(mapper));
        }
    };

    return (
        <AdminDataContext.Provider value={{
            news, setNews,
            convocatorias, setConvocatorias,
            careers, setCareers,
            documents, setDocuments,
            addItem, deleteItem, updateItem
        }}>
            {children}
        </AdminDataContext.Provider>
    );
};
