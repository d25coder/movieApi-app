const router = require('express').Router()


/
router.get('/', (req, res)=> {
    dao.findAll(req, res, dao.table)
    
})// go to router.js

module.exports = router