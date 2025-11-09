// building a connection to the database
const mysql = require('mysql2') // imported mysql2
//create a pool enables multiple connection to the same database
 const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root', //refers to mysql root
    password: 'root',
    database: 'moviedb' // the database that you use
 })

 module.exports = pool
