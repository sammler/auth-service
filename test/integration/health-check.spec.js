const superTest = require('supertest');
const HttpStatus = require('http-status-codes');
const AppServer = require('./../../src/api/app-server');

const defaultConfig = require('./../test-lib/default-config');
const pkg = require('./../../package.json');

describe('auth-service => health-check', () => {

  let server;
  const appServer = new AppServer(defaultConfig);
  before(() => {
    return appServer.start()
      .then(() => {
        server = superTest(appServer.server);
      });
  });

  after(() => {
    return appServer.stop();
  });

  it('returns OK and a timestamp', () => {
    return server
      .get('/health-check')
      .expect(HttpStatus.OK)
      .then(result => {
        expect(result).to.exist;
        expect(result).to.have.property('body');
        expect(result.body).to.have.a.property('ts').to.exist;
        expect(result.body).to.have.a.property('version').to.be.equal(pkg.version);
      });
  });
});
