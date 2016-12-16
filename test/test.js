'use strict'

var expect = require('chai').expect;
var areaCalc = require('../areaCalc.js');
var pokeSort = require('../pokeSort.js');

describe('areaCalc', function() {
  it("the area of the triangle should return", function() {
    expect(areaCalc(3,4,5)).to.equal(6);
  });

  it("should return 0 if all 0", function() {
    expect(areaCalc(0,0,0)).to.equal(0);
  });
});

describe('pokeSort', function() {
  it("returns an empty array if the array is empty", function() {
    expect(pokeSort([], 'name')).to.deep.equal([]);
  });
  it("return the object if array only has one object", function() {
    expect(pokeSort([{id: 4, name: 'charmander', weight: 12.3}], 'name')).to.deep.equal([{id: 4, name: 'charmander', weight: 12.3}]);
  });
});
