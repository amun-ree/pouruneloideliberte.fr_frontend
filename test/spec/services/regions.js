'use strict';

describe('Service: Regions', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Regions;
  beforeEach(inject(function (_Regions_) {
    Regions = _Regions_;
  }));

  it('should do something', function () {
    expect(!!Regions).toBe(true);
  });

});
