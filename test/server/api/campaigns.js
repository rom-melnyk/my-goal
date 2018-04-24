const assert = require('assert');
const { request } = require('../../../server/utils/request');
const { spawnServer } = require('../../../server/utils/spawn-server');


describe('/api/campaigns', () => {
    let serverProcess;
    let promise;
    beforeEach(() => {
        ({ serverProcess, promise } = spawnServer());
    });
    afterEach(() => {
        serverProcess.kill(1);
    });

    it('should return all campaigns (GET)', () => {
        return promise
            .then(() => request('GET', 'http://localhost/api/campaigns'))
            .then((data) => {
                assert(data.constructor === Array, 'should be []');
                assert(data.length === 3, 'length should be 3');
            });
    });
});
