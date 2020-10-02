const mysql = require('mysql');
require('dotenv').config()

const sql = mysql.createConnection({
    host: 'imthoditheo.mysql.db',
    user: 'imthoditheo',
    password: 'XP24A3zuj',
    database: 'imthoditheo'
});

sql.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = sql;