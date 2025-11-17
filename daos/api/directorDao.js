const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')


// i want search by the first 2 initials of directors first name, therefore add _% at the end of line 20.
// http://localhost:2025/api/director/search?first_name=an 

// OR


// i want to search directors who have le in their last name 
//http://localhost:2025/api/director/search?last_name=le 
const directorDao = {
    table: 'director',

    search: (req, res, table)=> {
        let sql = ''

        let query = req.query ? req.query : {} // if there is a query, use it, else use empty object

        let first_name = query.first_name || null //first
        let last_name = query.last_name || null
        
        if (first_name == null && last_name == null) {
            sql = `SELECT * FROM ${table};`
        } else if (last_name == null) {
            sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}_%';` 
        } else if (first_name == null) {
            sql = `SELECT * FROM ${table} WHERE last_name LIKE '%${last_name}%';` 
        } else {
            sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}%' AND last_name LIKE '%${last_name}%';`
        }
        con.execute(
            sql,
            (error, rows)=> {
                if (rows.length == 0) {
                    res.send('<h1>No data to send</h1>')
                } else {
                    queryAction(res, error, rows, table)
                }
            }
        )
    }
}

module.exports = directorDao