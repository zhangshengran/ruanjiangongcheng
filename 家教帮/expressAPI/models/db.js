const mysql = require('mysql'),
    con = mysql.createConnection({
        host: '*******',
        user: 'root',
        password: '********',
        database: 'tutor'
    });
exports.con = con;
