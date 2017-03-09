'use strict';

describe('Service: Departement', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Departement;
  beforeEach(inject(function (_Departement_) {
    Departement = _Departement_;
  }));

  it('should do something', function () {
    expect(!!Departement).toBe(true);
  });

});
