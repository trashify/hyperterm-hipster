const theme = require('./lib/theme')
console.log(theme.toString())

exports.decorateConfig = config => {
  return Object.assign({}, config, theme(config))
}
