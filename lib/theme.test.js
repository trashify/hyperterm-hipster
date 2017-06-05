/* eslint-env jest */
const lib = require('./theme')

test('should be an object', () => {
  const theme = lib({})
  expect(typeof theme).toBe('object')
})
