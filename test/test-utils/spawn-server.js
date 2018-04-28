const { spawn } = require('child_process');


function log(...args) {
    return false && console.log(...args);
}

/**
 * Spawns the `node server/server.js` for testing purposes.
 * @return {{serverProcess: ChildProcess, promise: Promise<*>}}
 */
function spawnServer() {
    const srvr = { serverProcess: null, promise: null };
    srvr.promise = new Promise((resolve, reject) => {
        const processName = 'server';
        srvr.serverProcess = spawn('node', ['server/server.js']); // MUST be invoked from project root!

        srvr.serverProcess.stdout.on('data', (data) => {
            log(`${processName} stdout:`, data.toString());
            resolve(srvr.serverProcess);
        });
        srvr.serverProcess.stderr.on('data', (data) => {
            log(`${processName} stderr:`, data.toString());
            reject(srvr.serverProcess);
        });

        srvr.serverProcess.on('close', (code) => {
            log(`${processName} closed (${code})`);
            reject(srvr.serverProcess);
        });

        if (srvr.serverProcess.error) {
            reject(srvr.serverProcess);
        }
    });

    return srvr;
}


module.exports = { spawnServer };
