const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// * Routers
const appRouter = require('./routes/appRoutes')
const userRouter = require('./routes/userRouter')
// * Utils
const rootDir = require('./utils/rootDir')
const mongoConnect = require('./utils/database').mongoConnect


const server = express()

server.use(express.static(path.join(rootDir, '/public')))
server.use(express.json())



server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


server.use(appRouter)

server.use('/user', userRouter)

mongoConnect(() => {
    server.listen(process.env.PORT || 5000)
})


module.exports = server