// 4 genreDao
// line 3-4 fastest way for setup
const router = require('express').Router()
const { genreDao: dao } = require('../../daos/dao')


// Query 1: findAll GENRES http://localhost:2025/api/genre
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table) 
})

// Query 2: sort through GENRES -
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// Query 4: I want GENRES that have Action, Drama, and family
router.get('/search', (req, res)=> {
    dao.searchByGenre(req, res, dao.table)
})
 

// Query 3: get GENRES by id - 
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

// go to ROUTER.js
module.exports = router 