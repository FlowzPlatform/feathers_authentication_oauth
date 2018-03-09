const assert = require('assert');
const app = require('../../src/app');

describe('\'User\' service', () => {
  it('registered the service', () => {
    const service = app.service('User');

    assert.ok(service, 'Registered the service');
  });
});
