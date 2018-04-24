const { spawn } = require('child_process');


function log(...args) {
    return false && console.log(...args);
}

/**
 * Spawns the `node server/server.js` for testing purposes.
 * @return {{serverProcess: ChildProcess, promise: Promise<any>}}
 */
function spawnServer() {
    let serverProcess;
    const promise = new Promise((resolve, reject) => {
        const processName = 'server';
        serverProcess = spawn('node', ['server/server.js']); // MUST be invoked from project root!

        serverProcess.stdout.on('data', (data) => {
            log(`${processName} stdout:`, data.toString());
            resolve(serverProcess);
        });
        serverProcess.stderr.on('data', (data) => {
            log(`${processName} stderr:`, data.toString());
            reject(serverProcess);
        });

        serverProcess.on('close', (code) => {
            log(`${processName} closed (${code})`);
            reject(serverProcess);
        });

        if (serverProcess.error) {
            reject(serverProcess);
        }
    });

    return { serverProcess, promise };
}


module.exports = { spawnServer };
