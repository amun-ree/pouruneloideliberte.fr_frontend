'use strict';

describe('Filter: GetBySVGCode', function () {

  // load the filter's module
  beforeEach(module('admdFrontendApp'));

  // initialize a new instance of the filter before each test
  var GetBySVGCode;
  beforeEach(inject(function ($filter) {
    GetBySVGCode = $filter('GetBySVGCode');
  }));

  it('should return the input prefixed with "GetBySVGCode filter:"', function () {
    var text = 'angularjs';
    expect(GetBySVGCode(text)).toBe('GetBySVGCode filter: ' + text);
  });

});
