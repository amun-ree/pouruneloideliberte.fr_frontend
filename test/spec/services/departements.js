'use strict';

describe('Service: Departements', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Departements;
  beforeEach(inject(function (_Departements_) {
    Departements = _Departements_;
  }));

  it('should do something', function () {
    expect(!!Departements).toBe(true);
  });

});
