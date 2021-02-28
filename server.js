const express = require('express')
const path = require('path')

const appRouter = require('./routes/appRoutes')
const rootDir = require('./utils/rootDir')


const server = express()

server.set('view engine', 'pug')
server.use(express.static(path.join(rootDir, '/public')))


server.use(appRouter)

server.listen(process.env.PORT || 5000)