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

        await connection.query('ALTER TABLE sys_unfay_news MODIFY image LONGTEXT');
        await connection.query('ALTER TABLE sys_unfay_news MODIFY content LONGTEXT');
        console.log("✅ Columnas image y content modificadas a LONGTEXT para soportar Base64 grandes.");
        await connection.end();
    } catch (error) {
        console.error("❌ ERROR AL ALTERAR TABLAS: ", error.message);
    }
}

alterDatabase();
