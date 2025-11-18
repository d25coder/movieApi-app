//Third build Router.js
//const express, router, and module.export gets server running
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 2025 //create port 


// Home.ejs http://localhost:2025
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'movieApi',
        name: "Destinie's Movie App Api" 
    })
})

//Artits Form http://localhost:2025/artist-form
router.get('/artst-form', (req, res)=> {
    res.render('pages/artist-form', {
        title: 'artist form',
        name: 'artist-form'
    })
})

//ROOT ROUTE => http://localhost:2025/api
//takes you to api page
//Build out api endpoint
router.get('/api', (req, res)=> {
    // res.send('movie api') // check localhost:2025/api
    res.json ({
// endpoint for this data
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Directors': `http://localhost:${PORT}/api/director`,
        'All Genres': `http://localhost:${PORT}/api/genre` // 5 genreDao
    })
}) 

const endpoints = [
    'movie',
    'actor',
    'director',
    'genre' // 6 genreDao
]

router.use('/api/movie', require('./api/movieRoutes'))
// //click on link in localhost:2025, should see data
router.use('/api/actor', require('./api/actorRoutes'))
// endpoints.forEach(endpoint => {
//     router.use(`/api/${endpoint}`, require(`./api/${endpoint}Routes`))
// })
router.use('/api/director', require('./api/directorRoutes')) 
router.use('/api/genre', require('./api/genreRoutes')) 

//build ERROR.js HANDLE PAGE
router.use((req, res, next)=> {
    res.status(404)
    // res.send('<h1>404 Error This page does not exits</h1>')
    .render('pages/error', { //.render means its complete
        title: 'Error Page',
        name: 'Error'
    })
}) // go to Error.ejs


module.exports = router 

//After const express, router, and module.exports, 
// Set up ROOT ROUTE by creating const PORT
//Begin ROOT with router.get('/api)
//Build 404 Error page
// ^^^^push to gitHub

//i want access to the data for http://localhost:2025/api/movie link without getting a 404 Error
// create DataAccesObject DAOs Folder - {}, :, 