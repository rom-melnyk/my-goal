const { query } = require('../db');
const { ERRORS, wrapError } = require('./api-shared');


function getCampaigns(req, res) {
    query()
        .then(data => res.send(data))
        .catch(e => wrapError(ERRORS.Server.General, { debug: e }))
}


function assignCampaignsApi(app) {
    app.get('/api/campaigns', getCampaigns);
}


module.exports = { assignCampaignsApi };
