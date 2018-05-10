const { ERRORS, wrapError } = require('./api/api-shared');


const API_MASK = /^\/api\//;
let _staticPath = '';


function sendIndexFile(res, next) {
    res.sendFile('index.html', { root: _staticPath, }, (err) => {
        if (err) {
            next(err);
        }
    });
}


function mwRedirectNonApiToIndexFile(req, res, next) {
    if (API_MASK.test(req.originalUrl)) {
        next();
    } else {
        sendIndexFile(res, next);
    }
}


function mw404(req, res, next) {
    const url = req.originalUrl;
    console.error(`[ROUTING] 404 at "${url}"`);

    if (API_MASK.test(req.originalUrl)) {
        const debugAndMessage = { debug: { url }, message: 'API not implemented' };
        const notFoundErrorMsg = wrapError(ERRORS.User.NotFound, debugAndMessage);
        res.status(notFoundErrorMsg.status).send(notFoundErrorMsg);
    } else {
        sendIndexFile(res, next);
    }
}


function mwUnknownRoutingError(error, req, res, next) {
    const url = req.originalUrl;
    const unknownErrorMsg = wrapError(ERRORS.Server.General, {
        message: 'Unexpected routing behavior',
        debug: { url, error }
    });
    console.error(`[ROUTING] Unexpected behavior with "${url}"`);
    res.status(unknownErrorMsg.status).send(unknownErrorMsg);
}


/**
 * @param {string} staticPath           path to the dir with static resources
 */
function initCommonMiddleware(staticPath) {
    _staticPath = staticPath;
}


module.exports = { initCommonMiddleware, mwRedirectNonApiToIndexFile, mw404, mwUnknownRoutingError, };
