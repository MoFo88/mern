const postsRouter = require('express').Router()
const controller = require('./postsController')

postsRouter.param('id', controller.param)

postsRouter.route('/')
    .get(controller.get)
    .post(controller.post)

postsRouter.route('/:id')
    .get(controller.getById)
    .post((reg, res) => {
      res.json(null)
    })
    .delete((reg, res) => {
      res.json(null)
    })

module.exports = postsRouter
