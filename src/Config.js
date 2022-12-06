require('dotenv').config()

module.exports = {
    port: process.env.PORT || 4040,
    DBuser: process.env.DBUSER || 'DannymateoH1_SQLLogin_1',
    DBpassword: process.env.DBPASS || 'x5jcee19zb',
    DBdatabase: process.env.DBDATABASE || 'MiguelDanny',
    DBserver: process.env.DBSERVER || 'MiguelDanny.mssql.somee.com'
};
