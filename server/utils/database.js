const mongobd = require('mongodb')

const mongoClient = mongobd.MongoClient
let db;

const mongoConnect = (cb) => {
    mongoClient.connect('mongodb+srv://turza-admin:Thbk9572@mup-project.ssf72.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
      .then(client => {
          console.log('Connected!')
          db = client.db('mup-project')
          cb()
      }).catch(err => {
        console.log(err)
        throw err
    })
}
const getDb = (cb) => {
  if (db) return db
  else throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb