require('dotenv').config();
const mysql = require('mysql2/promise');

async function initializeDatabase() {
    console.log("Conectando para inicializar tablas del sistema...");
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        console.log("✅ Conectado a la BD.");

        // 1. Tabla Noticias
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_news (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                category VARCHAR(100),
                content TEXT,
                image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla sys_unfay_news creada/verificada.");

        // 2. Tabla Eventos
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_events (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                month VARCHAR(20),
                day VARCHAR(5),
                time VARCHAR(50),
                location VARCHAR(255),
                type VARCHAR(100),
                description TEXT,
                image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla sys_unfay_events creada/verificada.");

        // 3. Tabla Documentos y Resoluciones
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_documents (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                date DATE NOT NULL,
                category VARCHAR(100),
                number VARCHAR(100),
                fileUrl TEXT,
                isResolution BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla sys_unfay_documents creada/verificada.");

        // 3.1 Tabla Documentos Anexos (Relacional)
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_document_anexos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                document_id INT NOT NULL,
                titulo VARCHAR(255),
                url TEXT,
                FOREIGN KEY (document_id) REFERENCES sys_unfay_documents(id) ON DELETE CASCADE
            )
        `);
        console.log("✅ Tabla sys_unfay_document_anexos creada/verificada.");

        // 4. Tabla Convocatorias
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_convocatorias (
                id INT AUTO_INCREMENT PRIMARY KEY,
                titulo VARCHAR(255) NOT NULL,
                numero VARCHAR(100),
                fecha DATE NOT NULL,
                estado VARCHAR(50) DEFAULT 'VIGENTE',
                base_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla sys_unfay_convocatorias creada/verificada.");

        // 4.1 Tabla Convocatorias Anexos
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_convocatoria_anexos (
                id INT AUTO_INCREMENT PRIMARY KEY,
                convocatoria_id INT NOT NULL,
                titulo VARCHAR(255),
                url TEXT,
                FOREIGN KEY (convocatoria_id) REFERENCES sys_unfay_convocatorias(id) ON DELETE CASCADE
            )
        `);
        console.log("✅ Tabla sys_unfay_convocatoria_anexos creada/verificada.");

        // 5. Tabla Carreras
        await connection.query(`
            CREATE TABLE IF NOT EXISTS sys_unfay_careers (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                area VARCHAR(100),
                color VARCHAR(20),
                description TEXT,
                image VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log("✅ Tabla sys_unfay_careers creada/verificada.");

        console.log("🎉 ¡Todas las tablas del sistema interno han sido desplegadas exitosamente!");
        await connection.end();
    } catch (error) {
        console.error("❌ ERROR AL INICIALIZAR TABLAS: ", error.message);
    }
}

initializeDatabase();
