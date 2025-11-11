//Fifth, write queries specific to the movie table
//may want to do things in actor table only and not movie_streaming_platform

const con = require('../../config/dbconfig')

const movieDao = {
    table: 'movie',
// find items by Nationality
// http://localhost:2025/api/movie/nat/aus
// added to movieDao because it is a specific query
    findByNat: (res, table, nationality)=> {
        con.query(
            `SELECT * FROM ${table} WHERE nationality = '${nationality}';`,
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



module.exports = movieDao 

//will set 