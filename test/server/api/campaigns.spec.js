const assert = require('assert');
const { request } = require('../../test-utils/node-request');
const { spawnServer } = require('../../test-utils/spawn-server');
const { CAMPAIGNS } = require('./mocks');
const { ERRORS } = require('../../../server/api/api-shared');


describe('/api/campaigns', () => {
    let serverProcess;
    let promise;
    beforeEach(() => {
        ({ serverProcess, promise } = spawnServer());
    });
    afterEach(() => {
        serverProcess.kill(1);
    });

    it('GET /api/campaigns should return all campaigns', () => {
        return promise
            .then(() => request('GET', 'http://localhost/api/campaigns'))
            .then((data) => {
                assert.equal(data.constructor, Array, 'should be []');
                assert.equal(data.length, CAMPAIGNS.length, `length should be ${CAMPAIGNS.length}`);
            });
    });

    it('GET /api/campaign/1 should return campaign with id=1', () => {
        return promise
            .then(() => request('GET', 'http://localhost/api/campaign/1'))
            .then((data) => {
                assert.equal(data.id, CAMPAIGNS[1].id, 'id');
                assert.equal(data.name, CAMPAIGNS[1].name, 'name');
            });
    });

    it('GET /api/campaign/100 should return empty object', () => {
        return promise
            .then(() => request('GET', 'http://localhost/api/campaign/100'))
            .then((data) => {
                assert.deepEqual(data, {});
            });
    });

    it('GET /api/campaign/asdf should return error', () => {
        return promise
            .then(() => request('GET', 'http://localhost/api/campaign/asdf'))
            .catch((data) => {
                assert.equal(data.status, ERRORS.Server.General.status, `status: ${ERRORS.Server.General.status}`);
                assert.equal(data.message, ERRORS.Server.General.message, `message: "${ERRORS.Server.General.message}"`);
            });
    });

});
