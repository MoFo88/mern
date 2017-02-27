// const http = require('http');
// const messageProvider = "helloooo!"
const config = require('./config/config')
const express = require('express')
const apiRouter = require('./api/api')
const path = require('path')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use('/api', apiRouter)

if (process.env.NODE_ENV === config.dev) {
  require('./middleware/devMiddleware')(app)
}

app.use(express.static('./public'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

MongoClient.connect(config.database.url, { promiseLibrary: Promise }, (err, db) => {
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

app.use(function (error, req, res, next) {
  console.error(error.message)
  res.status(500).send('Oops')
})

// app.all("/", (reg, res) => {
//     res.send(`<h1>${messageProvider}</h1>`)
// });

// --------------------------------------------------------------------------------------
