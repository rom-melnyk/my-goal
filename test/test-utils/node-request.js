const http = require('http');
const https = require('https');
const url = require('url');


const JSON_REGEXP = /json/;

function sendData(resolver, rejector, data, error) {
    if (error) {
        if (typeof data === 'object') {
            data.error = error;
        } else {
            data = { error, debug: data };
        }
        rejector(data);
    } else {
        resolver(data);
    }
}

function request(method, href, options = {}, data = null) {
    const requestOptions = Object.assign(
        { method },
        options,
        url.parse(href),
    );

    if (data) {
        data = JSON.stringify(data);
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }
        requestOptions.headers['Content-Length'] = Buffer.byteLength(data);
        if (!requestOptions.headers['Content-Type']) {
            requestOptions.headers['Content-Type'] = 'application/json';
        }
    }

    const requestor = requestOptions.protocol === 'https:' ? https : http;
    return new Promise((resolve, reject) => {
        const req = requestor.request(requestOptions, (res) => {
            let error = false;
            if (res.statusCode >= 300 && res.statusCode !== 304 /* Not Modified */) {
                error = res.statusCode;
            }

            let data = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => {
                if (JSON_REGEXP.test(res.headers['Content-Type'] || res.headers['content-type'])) {
                    try {
                        data = JSON.parse(data);
                        sendData(resolve, reject, data, error);
                    } catch (e) {
                        reject({
                            status: 999,
                            message: 'JSON parsing error',
                            debug: data,
                        });
                    }
                } else {
                    sendData(resolve, reject, data, error);
                }
            });
        });

        req.on('error', (error) => reject({ error, }) );

        if (data) {
            req.write(data);
        }
        req.end();
    });

}


module.exports = { request };
