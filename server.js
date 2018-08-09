const path = require('path');

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./src/server/config');
const router = require('./src/server/routers');

const app = express();
const server = http.createServer(app);

app.use(express.static(config.appDist));
app.use(bodyParser.json());

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, config.appDist, '/index.html'));
});

// create web-socket for messages
require('./src/server/web-sockets').messageWebSocket(server);

server.listen(3000, function() {
    console.log('App starts on port 3000');
});
