const mysql = require('mysql'),
    con = mysql.createConnection({
        host: '39.105.111.123',
        user: 'root',
        password: 'xingyun2016',
        database: 'tutor'
    });
exports.con = con;