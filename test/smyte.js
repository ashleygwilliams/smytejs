/* global describe:true, it:true */

const Smyte = require('../')
const assert = require('chai').assert

describe('Smyte', function () {
  const smyte = new Smyte('thisisakey', 'thisisasecret')
  describe('constructor', function () {
    it('constructs a new Smyte object given a key and a secret', function () {
      assert.instanceOf(smyte, Smyte)
    })
  })
  describe('sendAction', function () {
    it('has a sendAction function', function () {
      assert.isDefined(smyte.sendAction)
      assert.isFunction(smyte.sendAction)
    })
  })
})
