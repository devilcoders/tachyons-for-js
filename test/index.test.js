/* globals test, expect */
const tc = require('../dist/tachyons-for-js')

test('should render one style properly', () => {
  const oneStyle = {
    ...tc('ma0'),
    borderRadius: '100%'
  }

  const expectedStyle = {
    margin: 0,
    borderRadius: '100%'
  }

  expect(oneStyle).toEqual(expectedStyle)
})

test('should render multiple styles properly', () => {
  const fewStyles = {
    ...tc('ma0 pa0 ttu'),
    borderRadius: '100%'
  }

  const expectedStyle = {
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    borderRadius: '100%'
  }

  expect(fewStyles).toEqual(expectedStyle)
})

test('should render multiple styles properly with white space', () => {
  const fewStyles = {
    ...tc(` ma0 pa0 ttu `),
    borderRadius: '100%'
  }

  const expectedStyle = {
    margin: 0,
    padding: 0,
    textTransform: 'uppercase',
    borderRadius: '100%'
  }

  expect(fewStyles).toEqual(expectedStyle)
})
