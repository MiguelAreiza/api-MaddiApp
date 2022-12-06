require('dotenv').config()

module.exports = {
    port: process.env.PORT || 4040,
    DBuser: process.env.DBUSER || '',
    DBpassword: process.env.DBPASS || '',
    DBdatabase: process.env.DBDATABASE || '',
    DBserver: process.env.DBSERVER || ''
};
