'use strict';

describe('Service: DeputyLaws', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var DeputyLaws;
  beforeEach(inject(function (_DeputyLaws_) {
    DeputyLaws = _DeputyLaws_;
  }));

  it('should do something', function () {
    expect(!!DeputyLaws).toBe(true);
  });

});
