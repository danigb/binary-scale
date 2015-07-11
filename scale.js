'use strict'

module.exports = Scale

function Scale (num) {
  var scale = (this instanceof Scale) ? this : {}
  scale.decimal = validate(num)
  scale.binary = scale.decimal.toString(2)
  scale.length = scale.binary.match(/1/g).length
  scale.steps = scale.binary.match(/1(0)*/g).map(function (o) { return o.length })
  scale.leap = Math.max.apply(Math, scale.steps)
  scale.modes = Array.apply(null, Array(12))
    .map(function (a, i) { return rotate(scale.binary, i) })
    .filter(function (binary) { return binary[0] === '1' })
  scale.rootMode = scale.modes.slice().sort()[0]
  return scale
}
Scale.MIN = 2048
Scale.MAX = 4096

function validate (num) {
  if (!/^\d+$/) throw Error('Not valid scale num: ' + num)
  num = +num
  if (num < Scale.MIN || num >= Scale.MAX) throw Error('Scale num out of bounds: ' + num)
  return num
}

/*
 * rotates a string of 12 characters length (a scale binary number)
 */
function rotate (str, positions) {
  return str.slice(positions, 12) + str.slice(0, positions)
}

if (typeof module === 'object' && module.exports) module.exports = Scale
if (typeof window !== 'undefined') window.Scale = Scale
