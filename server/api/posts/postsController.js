exports.param = (req, res, next, slug) => {
  const db = req.app.locals.db
  db.collection('posts')
    .findOne({ 'slug': slug }, { fields: { _id: 0 } }).then(
    (post) => {
      if (!post) {
        res.status(404)
      } else {
        req.post = post
      }
      next()
    })
    .catch((e) => {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ERROR!!! ' + e.message)
      res.status(500).send()
    })
}

exports.get = (req, res) => {
  const db = req.app.locals.db
  db.collection('posts')
    .find({}, { fields: { _id: 0 } })
    .toArray()
    .then((posts) => {
      if (!posts) {
        res.status(404).send()
      } else {
        res.json(posts)
      }
    })
    .catch((e) => {
      console.log('ERROR!!! ' + e.message)
      res.status(500).send()
    })
}

exports.post = function (req, res) {
  res.send(`<h1>post added</h1>`)
}

exports.getById = async function (req, res) {
  res.json(req.post)
}
