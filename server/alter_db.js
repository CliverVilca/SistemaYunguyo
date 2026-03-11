require('dotenv').config();
const mysql = require('mysql2/promise');

async function alterDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        await connection.query('ALTER TABLE sys_unfay_news ADD COLUMN summary TEXT, ADD COLUMN type VARCHAR(50) DEFAULT "noticia", ADD COLUMN status VARCHAR(50) DEFAULT "Publicado"');
        console.log("✅ Columnas añadidas a sys_unfay_news.");
        await connection.end();
    } catch (error) {
        console.error("❌ ERROR AL ALTERAR TABLAS: ", error.message);
    }
}

alterDatabase();
