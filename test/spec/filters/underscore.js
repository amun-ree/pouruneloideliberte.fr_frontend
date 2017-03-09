'use strict';

describe('Filter: Underscore', function () {

  // load the filter's module
  beforeEach(module('admdFrontendApp'));

  // initialize a new instance of the filter before each test
  var Underscore;
  beforeEach(inject(function ($filter) {
    Underscore = $filter('Underscore');
  }));

  it('should return the input prefixed with "Underscore filter:"', function () {
    var text = 'angularjs';
    expect(Underscore(text)).toBe('Underscore filter: ' + text);
  });

});
