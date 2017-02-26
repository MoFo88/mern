var apiRouter = require('express').Router()
var postRouter = require('./posts/postsRouter')

apiRouter.use('/posts', postRouter)

module.exports = apiRouter
