//Forth create 
//handle basic queries that can be used for any of the tables


//import dbConfig to connect to the database
//accessing the pool which allows multiple connection to the database
const connect = require('../../config/dbconfig')

const daoCommon = {
// create methods that query the database
// access All data from the database
    findAll: (req, res, table)=> {
 // use dbconfig 
 // .query(sql query, callback function)
        connect.query(
            `SELECT * FROM ${table};`, //part1 of query table
            (error, rows)=> {
//if there is NO error, then {do something} else...
                if (!error) {
//if rows.length = 1 item in the array then remove [] and return the data
                    if (rows.length ===1) {
                        res.json(...rows)
// else if rows.length is 2 or greater, then send the full array
                    } else {
                        res.json(rows)
                    }
//else if there is a error, receive an error message 
                } else {
                    console.log('DAO Error: ${error}')
                    res.json({
                        "message": 'error',
                        'table': `${table}`,
                        'error': error 
                    })
                } //go to movieRoutes.js
            }
        )      
    },

//find item by id http://localhost:2025/api/:id
//want to be able to select the id from different tables, if formatted the same way, the field_id will be easy to fetch
    findById: (res, table, id)=> {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    res.json(...rows)
                } else {
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message": 'error', 
                        'table': `${table}`,
                        'error': error 
                    })
                } //go to movieRoutes.js
            }
        )
    },

//Sort by yr_released
    sort: (res, table, sorter)=> {
        connect.query(
            `SELECT * FROM ${table} ORDER BY ${sorter};`,           
            (error, rows)=> {
                if (!error) {
                    if (rows.length == 1) 
                        res.json(...rows)
                } else {
                    console.log(`DAO Error ${error}`)
                    res.json({
                        "message": 'error', 
                        'table': `${table}`,
                        'error': error 
                    })
                }
            } 
        ) //now go to movieRoutes.js
    },

// find items by Nationality
    findByNat: (res, table, nationality)=> {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table}_nationality = ${nationality};`,
            (error, rows)=> {
                if (!error) {
                    res.json(...rows)
                } else {
                    console.log(`DAO Error ${error}`)
                    res.json({
                        "message": 'error', 
                        'table': `${table}`,
                        'error': error 
                    })
                }
            } // now go to movieRoutes
        )
    }
}

module.exports = daoCommon //exporting daoCommon