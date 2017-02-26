module.exports = function (app) {
  console.log('DEV MODE')
  const webpack = require('webpack')
  const config = require('../../webpack.config')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}
