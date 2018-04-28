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


function assignCampaignsApi(app) {
    app.get('/api/campaigns', getCampaigns);
    app.get('/api/campaign/:id', getCampaign);
}


module.exports = { assignCampaignsApi };
