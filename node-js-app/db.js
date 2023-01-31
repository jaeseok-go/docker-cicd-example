const mysql = require("mysql");
const pool = mysql.createPool(
    {
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'jaeseok',
    database: 'myapp'
    });
exports.pool = pool;