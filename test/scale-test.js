var vows = require('vows')
var assert = require('assert')
var Scale = require('../')

vows.describe('Scale').addBatch({
  'create scale': function () {
    assert(Scale(2773))
  },
  'create scale with string': function () {
    assert.equal(Scale('2773').decimal, 2773)
  },
  'binary': function () {
    assert.equal(Scale(2773).binary, '101011010101')
  },
  'length': function () {
    assert.equal(Scale(2773).length, 7)
  },
  'steps': function () {
    assert.deepEqual(Scale(2773).steps, [2, 2, 1, 2, 2, 2, 1])
  },
  'leap': function () {
    assert.equal(Scale(2773).leap, 2)
  },
  'modes': function () {
    assert.deepEqual(Scale(2773).modes, [
      '101011010101',
      '101101010110',
      '110101011010',
      '101010110101',
      '101011010110',
      '101101011010',
      '110101101010'
    ])
  }
}).export(module)
