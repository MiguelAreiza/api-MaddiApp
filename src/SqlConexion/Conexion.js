const sql = require('mssql');
const Config = require('../Config');

// const sqlConfig = {
//     user: 'MiCartera',
//     password: 'qwert.1234',
//     database: 'DBMiCartera',
//     server: 'localhost',
//     pool: {
//         max: 10,
//         min: 0,
//         idleTimeoutMillis: 30000
//     },
//     options: {
//         encrypt: true, // for azure
//         trustServerCertificate: true // change to true for local dev / self-signed certs
//     }
// }

// async function getConexion() {
//     try {
//         // make sure that any items are correctly URL encoded in the connection string
//         await sql.connect(sqlConfig)
//         const result = await sql.query`select 1 as rpta`;
//         console.log(result)
//     } catch (err) {
//         // ... error checks
//         console.log(err);
//     }
// }

// getConexion();

const sqlConfig = {
    user: Config.DBuser,
    password: Config.DBpassword,
    database: Config.DBdatabase,
    server: Config.DBserver,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

async function getConexion() {
    try {
        const pool = await sql.connect(sqlConfig);
        return pool;
    } catch (err) {
        console.log(err);
    }
}

module.exports.getConexion = getConexion;
module.exports.sql = sql;