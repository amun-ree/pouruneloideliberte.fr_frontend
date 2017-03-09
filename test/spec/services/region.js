'use strict';

describe('Service: Region', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Region;
  beforeEach(inject(function (_Region_) {
    Region = _Region_;
  }));

  it('should do something', function () {
    expect(!!Region).toBe(true);
  });

});
