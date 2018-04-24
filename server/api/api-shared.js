/**
 * @typedef {{status: number, message: string}} ErrorCode
 */

/**
 *
 * @type {{Server: {*: ErrorCode}, User: {*: ErrorCode}}}
 */
const ERRORS = {
    Server: {
        General: { status: 500, message: 'Server error' },
        DbConnection: { status: 590, message: 'Database connection error' },
        DbQuery: { status: 591, message: 'Database query error' },
    },
    User: {
        NotAuthorized: { status: 401, message: 'Not authorized', },
        NotFound: { status: 404, message: 'Not found', },
    },
};


/**
 * @param {ErrorCode} type
 * @param {{debug: *, [message]: string}} debugAndMessage
 */
function wrapError(type, debugAndMessage) {
    return Object.assign({}, type, debugAndMessage);
}


module.exports = { ERRORS, wrapError };
