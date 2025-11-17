// Seven setup individual route
//handle all routing for movie table
// routes uses Router object = const express


const express = require('express')
const router = express.Router()

//imported movieDao file to movieRoutes and name it name
const { movieDao: dao} = require('../../daos/dao')



// http://localhost:2025/api/movie
router.get('/', (req, res)=> {
//when i click on localhost:2025/api/movie,
//dao.findAll takes req, res, table fom daoCommon
//dao.table pulled from movieDao
    dao.findAll(res, dao.table)
})
// when i click on localhost:2025/api/movie link, i want it to findAll
//findAll in daoCommon.js says `SELECT * FROM table
//table in movieDao.js is 'movie'
//then return the data from daoCommon in json


//Sort goes above /:id to prevent from sorting the id data
// http://localhost:2025/api/movie/sort/yr_released 
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})
// lastly go to movieDao to get localhost to work

// http://localhost:2025/api/movie/nat/aus
//  or usa 
router.get('/nat/:nationality', (req, res)=> {
    dao.findByNat(res, dao.table, req.params.nationality)
})

//Add a path for findById
// http://localhost:2025/api/movie/3
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})




module.exports = router

//to get this to work go to router.js 
//type router.use('/api/movie', require('./api/movieRoutes')) after the ROOT ROUTE