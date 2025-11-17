const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

 
// i want to search Actors by last name whith P
// 


const  actorDao = {
    table: 'actor',
// add query specific to actor table such as first and last name 
    search: (req, res, table)=> {
        let sql = ''

        let query = req.query ? req.query : {}
        
        let first_name = query.first_name || null 
        let last_name = query.last_name || null

        if (first_name == null & last_name == null) {
            sql = `SELECT * FROM ${table};`
        } else if (last_name == null) {
            sql = `SELECT * FROM ${table} WHERE first_name LIKE '%${first_name}%';`
        } else if (first_name == null) {
            sql = `SELECT * FROM ${table} WHERE last_name LIKE '%${last_name}%';` // mysql> select * from actor where last_name like '%p%';
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

module.exports = actorDao
//when i click on the link i receive 404 Error