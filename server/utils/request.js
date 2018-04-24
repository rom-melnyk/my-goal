const http = require('http');
const url = require('url');


const JSON_REGEXP = /json/;

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

    return new Promise((resolve, reject) => {
        const req = http.request(requestOptions, (res) => {
            if (res.statusCode >= 300 && res.statusCode !== 304 /* Not Modified */) {
                reject({
                    error: res.statusCode,
                    response: res,
                });
                return;
            }

            let data = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => { data += chunk });
            res.on('end', () => {
                if (JSON_REGEXP.test(res.headers['Content-Type'] || res.headers['content-type'])) {
                    try {
                        data = JSON.parse(data);
                        resolve(data);
                    } catch (e) {
                        reject({
                            error: e,
                            response: data
                        });
                    }
                } else {
                    resolve(data);
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
