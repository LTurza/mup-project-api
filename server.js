require('dotenv-flow').config()
require('./server/utils/debug')
const express = require('express')
const session = require('express-session')
const db = require('./server/utils/dbConnection')
const appRouter = require('./server/routes/appRoutes')
const userRouter = require('./server/routes/userRouter')
const authRouter = require('./server/routes/authRoutes')
const teamRouter = require('./server/routes/teamRouter')
const organizationRouter = require('./server/routes/organizationRoutes')
const taskRouter = require('./server/routes/taskRoutes')

const server = express()

server.use(express.json())
server.use(session({secret: 'session', resave: false, saveUninitialized: false}))

server.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

server.use(appRouter)
server.use('/auth/', authRouter)
server.use('/teams',teamRouter)
server.use('/user', userRouter)
server.use('/organization', organizationRouter)
server.use('/task', taskRouter)

db.on('error', function () {
  serverLog('mongo Connection failed! Closing server')
  process.exit()
})

db.once('open', function () {
  server.listen(process.env.PORT || 5000, () => {
    serverLog(`DB connected successfully!\nServer listen on port: ${process.env.PORT || 5000}`)
  })
})

module.exports = server

