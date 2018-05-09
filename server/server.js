const http = require('http');
// const https = require('https');
const path = require('path');

// const forceSsl = require('express-force-ssl');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const fileUpload = require('express-fileupload');

// const { UPLOADS_BASE } = require('../shared/constants');
// const { uploadDir } = require('./config.json');

// const httpsOptions = require('./https-options');
// const { renderAllPostsPage, renderPostPage, renderAdminPage } = require('./html/index.html.js');
const { assignCampaignsApi } = require('./api/campaigns');
// const { assignUsersApi, userMiddleware } = require('./api/users');
// const { assignFilesApi } = require('./api/files');
const { ERRORS, wrapError } = require('./api/api-shared');

const app = express();

// app.use(UPLOADS_BASE, express.static( path.resolve(uploadDir) ));
const staticPath = path.resolve(__dirname, 'static');
app.use(express.static(staticPath));

const API_MASK = /^\/api\//;
app.use(/.*/, (req, res, next) => {
    if (API_MASK.test(req.originalUrl)) {
        next();
    } else {
        res.sendFile('index.html', { root: staticPath, }, (err) => {
            if (err) {
                next(err);
            }
        });
    }
});

// app.use(forceSsl);
app.use(cookieParser());
app.use(bodyParser.json());
/* app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
})); */
// app.use(userMiddleware);

// app.get('/', renderAllPostsPage);
// app.get('/post/:id', renderPostPage);
// app.get('/admin(/*)?', renderAdminPage);
assignCampaignsApi(app);
// assignUsersApi(app);
// assignFilesApi(app);

app.use((req, res, next) => {
    const notFoundErrorMsg = wrapError(ERRORS.User.NotFound, {
        debug: { url: req.originalUrl }
    });
    console.error(`[ROUTING] 404 at "${res.originalUrl}"`);
    res.status(notFoundErrorMsg.status).send(notFoundErrorMsg);
});

app.use((error, req, res, next) => {
    const unknownErrorMsg = wrapError(ERRORS.Server.General, {
        message: 'Unexpected routing behavior',
        debug: { url: req.originalUrl, error }
    });
    console.error(`[ROUTING] Unexpected behavior with "${res.originalUrl}"`);
    res.status(unknownErrorMsg.status).send(unknownErrorMsg);
});

const logMsg = 'My Goal server listening on ';

http.createServer(app).listen(80, () => console.log(logMsg + 80));
// https.createServer(httpsOptions, app).listen(443, () => console.log(logMsg + 443));
