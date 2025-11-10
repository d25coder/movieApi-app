//Fifth, write queries specific to the movie table
//may want to do things in actor table only and not movie_streaming_platform

const con = require('../../config/dbconfig')

const movieDao = {
    table: 'movie'
}


module.exports = movieDao 

//will set 