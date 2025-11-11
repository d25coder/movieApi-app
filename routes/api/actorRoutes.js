const router = require('express').Router()
//../ leave api ../leave routes folder /go into dao /go to dao.js 
const { actorDao : dao } = require('../../daos/dao.js')
 

//http://localhost:2025/api/actor
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
    
})// go to router.js

// http:localhost:2025/api/sort/
router.get('/sort/sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

router.get('/name/:first_name', (req, res)=> {
    dao.findByName(res, dao.table, req.params.first_name)
})

// http:localhost:2025/api/actor/5
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router