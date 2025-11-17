const con = require('../../config/dbconfig')
const { queryAction } = require('../../helpers/queryAction')

  
// 1 genreDao http://localhost:2025/api/movie?genre=action
const genreDao = {
    table: 'genre',
// i want to search GENRE by action, drama, and family, i need to use the
    searchByGenre: (req, res, table)=> {

// .query is looking for ? in the url and uses that information to acces data
        const query = req.query ? req.query : {}
        let genre = query.genre || null

        let sql = ''

        if (genre != null) {
            sql = `SELECT movie.*, g.genre FROM movie JOIN movie_to_genre USING (movie_id) JOIN genre g USING (genre_id) WHERE g.genre = '${genre}';`
        } else {
            sql = `SELECT * FROM movie;`
        }
        console.log(sql)
        con.execute(
            sql,
            (error, rows)=> {
                rows.length == 0 ? res.send('<h1>No data to share</h1>') : queryAction(res, error, rows, table)
            }
        )
        
    }

}



module.exports = genreDao