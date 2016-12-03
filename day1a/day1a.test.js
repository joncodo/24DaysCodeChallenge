var assert = require('assert');
var day1a = require('../day1a/day1a.js');

var input = "L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3, R5, L2, R5, L4, L3, R2, R2, L5, L1, R4, L1, R3, L3, R5, R2, L5, R2, R1, R1, L5, R1, L3, L2, L5, R4, R4, L2, L1, L1, R1, R1, L185, R4, L1, L1, R5, R1, L1, L3, L2, L1, R2, R2, R2, L1, L1, R4, R5, R53, L1, R1, R78, R3, R4, L1, R5, L1, L4, R3, R3, L3, L3, R191, R4, R1, L4, L1, R3, L1, L2, R3, R2, R4, R5, R5, L3, L5, R2, R3, L1, L1, L3, R1, R4, R1, R3, R4, R4, R4, R5, R2, L5, R1, R2, R5, L3, L4, R1, L5, R1, L4, L3, R5, R5, L3, L4, L4, R2, R2, L5, R3, R1, R2, R5, L5, L3, R4, L5, R5, L3, R1, L1, R4, R4, L3, R2, R5, R1, R2, L1, R4, R1, L3, L3, L5, R2, R5, L1, L4, R3, R3, L3, R2, L5, R1, R3, L3, R2, L1, R4, R3, L4, R5, L2, L2, R5, R1, R2, L4, L4, L5, R3, L4";

describe('day1a', function() {
  describe('#getList()', function() {
    it('should return an array with 174 values', function() {
      var array = day1a.getList(input);
      assert.equal(array.length, 174);
    });
  });

  describe('#getDistance()', function() {
    it('should return the correct legths', function() {
      var length1 = day1a.getDistance(day1a.getList("R2, L3"));
      assert.equal(length1, 5);

      var length2 = day1a.getDistance(day1a.getList("R2, R2, R2"));
      assert.equal(length2, 2);

      var length3 = day1a.getDistance(day1a.getList("R5, L5, R5, R3"));
      assert.equal(length3, 12);
    });
  });

  describe('extraHandWorkedOutCases()', function() {
    it('should return the correct legths', function() {
      var length4 = day1a.getDistance(day1a.getList("L4, L3, R1, L4, R2, R2, L1, L2, R1, R1, L3"));
      assert.equal(length4, 18);
  });

  describe('#actualQuestion()', function() {
    it('should return the correct legths for the question', function() {
      assert.equal(day1a.getDistance(day1a.getList(input)), 332);
    });
  });
});
