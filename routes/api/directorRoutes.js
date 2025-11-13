const router = require('express').Router()
const { directorDao: dao } = require('../../daos/dao')


// http:localhost:2025/api/director
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
    
})// go to router.js


router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})



router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router