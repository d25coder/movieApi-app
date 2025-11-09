// //Second build Router.js
//const express, router, and module.export gets server running
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 2025 //create port 


//ROOT ROUTE => http://localhost:2025/api
//takes you to api page
//Build out api endpoint
router.get('/api', (req, res)=> {
    // res.send('movie api') // check localhost:2025/api
    res.json ({
// endpoint for this data
        'All Actors': `http://localhost:${PORT}/api/movie` 
    })
}) 



//build ERROR HANDLE PAGE
router.use((req, res, next)=> {
    res.status(404)
    res.send('<h1>404 Error This page does not exits</h1>')
})


module.exports = router 

//After const express, router, and module.exports, 
// Set up ROOT ROUTE by creating const PORT
//Begin ROOT with router.get('/api)
//Build 404 Error page