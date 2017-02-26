// const http = require('http');
// const messageProvider = "helloooo!"
const config = require('./config/config')
const express = require('express')
const apiRouter = require('./api/api')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(function (error, req, res, next) {
  res.status(404)
  res.render('????' + error.message)
})

app.use('/api', apiRouter)
require('./middleware/devMiddleware')(app)
app.use(express.static('./public'))

MongoClient.connect(config.db.url, { promiseLibrary: Promise }, (err, db) => {
  if (err) {
    console.log(err.message)
  }

  app.locals.db = db

  require('./utils/seed')(db)

  const hostname = '127.0.0.1'

  app.listen(config.port, hostname, () => {
    console.log(`Server running at http://${hostname}:${config.port}/`)
  })
})

// app.all("/", (reg, res) => {
//     res.send(`<h1>${messageProvider}</h1>`)
// });

// --------------------------------------------------------------------------------------
