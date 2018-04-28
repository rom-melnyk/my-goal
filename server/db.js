const { CAMPAIGNS, STEPS } = require('../test/server/api/mocks');

function query(qry) {
    switch (true) {
        case /^\/campaigns$/.test(qry): return Promise.resolve(CAMPAIGNS);
        case /^\/campaign\/\d+$/.test(qry): {
            const idx = +( /\d+$/.exec(qry)[0] );
            return Promise.resolve(CAMPAIGNS[idx] || {});
        }
        case /\/steps$/: return Promise.resolve(STEPS);
        case /^\/step\/\d+$/.test(qry): {
            const idx = +( /\d+$/.exec(qry)[0] );
            return Promise.resolve(STEPS[idx] || {});
        }
        default:
    }
    return Promise.reject('API not implemented');
}


module.exports = { query };
