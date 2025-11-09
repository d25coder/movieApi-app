// First build Server.js
const express = require('express') //~carries over to router.js
const server = express() //~carries over to router.js

//Last step - IMPORT ROUTER
const router = require('./routes/router.js') 

const PORT = process.env.PORT || 2025 //builds root for localhost:2025




//Security
const helmet = require('helmet')
const cors = require('cors')

//configuring helmet
server.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    directives: {
        "img-src": ["'self'", "https: data"],
        "scriptSrc": ["'self'", "cdn.jsdelivr.net"]
    }
}))

server.use(cors()) //use bootstrap
server.use(express.json())
server.use(express.urlencoded({ extended: true}))



//part2 of last step - WHEN i see / in localhost:2025, then use ROUTER.js
server.use('/', router)




//creates http://localhost:2025 >> Cannot Get / because we havae not told it what to get or do
//~ Start with Router.js to tell server what to do
server.listen(PORT, ()=> console.log(`Movies are exciting to watch!`)) //check terminal and localhost




//Next is create a config.js folder, add a dbconfig folder
//After completing part2 create a ROUTER.js 