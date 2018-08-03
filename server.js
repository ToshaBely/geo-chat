const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./src/server/config');
const router = require('./src/server/routers')(express);

const app = express();

app.use(express.static(config.appDist));

app.use(bodyParser.json());

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.appDist, '/index.html'));
});

app.listen(3000, function() {
    console.log('App starts on port 3000');
});
