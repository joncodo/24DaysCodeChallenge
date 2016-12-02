var assert = require('assert');
var day1a = require('../day1a/day1a.js');

describe('day1a', function() {
  describe('#getList()', function() {
    it('should return an array with 174 values', function() {
      var array = day1a.getList();
      assert.equal(array.length, 174);
    });
  });

  describe('#getDistance()', function() {
    it('should return the correct legths', function() {
      var length = day1a.getDistance(["R2", "L3"]);
      assert.equal(length, 5);

      var length = day1a.getDistance(["R2", "R2", "R2"]);
      assert.equal(length, 2);

      var length = day1a.getDistance(["R5", "L5", "R5", "R3"]);
      assert.equal(length, 12);
    });
  });

});
