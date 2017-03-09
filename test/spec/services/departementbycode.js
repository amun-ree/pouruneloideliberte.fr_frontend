'use strict';

describe('Service: DepartementByCode', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var DepartementByCode;
  beforeEach(inject(function (_DepartementByCode_) {
    DepartementByCode = _DepartementByCode_;
  }));

  it('should do something', function () {
    expect(!!DepartementByCode).toBe(true);
  });

});
