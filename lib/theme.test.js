const lib = require('./theme')
const test = require('ava')

test('should be an object', (t) => {
  const theme = lib({})
  t.is(typeof theme, 'object')
})
