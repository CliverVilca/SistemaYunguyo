require('dotenv').config();
const mysql = require('mysql2/promise');

async function testConnection() {
    console.log("Conectando a la base de datos MySQL...");
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        const [rows] = await connection.query('SELECT version()');
        console.log("✅ CONEXIÓN EXITOSA: ", rows[0]);
        await connection.end();
    } catch (error) {
        console.error("❌ ERROR AL CONECTAR: ", error.message);
    }
}

testConnection();
