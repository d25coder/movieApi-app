// First build Server.js
const express = require('express') //~carries over to router.js
const server = express() //~carries over to router.js
const PORT = process.env.PORT || 2025 //builds root for localhost:2025





//creates http://localhost:2025 >> Cannot Get / because we havae not told it what to get or do
//~ Start with Router.js to tell server what to do
server.listen(PORT, ()=> console.log(`Movies are exciting to watch! http://localhost:${PORT}`)) //check terminal and localhost