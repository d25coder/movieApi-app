//Six, indivdual DAO write queiries specific to the movie table to get data from it
//its seperate from daoCommons
//this is where all DAOs will meet up and we will pull from this dao.js instead of multiple locations

const daoCommon = require('./common/daoCommon')


//i want daoCommon and movieDao to meet up here ... removes {} from objects and places them inside const movieDao = {}
const movieDao = {
    ...daoCommon,
//use movieDao
    ...require('./api/movieDao')
}
const actorDao = {
    ...daoCommon,
    ...require('./api/actorDao')
}

const directorDao ={
    ...daoCommon,
    ...require('./api/directorDao')
}

module.exports = {
    movieDao,
    actorDao, // ready to be picked up by actorRoutes
    directorDao,
}

//now everything will meetup in the same space in dao.js instead of mulitple routes
//~next setup individual ROUTES in the routes folder