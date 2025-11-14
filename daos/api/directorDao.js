const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const directorDao = {
    table: 'director',

    search: (req, res, table)=> {
        let sql = ''

        con.query = req.query ? req.query : {}

        let first_name = req.query.first_name || null
        let last_name = req.query.last_name || null
        
        if (first_name == null && last_name == null) {
            sql = `SELECT * FROM ${table};`
        } else if (last_name == null) {
            sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}%';`
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