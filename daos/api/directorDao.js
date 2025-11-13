const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

const directorDao = {
    table: 'director',
    findByLname: (res, table, last_name)=> {
        con.query(
            `SELECT * FROM ${table} WHERE last_name = '${last_name}';`,
            (error, rows)=> {
                queryAction(res, error, rows, table)
            }
        )
    }
}

module.exports = router