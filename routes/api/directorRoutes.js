const router = require('express').Router()
const { directorDao: dao } = require('../../daos/dao')


// find all directors - 
// http://localhost:2025/api/director 
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
    
})// go to router.js

// sort through directors 
// http://localhost:2025/api/director/sort/first_name
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// search director by first 2 letters in their first name
// http://localhost:2025/api/director/search?first_name=an  

router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table)
})

// get director by id - 
// http://localhost:2025/api/director/10
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})
 
module.exports = router