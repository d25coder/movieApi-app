const con = require('../../config/dbconfig')




// http://localhost:2025/api/actor/name/tyler
const  actorDao = {
    table: 'actor',
// add query specific to actor table such as first and last name add CASE method
    findByName: (res, table, first_name)=> {
        con.query(
            `SELECT * FROM ${table} WHERE first_name = '${first_name}';`,
            (error, rows)=> {
                 queryAction(res, error, rows, table)               
                // if (!error) {
                //     res.json(...rows)
                // } else {
                //     console.log(`DAO Error ${error}`)
                //     res.json({
                //         "message": 'error', 
                //         'table': `${table}`,
                //         'error': error
                //     })
                // } // go to actorRoutes
            }
        )
        // const sql = `SELECT a.actor_id,
        // CASE 
        //     WHEN a.first_name IS NULL THEN ''
        //     ELSE a.first_name
        //     END first_name,
        // CASE
        //     WHEN a.first_name IS NULL THEN ''
        //     ELSE a.last_names
        //     END last_name,
        // FROM movie a
        // LEFT OUTER JOIN actor a USING (actor_id);`
    }
}

module.exports = actorDao
//when i click on the link i receive 404 Error