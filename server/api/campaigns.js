const { query } = require('../db');
const { ERRORS, wrapError } = require('./api-shared');


function getCampaigns(req, res) {
    query('/campaigns')
        .then(data => res.send(data))
        .catch((debug) => {
            const error = wrapError(ERRORS.Server.General, { debug });
            res.status(error.status).send(error);
        });
}


function getCampaign(req, res) {
    query('/campaign/' + req.params.id)
        .then(data => res.send(data))
        .catch((debug) => {
            const error = wrapError(ERRORS.Server.General, { debug });
            res.status(error.status).send(error);
        });
}


module.exports = { getCampaigns, getCampaign, };
