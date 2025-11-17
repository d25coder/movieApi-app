const router = require('express').Router()
//../ leave api ../leave routes folder /go into dao /go to dao.js 
const { actorDao : dao } = require('../../daos/dao')
 

// http://localhost:2025/api/actor
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
     
})// go to router.js


// sort through ACTORS by last name
// http://localhost:2025/api/actor/sort/last_name 
router.get('/sort/:sorter', (req, res)=> {
    dao.sort(res, dao.table, req.params.sorter)
})

// search actor by last name with P
// http://localhost:2025/api/actor/search?last_name=p 
router.get('/search', (req, res)=> {
    dao.search(req, res, dao.table)
})

// get ACTOR by id 10
// http://localhost:2025/api/actor/29
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router 