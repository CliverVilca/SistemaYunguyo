require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Middleware para debuguear rutas
app.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.url}`);
    next();
});
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Servir la carpeta de las subidas de forma estática al Frontend
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Configuración de almacenamiento local seguro con Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let destFolder = 'uploads/';
        if (req.body.type === 'noticia') destFolder += 'news';
        else if (req.body.type === 'convocatoria') destFolder += 'convocatorias';
        else destFolder += 'misc';

        fs.mkdirSync(destFolder, { recursive: true });
        cb(null, destFolder);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});
const upload = multer({ storage: storage });

// API Universal para Subida de Archivos (Imágenes y PDFs)
app.post('/api/upload', upload.single('archivo'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se procesó ningún archivo.' });
        }
        // Retornamos la ruta final que el Frontend guardará en MySQL
        const fileUrl = `http://127.0.0.1:${PORT}/${req.file.destination}/${req.file.filename}`.replace('uploads/', 'uploads/');
        res.json({ success: true, url: fileUrl });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Configuración de la conexión a la base de datos PostgreSQL/MySQL (cPanel)
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Ruta de prueba para verificar si logramos conectar con cPanel
app.get('/api/test-connection', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT version()');
        connection.release();
        res.json({ success: true, message: '¡Conexión a base de datos de cPanel exitosa!', version: rows[0] });
    } catch (error) {
        console.error('Error de conexión a BD:', error);
        res.status(500).json({ success: false, message: 'Fallo al conectar con la base de datos.', error: error.message });
    }
});

// ==========================================
// RUTAS PARA NOTICIAS (sys_unfay_news)
// ==========================================
app.get('/api/news', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sys_unfay_news ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/news', async (req, res) => {
    try {
        const { title, date, category, content, image, summary, type, status } = req.body;
        const [result] = await pool.query(
            'INSERT INTO sys_unfay_news (title, date, category, content, image, summary, type, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [title, date, category, content, image, summary, type || 'noticia', status || 'Publicado']
        );
        res.json({ id: result.insertId, ...req.body });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.put('/api/news/:id', async (req, res) => {
    try {
        const { title, date, category, content, image, summary, type, status } = req.body;
        await pool.query(
            'UPDATE sys_unfay_news SET title=?, date=?, category=?, content=?, image=?, summary=?, type=?, status=? WHERE id=?',
            [title, date, category, content, image, summary, type, status, req.params.id]
        );
        res.json({ id: parseInt(req.params.id), ...req.body });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/news/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM sys_unfay_news WHERE id=?', [req.params.id]);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

// ==========================================
// RUTAS PARA CONVOCATORIAS (sys_unfay_convocatorias)
// ==========================================
app.get('/api/convocatorias', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sys_unfay_convocatorias ORDER BY created_at DESC');
        for (let row of rows) {
            const [anexos] = await pool.query('SELECT * FROM sys_unfay_convocatoria_anexos WHERE convocatoria_id = ?', [row.id]);
            row.anexos = anexos;
        }
        res.json(rows);
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.post('/api/convocatorias', async (req, res) => {
    try {
        const { titulo, numero, fecha, estado, base_url, anexos } = req.body;
        const [result] = await pool.query('INSERT INTO sys_unfay_convocatorias (titulo, numero, fecha, estado, base_url) VALUES (?, ?, ?, ?, ?)', [titulo, numero, fecha, estado, base_url]);
        const newId = result.insertId;

        if (anexos && anexos.length > 0) {
            for (let a of anexos) {
                await pool.query('INSERT INTO sys_unfay_convocatoria_anexos (convocatoria_id, titulo, url) VALUES (?, ?, ?)', [newId, a.titulo, a.url]);
            }
        }
        res.json({ id: newId, ...req.body });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.put('/api/convocatorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, numero, fecha, estado, base_url, anexos } = req.body;
        await pool.query('UPDATE sys_unfay_convocatorias SET titulo=?, numero=?, fecha=?, estado=?, base_url=? WHERE id=?', [titulo, numero, fecha, estado, base_url, id]);

        await pool.query('DELETE FROM sys_unfay_convocatoria_anexos WHERE convocatoria_id=?', [id]);
        if (anexos && anexos.length > 0) {
            for (let a of anexos) {
                await pool.query('INSERT INTO sys_unfay_convocatoria_anexos (convocatoria_id, titulo, url) VALUES (?, ?, ?)', [id, a.titulo, a.url]);
            }
        }
        res.json({ id: parseInt(id), ...req.body });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

app.delete('/api/convocatorias/:id', async (req, res) => {
    try {
        await pool.query('DELETE FROM sys_unfay_convocatorias WHERE id=?', [req.params.id]);
        res.json({ success: true });
    } catch (error) { res.status(500).json({ error: error.message }); }
});

// Inicializando el servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor backend encendido y escuchando en el puerto ${PORT}`);
    console.log(`👉 Ruta de prueba de base de datos preparada: http://localhost:${PORT}/api/test-connection`);
});
