'use strict';

describe('Service: Deputy', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Deputy;
  beforeEach(inject(function (_Deputy_) {
    Deputy = _Deputy_;
  }));

  it('should do something', function () {
    expect(!!Deputy).toBe(true);
  });

});
