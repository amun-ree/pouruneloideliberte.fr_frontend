'use strict';

describe('Service: Opinion', function () {

  // load the service's module
  beforeEach(module('admdFrontendApp'));

  // instantiate service
  var Opinion;
  beforeEach(inject(function (_Opinion_) {
    Opinion = _Opinion_;
  }));

  it('should do something', function () {
    expect(!!Opinion).toBe(true);
  });

});
